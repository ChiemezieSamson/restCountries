import React from 'react'
import { ExchangeRatePairConversionCurrencyImage, Heading } from './data'
import { Link, useOutletContext } from 'react-router-dom';
import CurrencyBg from "./../../asset/images/currency-bg.jpg"
import { FaLongArrowAltRight } from 'react-icons/fa';

const CurrencyInedx = () => {
  const [lang] = useOutletContext();

  return (
    <div className='pt-32 px-2 mx-2'>
      {/* Title and sub-title */}
      <div className='mb-20'>
        <h1 className='headTitle1'>
          {Heading.title[lang]}
        </h1>
        <h4 className='headSubTitle1'>
          {Heading.sub_title[lang]}
        </h4>
      </div>


      <div className='grid grid-cols-2 max-h-[70dvh] items-center justify-center gap-5'>
        <div className='max-h-[430px] overflow-clip rounded-xl relative isolate after:inset-0 after:absolute after:bg-black/30 after:z-10 after:rounded-xl'>
          <img src={CurrencyBg} alt="currency" className='max-h-[450px]'/>
        </div>

        <div className='p-3 text-left'>
          <h2 className='py-3 mb-2 font-semibold sm:text-lg md:text-xl lg:text-2xl text-balance font-poppins'>{Heading.hero_info.head[lang]}</h2>

          <ul className='grid gap-3'>
            {Heading.hero_info.list.map(list => {
              return (
                <li key={list.id} className='text-[17px] md:text-lg lg:text-xl text-balance font-medium'>
                  <span>{list.icon} </span>{list.text[lang]}
                </li>
              )
            })}
          </ul>

          <p className='mt-10 text-balance font-medium md:text-[17px]'>
            {Heading.hero_info.supportedCode[lang]}
            <Link to="/currency/supported_code" className='hover:text-amber-500 text-lg transitionEffect dark:hover:text-green-500 lineSoft hover:line border rounded-3xl mx-3'>
              <FaLongArrowAltRight  className='inline-block mx-3'/>
            </Link>
          </p>
        </div>
      </div>

      <div className='py-52'>
        <h2 className='headTitle1'>{Heading.ExchangeRatePairConversion.title[lang]}</h2>
        <h4 className='headSubTitle1'>{Heading.ExchangeRatePairConversion.sub_title[lang]}</h4>
        
        <ul className='grid sm:grid-cols-2 gap-4 mt-20 px-5'>
          {ExchangeRatePairConversionCurrencyImage.map(image => {
            return (
              <li key={image.id}>
                <Link to={image.url} className='relative isolate after:absolute after:inset-0 after:z-10 after:bg-black/30 after:rounded-3xl'>
                  <img src={image.image} alt={image.name[lang]} className='max-h-[400px] aspect-video rounded-3xl'/>
                  <h4 className='px-2 py-1 my-2 font-semibold xs:text-lg sm:text-xl md:text-2xl lg:text-3xl absolute left-2 bottom-4 text-white z-20 capitalize font-poppins'>{image.name[lang]}</h4>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default CurrencyInedx
