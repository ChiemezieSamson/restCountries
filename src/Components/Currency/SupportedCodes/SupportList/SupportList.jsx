import React from 'react'
import { Heading } from '../data'
import { Link } from 'react-router-dom'
import { useFiliterCountryWithNoCureencyName } from '../../../sharedComponent/sharedComponent'

const SupportList = ({finalResult, lang}) => {
  const { filiteredCountry } = useFiliterCountryWithNoCureencyName(finalResult) // make sure that some countries with no currency are not displayed

  return (
    <div className='mt-20 pb-32 px-2 mx-2 overflow-x-scroll sm:overflow-x-auto'>
    <ul className='max-w-6xl min-w-[340px] mx-auto'>
      
      <li className='hidden sm:grid sm:grid-cols-4 gap-x-3 sm:text-lg lg:text-xl font-poppins font-bold mb-5 capitalize'>
        <span>{Heading.country[lang]}</span>
        <span>{Heading.currency_name[lang]}</span>
        <span className='block text-left'>{Heading.currency_code[lang]}</span>
        <span>{Heading.currency_symbol[lang]}</span>
      </li>

      {filiteredCountry?.map(country => {
        
        return (
          <li key={country?.id} 
          className='relative isolate hover:scale-105 focus-within:scale-110 transitionEffect bg-slate-300/300 textLight dark:dark_text dark:bgLight shadow-md dark:shadow-slate-50/50 
          shadow-slate-800/50 tracking-widest transitionEffect backdrop-blur-[1px] group dark:backdrop-blur-0 rounded-2xl' title={country?.name[lang]?.length > 13 ? country?.name[lang] : ""}>

            <div className='absolute right-0 inset-y-0 grid items-center justify-center -z-10'>
              <img 
                src={country?.flag?.svg ? country?.flag?.svg : country?.flag?.png} 
                alt={country?.flag?.alt} 
                loading="lazy"
                className='aspect-[8/3] max-w-28 mx-auto object-contain invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:opacity-100 group-focus-within:visible transitionEffect'
              />
            </div>
            
            <Link to={`/currency/exchange_rate/${country?.id}`} 
              className='grid sm:grid-cols-4 gap-x-3 mb-4 font-poppins font-semibold capitalize text-sm sm:text-base lg:text-lg sm:items-center sm:justify-center p-2 rounded-xl dark:group-hover:textShawdo
              group-hover:backdrop-blur-[5px] dark:group-hover:backdrop-blur-[0.5px]'
            >
              <span className='grid grid-cols-2 sm:inline-block gap-x-4'><span className='sm:hidden'>{Heading.country[lang]}:</span> <span>{country?.name[lang]?.slice(0, 13)}{country?.name[lang]?.length > 13 ? "..." : ""}</span></span>
              <span className='grid grid-cols-2 sm:inline-block gap-x-4' title={country?.currency_name[lang]?.length > 13 ? country?.currency_name[lang] : ""}>
                <span className='sm:hidden'>{Heading.currency_name[lang]}:</span> <span>{country?.currency_name[lang]?.slice(0, 13)}{country?.currency_name[lang]?.length > 13 ? "..." : ""}</span>
              </span>
              <span className='grid grid-cols-2 sm:inline-block gap-x-4'><span className='sm:hidden'>{Heading.currency_code[lang]}:</span> <span className='sm:inline-block sm:ml-4'>{country?.currency_code}</span></span>
              <span className='grid grid-cols-2 sm:inline-block gap-x-4'><span className='sm:hidden'>{Heading.currency_symbol[lang]}:</span> <span className='sm:inline-block sm:ml-4'>{country?.currency_symbol}</span></span>
            </Link>
          </li>
        )
      })}
    </ul>
  </div>
  )
}

export default SupportList
