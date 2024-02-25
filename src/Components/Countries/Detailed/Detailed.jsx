import React from 'react'
import { details } from './data'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Detailed = ({lang, countries}) => {
  
  return (
    <div className='mx-2 px-2'>
      <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 list items-center justify-center'>
        {countries.map((country, index) => {
          return (
            <li key={country?.id + index.toString()} className='bg-slate-300/300 textLight dark:dark_text dark:bgLight px-2 py-5 rounded-xl shadow-md dark:shadow-slate-50/50 shadow-slate-800/50 
            uppercase tracking-widest transitionEffect backdrop-blur-[1px] dark:backdrop-blur-0 hover:scale-105 focus-within:scale-110 transitionEffect' 
            title={country?.name?.length > 14 ? country?.name : ""}>
              <div>
                
                <img 
                  src={country?.flag?.svg} 
                  alt={country?.flag?.alt} 
                  loading="lazy" 
                  className='aspect-video rounded-md border border-solid border-slate-400/50 dark:border-0'
                />
              
                <div className='mt-3'>
                  <h2 className='lg:text-[22px] leading-7 text-lg text-center my-0 py-0 font-poppins'>
                    {country?.name === undefined ? country?.id?.slice(0, 14) : country?.name?.slice(0, 14)}
                    {country?.name?.length > 14  && "..."}
                  </h2>

                  <div className='px-0.5 my-5'>
                    <p title={country?.capital?.length > 10 ? country?.capital : ""}>
                      <strong>{details.capital[lang]} : </strong>
                      <span>
                        {country?.capital?.slice(0, 10)}{country?.capital?.length > 10 && "..."}
                      </span>
                    </p>

                    <p title={country?.language?.length > 10 ? country?.language : ""}>
                      <strong>{details.language[lang]} : </strong>
                      <span>
                        {country?.language?.slice(0, 10)}{country?.language?.length > 10 && "..."}
                      </span>
                    </p>

                    <p title={country?.continents?.length > 10 ? country?.continents : ""}>
                      <strong>{details.continent[lang]} : </strong>
                      <span>
                        {country?.continents?.slice(0, 10)}{country?.continents?.length > 10 && "..."}
                      </span>
                    </p>

                    <p title={country?.currencies.name?.length > 10 ? country?.currencies.name : ""}>
                      <strong>{details.currency[lang]} : </strong>
                      <span>
                        {country?.currencies.name?.length > 10 ? country?.currencies.name?.split(" ").pop() : country?.currencies.name } - {country?.currencies.symbol}
                      </span>
                    </p>

                    <p>
                      <strong>{details.population[lang]} : </strong>
                      <span>
                        {parseInt(country?.population, 10).toLocaleString()}
                      </span>
                    </p>                    
                  </div>

                  <Link to={`/countries/${country?.id}`} className='button'>
                    {details.more[lang]}
                    <FaLongArrowAltRight  className='inline-block ml-4'/>
                  </Link>
                </div>
              </div>
            </li>
          )
        })}
      </ul>      
    </div>
  )
}

export default Detailed
