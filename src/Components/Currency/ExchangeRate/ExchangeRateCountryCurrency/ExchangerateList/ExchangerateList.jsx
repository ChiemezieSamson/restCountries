import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../../../../sharedComponent/Search/Search'
import ExchangeRateSlectionButton from '../ExchangeRateSlectionButton/ExchangeRateSlectionButton'

const ExchangerateList = ({countriesRate, lang, handleSetSearchResult, searchResult, finalResult, handleSetArrangeResult}) => {

  return (
    <div>
      <Search countries={finalResult} lang={lang} handleSetSearchResult={handleSetSearchResult}/>
      <ExchangeRateSlectionButton 
        searchResult={searchResult} 
        finalResult={finalResult} 
        countriesRate={countriesRate}
        lang={lang} 
        handleSetArrangeResult={handleSetArrangeResult}
      />
      <ul className='grid gap-x-4 max-w-4xl mx-auto p-1 overflow-x-scroll md:overflow-x-hidden pt-10'>
        {finalResult?.map((country, index) => {
          return (
            <li key={country?.id + index} className='grid grid-cols-3 md:grid-cols-4 border-t-2 last:border-b-2 border-black dark:border-white min-w-[488px] md:min-w-0'>

              <Link 
                to={`/currency/exchange_rate/${country?.id}`}
                className='p-1 col-span-1 border-x-2 hidden md:grid border-black dark:border-white items-center justify-center font-poppins font-semibold capitalize sm:text-lg lg:text-xl tracking-wider group'
                title={country?.name[lang]?.length > 14 ? country?.name[lang] : ""}
              >
                <span className='grid'>
                  {country?.name[lang]?.slice(0, 14)}
                  {country?.name[lang]?.length > 14  && "..."}
                  <span className='h-px w-[0%] group-hover:w-[100%] dark:bg-white bg-black transitionEffect opacity-0 group-hover:opacity-100'>
                </span>
                </span>
              </Link>         

              <div className='col-span-2 grid grid-cols-5 relative p-1 border-l-2 md:border-0 border-black dark:border-white'>
                <Link to={`/currency/exchange_rate/${country?.id}`} >
                  <img 
                    src={country?.flag?.svg ? country?.flag?.svg : country?.flag?.png} 
                    alt={country?.flag?.alt} 
                    loading="lazy"
                    className='aspect-square max-h-16 col-span-1 hover:scale-[1.03] focus-within:scale-[1.03] transitionEffect'
                  />
                </Link>
                <span className='col-span-4 grid'>
                  <span className='absolute right-1 top-0 text-amber-500 dark:text-green-500 text-balance max-w-[70%] text-right'>{country?.currency_name[lang]}</span>
                  <h3 className='absolute bottom-0 font-poppins font-semibold capitalize sm:text-lg lg:text-xl mx-1'>{country?.currency_code}</h3>
                </span>
              </div>

              <div className='col-span-1 grid items-center justify-center p-1 dark:text-amber-500 text-green-500 text-xl border-x-2 border-black dark:border-white'>
                <span><span>{country?.currency_symbol}</span> {country?.conversion_rates}</span> 
              </div>
            </li>
          )
        })}
      </ul>      
    </div>
  )
}

export default ExchangerateList
