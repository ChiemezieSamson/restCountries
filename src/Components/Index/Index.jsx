import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link, useOutletContext } from 'react-router-dom'
import { Indexdata, populationCurrencyImage } from './data';

const Index = () => {
  const [isLanguage] = useOutletContext();
  return (
    <div className='px-4'>
      <div className='grid relative isolate after:absolute after:inset-0 after:z-10 pb-20 after:bg-gradient-to-b from-stone-950/10 from-70% to-white/70 dark:bg-gradient-to-b dark:to-slate-900'>
        <div className="pt-52 pb-44 p-4 text-white HomeImage">
          <span className='inline-block my-5 font-poppins'>
            <h1 className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold'>{Indexdata.title[isLanguage]}</h1>
            <h4 className='px-2 py-1 my-2 font-semibold xs:text-lg sm:text-xl md:text-2xl lg:text-3xl'>{Indexdata.sub_title[isLanguage]}</h4>
          </span>
          <div>
            <p className='sm:text-lg md:text-xl lg:text-2xl font-medium'>
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

      <div className='py-20'>
        <h2 className='text-left capitalize text-balance font-poppins text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-semibold mt-0 px-2'>Countries Curreny and Population</h2>
        <h4 className='px-2 py-1 my-2 font-semibold sm:text-lg md:text-xl lg:text-2xl text-balance'>Currency conversion rates and population chart for 161 currencies </h4>
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
    </div>
  )
}

export default Index
