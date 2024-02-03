import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom';
import { SinglePageText, useFetchSingleCountry } from './data';
import { useSinglePageList } from './SinglePageList';

const SIngleCountry = () => {
  let { countryId } = useParams();
  const [data, lang] = useOutletContext();
  const {country} = useFetchSingleCountry(countryId, data, lang)
  const {list} = useSinglePageList(country, lang)

  return (
    <div className=''>
      <div className='relative isolate after:absolute after:inset-0 after:bg-zinc-950/40 after:backdrop-blur-sm after:backdrop-brightness-125 md:max-h-[80dvh]'>
        <img src={country?.flag?.png ? country?.flag?.png : country?.flag?.svg} loading="lazy" alt={country?.flag?.alt} className='aspect-video md:max-h-[80dvh]'/>
        <h1 className='absolute inset-0 grid justify-center items-center z-20 dark_text font-poppins font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase'>
          {country?.name?.common}
        </h1>

        <div className='absolute top-[75%] inset-x-0 z-20 grid items-center justify-center'>
          <figure className='bgLight dark:dark_bg rounded-md p-0.5 sm:p-3 text-center max-w-[78px] xx:max-w-28 xs:max-w-36 sm:max-w-48 md:max-w-60 lg:max-w-64 xl:max-w-80'
            title={`${country?.name?.common} ${SinglePageText.coatOfArms[lang]}`}
          >
            <img src={country?.coatOfArms?.png ? country?.coatOfArms?.png : country?.coatOfArms?.svg} alt={`${country?.name?.common} ${SinglePageText.coatOfArms[lang]}`} 
            className='max-w-[72px] xx:max-w-24 xs:max-w-32 sm:max-w-40 md:max-w-52 lg:max-w-64 xl:max-w-72 aspect-square mx-auto' />
            <figcaption className='hidden xx:inline-block pt-3 font-semibold sm:text-lg md:text-xl lg:text-2xl text-balance'>{country?.name?.common} {SinglePageText.coatOfArms[lang]}</figcaption>
          </figure>
        </div>
      </div>

      <div className='mt-80'>
        
      </div>        
    </div>
  )
}

export default SIngleCountry
