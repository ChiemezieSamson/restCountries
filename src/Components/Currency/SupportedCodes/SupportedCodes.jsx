import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { Heading, useApiFetchingSupportCode, useFetchCountryAndCurrencyCode } from './data';
import { useApiFetchingComponent, useApiFetchingTranslatedData } from '../../sharedComponent/sharedComponent';

const SupportedCodes = () => {
  const [lang, login, login2, loginUrl, loginKey, APiCode] = useOutletContext();
  const { data, loading, error } = useApiFetchingComponent(login)
  const { TranslatedData, Tloading, Terror } = useApiFetchingTranslatedData(login2)
  const {code, codeLoading, codeError} = useApiFetchingSupportCode(APiCode, loginKey)
  const { countryCurrencyCode } = useFetchCountryAndCurrencyCode(data, TranslatedData, code)

  // console.log(countryCurrencyCode);
  
  return (
    <div className='pt-32'>
      <div className='mb-20'>
        <h1 className='headTitle1'>
          {Heading.title[lang]}
        </h1>
        <h4 className='headSubTitle1'>
          {Heading.sub_title[lang]}
        </h4>
      </div>

      <div>
        <h2 className='py-3 mb-2 font-semibold sm:text-lg md:text-xl lg:text-2xl text-balance font-poppins underline'>{Heading?.unsupported_currencies[lang]}</h2>
        <p className='text-[17px] md:text-lg lg:text-xl text-balance font-medium'>{Heading.text[lang]}</p>

        <div className='mt-8 max-w-xl'>
          <div className='grid grid-cols-3 gap-3 font-semibold text-[17px] md:text-lg text-balance font-poppins'>
            <span>{Heading.currency_code[lang]}</span>
            <span>{Heading.currency_name[lang]}</span>
            <span>{Heading.country[lang]}</span>
          </div>
          <div className='grid grid-cols-3 gap-3 mt-3 capitalize'>
            <span>{Heading.north_korea.currency_symbol}</span>
            <span>{Heading.north_korea.currency_name[lang]}</span>
            <span>{Heading.north_korea.name[lang]}</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default SupportedCodes
