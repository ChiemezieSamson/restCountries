import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom';
import { SinglePageText, useFetchSingleCountry } from './data';
import { useSinglePageList } from './SinglePageList/SinglePageList';
import { useWindowSize } from '@uidotdev/usehooks';
import { FaMapMarkerAlt } from "react-icons/fa";

const SIngleCountry = () => {
  const { countryId } = useParams();
  const [data, lang, TranslatedData] = useOutletContext();
  const {country} = useFetchSingleCountry(countryId, data, lang, TranslatedData) // fetching a single country using the countryId
  const size = useWindowSize().width
  const {list} = useSinglePageList(country, lang) // return a list of information with their corresponding item

  return (
    <div className='mb-40'>
      {/* Country Image and coat of Arms*/}
      <div className='relative isolate after:absolute after:inset-0 after:bg-zinc-950/40 after:backdrop-blur-sm after:backdrop-brightness-125 md:max-h-[80dvh]'>
        <img src={country?.flag?.svg ? country?.flag?.svg : country?.flag?.png} loading="lazy" alt={country?.flag?.alt} className='aspect-video md:max-h-[80dvh]'/>
        <h1 className='absolute inset-0 grid justify-center items-center z-20 dark_text font-poppins font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase'>
          {country?.name?.common}
        </h1>

        {(country?.coatOfArms?.svg || country?.coatOfArms?.png) && 
          <div className='absolute top-[75%] inset-x-0 z-20 grid items-center justify-center'>
            <div className='relative isolate'>
              <img src={country?.flag?.svg ? country?.flag?.svg : country?.flag?.png} alt={country?.flag?.alt} 
              className='max-w-[72px] xx:max-w-24 xs:max-w-32 sm:max-w-40 md:max-w-52 lg:max-w-64 xl:max-w-72 aspect-square object-fill mx-auto rounded-md'/>
              <figure className='bgLight dark:bg-gray-900/15 rounded-md sm:p-4 text-center max-w-[78px] xx:max-w-28 xs:max-w-36 sm:max-w-48 md:max-w-60 lg:max-w-64 xl:max-w-80 absolute inset-0 z-10'
                title={`${country?.name?.common} ${SinglePageText.coatOfArms[lang]}`}
              >
                <img src={country?.coatOfArms?.svg ? country?.coatOfArms?.svg : country?.coatOfArms?.png} alt={`${country?.name?.common} ${SinglePageText.coatOfArms[lang]}`} 
                className='max-w-[72px] xx:max-w-24 xs:max-w-32 sm:max-w-40 md:max-w-52 lg:max-w-64 xl:max-w-72 aspect-square mx-auto object-fill' />
                <figcaption className='hidden xx:inline-block pt-3 font-poppins capitalize mt-3 font-semibold sm:text-lg md:text-xl lg:text-2xl text-balance'>{country?.name?.common} {SinglePageText.coatOfArms[lang]}</figcaption>
              </figure>
            </div>
          </div>
        }
      </div>
      
      {/* List of country info */}
      <ul className={`${country?.coatOfArms?.svg || country?.coatOfArms?.png ? "md:mt-80" : "md:mt-40"} mt-40 grid gap-5 max-w-4xl mx-auto px-4 lg:text-lg font-poppins bg-slate-300/300 textLight dark:dark_text font-semibold capitalize`}>
        {list?.map((countryInfo) => {
          return (
            <li key={countryInfo.id} className='grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 gap-5 items-center justify-center'>
              <span className='sm:col-span-2 col-span-2 underline underline-offset-4 sm:no-underline dark:bgLight p-2 shadow-md dark:shadow-slate-50/50 
                shadow-slate-800/50 tracking-widest transitionEffect backdrop-blur-[1px] dark:backdrop-blur-0'>
                  {countryInfo.left} {size > "640" ? ":" : ""} 
                </span>

              <span className={`md:col-span-4 sm:col-span-3 col-span-2 lg:text-lg dark:bgLight p-2 shadow-md dark:shadow-slate-50/50 
                shadow-slate-800/50 tracking-widest transitionEffect backdrop-blur-[1px] dark:backdrop-blur-0 ${countryInfo.right === "" || countryInfo.right === undefined ? "hidden" : "block"}`}>
                  {countryInfo.right}
              </span>
            </li>
          )
        })}
        <li>
          <a href={country?.maps?.googleMaps} target='_blank' rel='noreferrer'>
            <button className='button'>
              <FaMapMarkerAlt className='inline-block mr-2 text-red-600 align-top mt-1.5'/> <span className='inline-block pt-1'>{SinglePageText.map[lang]}</span>
            </button>
          </a> 
        </li>
      </ul>   
    </div>
  )
}

export default SIngleCountry
