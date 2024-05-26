import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../../../../sharedComponent/Search/Search'
import ExchangeRateSlectionButton from '../ExchangeRateSlectionButton/ExchangeRateSlectionButton'
import { NameTags } from '../data'

const ExchangerateList = ({countriesRate, lang, handleSetSearchResult, searchResult, finalResult, handleSetArrangeResult}) => {

  return (
    <>
      {/* search */}
      <Search countries={finalResult} lang={lang} handleSetSearchResult={handleSetSearchResult}/>

      {/* selection buttons */}
      <ExchangeRateSlectionButton 
        searchResult={searchResult} 
        finalResult={finalResult} 
        countriesRate={countriesRate}
        lang={lang} 
        handleSetArrangeResult={handleSetArrangeResult}
      />

      <ul className='grid gap-x-4 max-w-4xl mx-auto p-1 overflow-x-scroll md:overflow-x-hidden pt-10'>
        <li className='grid grid-cols-3 md:grid-cols-4 pl-1 sm:text-lg lg:text-xl font-poppins font-semibold uppercase pb-1.5'>
          <span className='col-span-1 hidden md:inline-block'>{NameTags.country[lang]}</span> 
          <span className='col-span-2'>{NameTags.currency_name_code[lang]}</span> 
          <span className='col-span-1 text-center xs:text-left'>{NameTags.exchange_rate[lang]}</span> 
        </li>

        {finalResult?.map((country, index) => {
          return (
            <li key={country?.id + index} className='grid grid-cols-3 md:grid-cols-4 border-t-2 last:border-b-2 border-black dark:border-white'>

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

              <div className='col-span-2 text-center xs:text-left xs:grid xs:grid-cols-5 xs:relative p-1 border-l-2 md:border-0 border-black dark:border-white'>
                <Link to={`/currency/exchange_rate/${country?.id}`} >
                  <img 
                    src={country?.flag?.svg ? country?.flag?.svg : country?.flag?.png} 
                    alt={country?.flag?.alt} 
                    loading="lazy"
                    className='aspect-square max-h-16 max-w-32 mx-auto col-span-1 hover:scale-[1.03] focus-within:scale-[1.03] transitionEffect'
                  />
                </Link>
                
                <span className='col-span-4 grid'>
                  <h3 className='xs:absolute xs:bottom-0 font-poppins font-semibold capitalize mt-2.5 sm:text-lg lg:text-xl mx-1'>{country?.currency_code}</h3>
                  <span className='xs:absolute xs:right-1 xs:top-0 text-amber-500 dark:text-green-500 text-balance mt-2.5 xs:text-right'>{country?.currency_name[lang]}</span>
                </span>
              </div>

              <div className='col-span-1 grid items-center text-center xs:text-left justify-center p-1 dark:text-amber-500 text-green-500 text-xl border-x-2 border-black dark:border-white'>
                <span><span>{country?.currency_symbol}</span> {country?.conversion_rates}</span> 
              </div>
            </li>
          )
        })}
      </ul>      
    </>
  )
}

export default ExchangerateList
