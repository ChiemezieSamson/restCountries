import React from 'react'
import { Link } from 'react-router-dom'
import { populationDataHead } from './data'

const PopulationBarCharts = ({finalResult, lang}) => {
 
  return (
    <div className='my-20 px-2 mx-2 overflow-x-scroll touch-pan-x sm:overflow-x-auto'>
      <ul className='max-w-6xl min-w-[332px] mx-auto sm:text-center'>
        <li className='hidden sm:grid sm:grid-cols-3 gap-x-3 sm:text-lg lg:text-xl font-poppins font-bold mb-5 capitalize'>
          <span className='block text-left'>{populationDataHead.country[lang]}</span>
          <span>{populationDataHead.population[lang]}</span>
          <span>(%){populationDataHead.population[lang]}</span>
        </li>
        {finalResult?.map(country => {
          const backgroundWidth = ((country?.percentage/20) * 100)?.toFixed(2)
          
          return (
            <li key={country?.id} 
            className='relative isolate hover:scale-105 focus-within:scale-110 transitionEffect bg-slate-300/300 textLight dark:dark_text dark:bgLight shadow-md dark:shadow-slate-50/50 
            shadow-slate-800/50 tracking-widest transitionEffect backdrop-blur-[1px] dark:backdrop-blur-0' title={country?.name[lang]?.length > 13 ? country?.name[lang] : ""}>
              <div className={`absolute inset-0 -z-10 dark:bg-green-800 bg-amber-500 h-full`} style={{width: `${backgroundWidth}%`}}></div>
              <Link to={`/countries/${country?.id}`} 
                className='grid sm:grid-cols-3 gap-x-3 mb-4 font-poppins font-semibold capitalize text-sm sm:text-base lg:text-lg sm:items-center sm:justify-center p-2 rounded-xl relative isolate
                group-hover:backdrop-blur-[5px] dark:group-hover:backdrop-blur-[5px] dark:group-hover:textShawdo'
              >
                <span className='grid grid-cols-2 sm:inline-block gap-x-4'><span className='sm:hidden'>{populationDataHead.country[lang]}:</span> <span className='block text-left'>{country?.name[lang]?.slice(0, 13)}{country?.name[lang]?.length > 13 ? "..." : ""}</span></span>
                <span className='grid grid-cols-2 sm:inline-block gap-x-4'><span className='sm:hidden'>{populationDataHead.population[lang]}:</span> <span>{parseInt(country?.population, 10).toLocaleString()}</span></span>
                <span className='grid grid-cols-2 sm:inline-block gap-x-4'><span className='sm:hidden'>(%){populationDataHead.population[lang]}:</span> <span>{country?.percentage}%</span></span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PopulationBarCharts
