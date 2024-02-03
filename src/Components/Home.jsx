import React, { useEffect, useState } from 'react'
import Navigation from './Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const Home = ({login}) => {
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
          <Outlet context={[isLanguage, login, handleSetLanguage]} />
        </div>
      </main>      
    </div>
  )
}

export default Home
