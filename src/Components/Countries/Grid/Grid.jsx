import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Grid = ({countries, count, size, buttonClicked}) => {
  

  // CSS style helping in the increase and decrease of the list when the window size is greater than 1280
  useEffect(() => {
    const ul = document.querySelector(".list") // get the ul

    // check the window size
    if (size > 1280) { 

      // if windosize is higher than 1280 add a style of grid to the ul 
      if (count > 0 && buttonClicked === "grid") {
        ul.style.gridTemplateColumns = `repeat(${count}, minmax(0, 1fr))`
      } 
    } else {

      // remove the style
      ul.style = ""
    }
  }, [count, size, buttonClicked])

  return (
    <div className='mx-2 px-2'>
      <ul className={`grid gap-4 xs:grid-cols-2 md:grid-cols-3 list items-center justify-center`}>
        {countries?.map((country, index) => {
          return (
            <li key={country?.id + index.toString()} className='inline-block relative group hover:scale-105 focus-within:scale-110 transitionEffect m-4 max-w-[220px] mx-auto' title={country?.name?.length > 10 ? country?.name : ""}>
              <Link to={`/countries/${country?.id}`} className='lg:text-lg grid items-center justify-center bg-slate-300/300 textLight dark:dark_text font-semibold dark:bgLight p-2 rounded-xl shadow-md dark:shadow-slate-50/50 
                shadow-slate-800/50 backdrop-blur-[1px] dark:backdrop-blur-0'>
                <img 
                  src={country?.flag?.svg} 
                  alt={country?.flag?.alt} 
                  loading="lazy" 
                  className='aspect-video rounded-md border border-solid border-slate-400/50 dark:border-0'
                />
                <span className='uppercase tracking-widest block text-center font-poppins'>
                  {country?.name === undefined ? country?.id?.slice(0, 10) : country?.name?.slice(0, 10)}
                  {country?.name?.length > 10  && "..."}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Grid
