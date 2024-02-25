import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link, useOutletContext } from 'react-router-dom'
import { Indexdata, populationCurrencyImage } from './data';
import { RegionListComponent, worldRegionsData } from '../sharedComponent/sharedComponent';

const Index = () => {
  const [isLanguage] = useOutletContext();

  return (
    <>
      <div className='grid px-4 pb-20 HomeImage relative isolate'>
        {/* overlay effect */}
        <div className='bg-gradient-to-b from-stone-950/30 from-85% to-white/70 dark:bg-gradient-to-b dark:to-slate-900 z-10 inset-0 w-full absolute'></div>

        <div className="pt-52 pb-44 p-4 text-white relative z-20">
          <span className='inline-block my-5 font-poppins'>
            <h1 className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold'>{Indexdata.title[isLanguage]}</h1>
            <h4 className='px-2 py-1 my-2 font-semibold xs:text-lg sm:text-xl md:text-2xl lg:text-3xl'>{Indexdata.sub_title[isLanguage]}</h4>
          </span>
          
          <div>
            <p className='sm:text-lg md:text-xl lg:text-2xl font-medium max-w-3xl text-balance tracking-wide'>
              {Indexdata.text[isLanguage]}
            </p>
            
            <Link to="/countries" className='button'>
              <span className='text-white'>
                {Indexdata.button_text[isLanguage]}
              </span>
              <FaLongArrowAltRight  className='inline-block ml-4 text-white'/>
            </Link>
          </div>
        </div>
      </div>

      <div className='py-52'>
        <h2 className='headTitle1'>{Indexdata.currencyPopulation.title[isLanguage]}</h2>
        <h4 className='headSubTitle1'>{Indexdata.currencyPopulation.sub_title[isLanguage]}</h4>

        <ul className='grid sm:grid-cols-2 gap-4 mt-20 px-5'>
          {populationCurrencyImage.map(image => {
            return (
              <li key={image.id}>
                <Link to={image.url} className='relative isolate after:absolute after:inset-0 after:z-10 after:bg-black/30 after:rounded-3xl'>
                  <img src={image.image} alt={image.name[isLanguage]} className='max-h-[400px] aspect-video rounded-3xl'/>
                  <h4 className='px-2 py-1 my-2 font-semibold xs:text-lg sm:text-xl md:text-2xl lg:text-3xl absolute left-2 bottom-4 text-white z-20 capitalize font-poppins'>{image.name[isLanguage]}</h4>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      <div className='px-4 HomefooterImage relative isolate'>
        {/* overlay effect */}
        <div className='bg-gradient-to-b from-white/95 from-70% sm:from-65% via-transparent to-stone-950/30 dark:bg-gradient-to-b dark:from-slate-900 z-10 inset-0 w-full absolute'></div>
        
        <div className='relative z-20 -top-60 pt-52 pb-40'>
          <h2 className='headTitle1'>{Indexdata.worldRegions.title[isLanguage]}</h2>
          <h4 className='headSubTitle1'>{Indexdata.worldRegions.sub_title[isLanguage]}</h4>

          <RegionListComponent region={worldRegionsData} lang={isLanguage}/>
        </div>
      </div>
    </>
  )
}

export default Index
