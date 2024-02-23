import React from 'react'
import { NavBartoggleIcon, navLink } from './data'
import { Link, useLocation } from 'react-router-dom'
import { DarkModeToggleButton } from '../darkModeAction/DarkMode';
import { LanguageToggleButton } from '../LanguageTransAction/LanguageAction';

const Navigation = ({lang, setIsLanguage, handleCloseSideBar, navBar, toggleNavBar}) => {
  const location = useLocation();
  return (
    <nav className='grid grid-flow-col justify-between p-5 max-w-7xl mx-auto dark_text relative isolate'>
      <ul className={`m-0 grid grid-flow-row fixed mt-16 dark:dark_bgSoft bgLightSoft p-10 gap-3 ${navBar ? "translate-x-0 visible opacity-100" : "-translate-x-full invisible opacity-0"} transitionEffect
        md:translate-x-0 md:visible md:opacity-100 md:grid-flow-col md:p-0 md:static md:mt-0  md:gap-0`}>
        {navLink.map(link => {
          return (
            <li key={link.id} className='inline-block px-1 mx-0.5 group' onClick={handleCloseSideBar}>
              <Link to={link.url} className={"relative"}>
                <span className='text-lg font-poppins inline-block font-semibold uppercase leading-3'>{link.name[lang]}</span>
                <span className={location.pathname === link.url ? "active" : "navlink"}></span>
              </Link>
            </li>
          )
        })}
      </ul> 
      <NavBartoggleIcon navBar={navBar} toggleNavBar={toggleNavBar} />
      <div className='grid grid-flow-col gap-x-4 max-w-[135px]'>
        <DarkModeToggleButton lang={lang} onClick={handleCloseSideBar}/>
        <LanguageToggleButton lang={lang} setIsLanguage={setIsLanguage}/>
      </div>
    </nav>
  )
}

export default Navigation
