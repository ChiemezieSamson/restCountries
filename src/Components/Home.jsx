import React, { useEffect, useState } from 'react'
import Navigation from './Navigation/Navigation';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Home = ({login, login2}) => {
  const [isLanguage, setIsLanguage] = useState("ko");
  const languageMode = localStorage.getItem("Language");

  const handleSetLanguage = (text) => {
    setIsLanguage(() => text)
  }

  useEffect(() => {
    if (languageMode) {
      setIsLanguage( () => languageMode);
      document.documentElement.setAttribute('lang', languageMode);
    } 
  }, [languageMode]);
  return (
    <div className='relative'>
      <div className='dark:dark_bgSoft bgLightSoft fixed inset-x-0 z-50'>
        <Navigation lang={isLanguage} setIsLanguage={handleSetLanguage}/>
      </div>

      <main className='max-w-7xl mx-auto'>
        <div className=''>
          <Outlet context={[isLanguage, login, login2]} />
        </div>


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
      </main>   
    </div>
  )
}

export default Home
