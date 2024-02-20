import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const List = ({countries, count, size, buttonClicked}) => {

  // CSS style helping in the increase and decrease of the list when the window size is greater than 1280
  useEffect(() => {
    const ul = document.querySelector(".list") // get the ul

    // check the window size
    if (size > 1280) { 

      // if windosize is higher than 1280 add a style of grid to the ul 
      if (count > 0 && buttonClicked === "list") {
        ul.style.gridTemplateColumns = `repeat(${count}, minmax(0, 1fr))`
      } 
    } else {

      // remove the style
      ul.style = ""
    }
  }, [count, size, buttonClicked])

  return (
    <div className='mx-2 px-2'>
      <ul className={`grid gap-4 xs:grid-cols-2 sm:grid-cols-3 list`}>
        {countries?.map((country, index) => {
          
          return (
            <li key={country?.id + index.toString()} className='inline-block relative group hover:scale-105 focus-within:scale-105 transitionEffect' title={country?.name?.length > 10 ? country?.name : ""}>
              <div className='absolute left-0 inset-y-0 grid items-center justify-center -z-10'>
                <img 
                  src={country?.flag?.svg} 
                  alt={country?.flag?.alt} 
                  loading="lazy"
                  className='aspect-[8/3] max-w-28 mx-auto object-contain invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:opacity-100 group-focus-within:visible transitionEffect'
                />
              </div>

              <Link to={`/countries/${country?.id}`} 
                className='lg:text-lg font-poppins grid items-center justify-center bg-slate-300/300 textLight dark:dark_text font-semibold dark:bgLight p-2 rounded-xl shadow-md dark:shadow-slate-50/50 
                shadow-slate-800/50 uppercase tracking-widest transitionEffect dark:group-hover:textShawdo'>
                  <span className='group-hover:backdrop-blur-[5px] dark:group-hover:backdrop-blur-[5px]'>
                    {country?.name === undefined ? country?.id?.slice(0, 10) : country?.name?.slice(0, 10)}
                    {country?.name?.length > 10 && "..."}
                  </span>
              </Link>
            </li>
          )
        })}
      </ul>      
    </div>
  )
}

export default List
