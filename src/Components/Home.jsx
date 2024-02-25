import React, { useEffect, useState } from 'react'
import Navigation from './Navigation/Navigation';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import TotheTop from './BackToTop/BacktoTop';
import { useWindowSize } from '@uidotdev/usehooks';

const Home = ({login, login2}) => {
  const [isLanguage, setIsLanguage] = useState("ko");
  const [navBar, setNavBar] = useState(false);
  const languageMode = localStorage.getItem("Language");
  const size = useWindowSize();

  // handling the selection of languages
  const handleSetLanguage = (text) => {
    setIsLanguage(() => text)
  }

  // founction for the Ellip button that opens on close 
  // the navbar on small screen
  const toggleNavBar = () => {
		setNavBar((change) => !change);
	};

  // Handle closing of navigation bar in small-screen devices,
	//  when other part of the page is clicked
	const handleCloseSideBar = () => {
		setNavBar(() => false);
	};

  // Handle closing of navigation bar if the screen width changes
	useEffect(() => {
		if (size.width > 640) {
			handleCloseSideBar();
		}
	}, [size]);

  // handling updating the users language selection when the page loads
  // for the first time and when language changes
  useEffect(() => {
    if (languageMode) {
      setIsLanguage( () => languageMode);
      document.documentElement.setAttribute('lang', languageMode);
    } 
  }, [languageMode]);

  return (
    <div className='relative'>

      {/* Navigation Bar and links */}
      <header className='dark:dark_bgSoft bgLightSoft fixed inset-x-0 z-50'>
        <Navigation 
          lang={isLanguage}
          navBar={navBar}
          toggleNavBar={toggleNavBar}
					handleCloseSideBar={handleCloseSideBar} 
          setIsLanguage={handleSetLanguage}
        />
      </header>

      {/* Main body*/}
      <main className='max-w-7xl mx-auto' onClick={handleCloseSideBar}>

        {/* Main childrens */}  
        <Outlet context={[isLanguage, login, login2]} />

        {/* === scroll back to lasts position on page refresh === */}
        <ScrollRestoration 
          getKey={(location, matches) => {
            const paths = ["/", "/regions/"];
            return paths.includes(location.pathname)
              ? // home and notifications restore by pathname
                location.pathname
              : // everything else by location like the browser
                location.key;
          }}
        />   

        {/* Move back to top onClick */}
        <TotheTop />
      </main>   

      {/* Footer */}
      <footer onClick={handleCloseSideBar} className="absolute bottom-0 inset-x-0 grid items-center justify-center py-1">
        <small>copyright &copy; 2022 by Nebe.Samson</small>
      </footer>
    </div>
  )
}

export default Home
