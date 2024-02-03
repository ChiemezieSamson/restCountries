import React from 'react'
import { navLink } from './data'
import { Link, useLocation } from 'react-router-dom'
import { DarkModeToggleButton } from '../darkModeAction/DarkMode';
import { LanguageToggleButton } from '../LanguageTransAction/LanguageAction';

const Navigation = ({lang, setIsLanguage}) => {
  const location = useLocation();
  return (
    <nav className='grid grid-flow-col justify-between p-5 max-w-7xl mx-auto dark_text '>
      <ul className='m-0'>
        {navLink.map(link => {
          return (
            <li key={link.id} className='inline-block px-1 mx-0.5 first:pl-0 first:ml-0 group'>
              <Link to={link.url} className={"relative"}>
                <span className='text-lg font-poppins inline-block font-semibold uppercase leading-3'>{link.name[lang]}</span>
                <span className={location.pathname === link.url ? "active" : "navlink"}></span>
              </Link>
            </li>
          )
        })}
      </ul> 
      <div className='grid grid-flow-col gap-x-4 max-w-[135px]'>
        <DarkModeToggleButton lang={lang}/>
        <LanguageToggleButton lang={lang} setIsLanguage={setIsLanguage}/>
      </div>
    </nav>
  )
}

export default Navigation
