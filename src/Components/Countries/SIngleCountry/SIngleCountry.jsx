import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom';
import { SinglePageText, useFetchSingleCountry } from './data';
import { useSinglePageList } from './SinglePageList/SinglePageList';
import { useWindowSize } from '@uidotdev/usehooks';
import MapComponent from './MapComponent/MapComponent ';

const SIngleCountry = () => {
  let { countryId } = useParams();
  const [data, lang] = useOutletContext();
  const {country} = useFetchSingleCountry(countryId, data, lang)
  const size = useWindowSize().width
  const {list} = useSinglePageList(country, lang)
  console.log(country);
  return (
    <div className='mb-40'>
      <div className='relative isolate after:absolute after:inset-0 after:bg-zinc-950/40 after:backdrop-blur-sm after:backdrop-brightness-125 md:max-h-[80dvh]'>
        <img src={country?.flag?.svg ? country?.flag?.svg : country?.flag?.png} loading="lazy" alt={country?.flag?.alt} className='aspect-video md:max-h-[80dvh]'/>
        <h1 className='absolute inset-0 grid justify-center items-center z-20 dark_text font-poppins font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase'>
          {country?.name?.common}
        </h1>

        <div className='absolute top-[75%] inset-x-0 z-20 grid items-center justify-center'>
          <figure className='bgLight dark:dark_bg rounded-md p-0.5 sm:p-3 text-center max-w-[78px] xx:max-w-28 xs:max-w-36 sm:max-w-48 md:max-w-60 lg:max-w-64 xl:max-w-80'
            title={`${country?.name?.common} ${SinglePageText.coatOfArms[lang]}`}
          >
            <img src={country?.coatOfArms?.svg ? country?.coatOfArms?.svg : country?.coatOfArms?.png} alt={`${country?.name?.common} ${SinglePageText.coatOfArms[lang]}`} 
            className='max-w-[72px] xx:max-w-24 xs:max-w-32 sm:max-w-40 md:max-w-52 lg:max-w-64 xl:max-w-72 aspect-square mx-auto' />
            <figcaption className='hidden xx:inline-block pt-3 font-semibold sm:text-lg md:text-xl lg:text-2xl text-balance'>{country?.name?.common} {SinglePageText.coatOfArms[lang]}</figcaption>
          </figure>
        </div>
      </div>

      <ul className='mt-40 md:mt-80 grid gap-5 max-w-4xl mx-auto px-4'>
        {list.map((countryInfo) => {
          return (
            <li key={countryInfo.id} className='grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 gap-5 items-center justify-center'>
              <span className='sm:col-span-2 col-span-2 underline underline-offset-4 sm:no-underline lg:text-lg font-poppins bg-slate-300/300 textLight dark:dark_text font-semibold dark:bgLight p-2 shadow-md dark:shadow-slate-50/50 
                shadow-slate-800/50 capitalize tracking-widest transitionEffect backdrop-blur-[1px] dark:backdrop-blur-0'>
                  {countryInfo.left} {size > "640" ? ":" : ""} 
                </span>

              <span className='md:col-span-4 sm:col-span-3 col-span-2 lg:text-lg font-poppins bg-slate-300/300 textLight dark:dark_text font-semibold dark:bgLight p-2 shadow-md dark:shadow-slate-50/50 
                shadow-slate-800/50 capitalize tracking-widest transitionEffect backdrop-blur-[1px] dark:backdrop-blur-0'>
                  {countryInfo.right}
              </span>
            </li>
          )
        })}
      </ul> 

      {/* <MapComponent mapLink={country?.maps?.googleMaps} />        */}
    </div>
  )
}

export default SIngleCountry
