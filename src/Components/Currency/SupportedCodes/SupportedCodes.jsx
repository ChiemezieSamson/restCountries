import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { Heading } from './data';
import { useFetchCountryAndCurrencyCode } from '../../sharedComponent/sharedComponent';
import Search from '../../sharedComponent/Search/Search';
import ToggleButton from './ToggleButton/ToggleButton';
import { ascendingArrangement } from './ToggleButton/data';
import SupportList from './SupportList/SupportList';

const SupportedCodes = () => {
  const [lang, login, login2, loginKey, APiCode] = useOutletContext();
  const { countryCurrencyCode, Error, Loading } = useFetchCountryAndCurrencyCode(login, login2, loginKey, APiCode)
  const { ascendingByCountry } = ascendingArrangement(countryCurrencyCode, lang)
  const [searchResult, setSearchResult] = useState([])
  const [arrangeResult, setArrangeResult] = useState([])
  const [finalResult, setFinalResult] = useState([])

  const handleSetSearchResult = (array) => {
    setSearchResult(array)
  }

  const handleSetArrangeResult = (searchArray) => {
    setArrangeResult(searchArray)
  }

  useEffect(() => {
    if(searchResult[0]) {
      setFinalResult(() => [...searchResult].sort((a, b) =>  a.name[lang].toLowerCase().localeCompare(b.name[lang], lang)))
      return
    }

    if(arrangeResult[0]) {
      setFinalResult(() => arrangeResult)
      return
    }

    setFinalResult(() => [...countryCurrencyCode].sort((a, b) =>  a.name[lang].toLowerCase().localeCompare(b.name[lang], lang)))
    return
  }, [arrangeResult, searchResult, lang, countryCurrencyCode])

  return (
    <div className='pt-32 px-2 mx-2'>
      <div className='mb-20'>
        <h1 className='headTitle1'>
          {Heading.title[lang]}
        </h1>
        <h4 className='headSubTitle1'>
          {Heading.sub_title[lang]}
        </h4>
      </div>

      <div className='overflow-x-scroll touch-pan-x xs:overflow-x-auto'>
        <h2 className='py-3 mb-2 font-semibold sm:text-lg md:text-xl lg:text-2xl text-balance font-poppins underline'>{Heading?.unsupported_currencies[lang]}</h2>
        <p className='text-[17px] md:text-lg lg:text-xl text-balance font-medium'>{Heading.text[lang]}</p>

        <div className='mt-8 max-w-xl grid grid-cols-2 gap-4 min-w-[340px] xs:block xs:min-w-0'>
          <div className='grid xs:grid-cols-3 gap-3 font-semibold text-[17px] md:text-lg text-balance font-poppins'>
            <span>{Heading.currency_code[lang]}</span>
            <span>{Heading.currency_name[lang]}</span>
            <span>{Heading.country[lang]}</span>
          </div>
          <div className='grid xs:grid-cols-3 gap-3 xs:mt-3 capitalize '>
            <span>{Heading.north_korea.currency_symbol}</span>
            <span>{Heading.north_korea.currency_name[lang]}</span>
            <span>{Heading.north_korea.name[lang]}</span>
          </div>
        </div>
      </div>
      
      <Search countries={ascendingByCountry} lang={lang} handleSetSearchResult={handleSetSearchResult}/>
      <ToggleButton 
        searchResult={searchResult}  
        lang={lang} 
        ascendingByCountry={ascendingByCountry} 
        handleSetArrangeResult={handleSetArrangeResult}
        countryCurrencyCode={countryCurrencyCode}
      />

      <SupportList lang={lang} finalResult={finalResult}/>
    </div>
  )
}

export default SupportedCodes
