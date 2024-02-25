import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { Heading } from './data';
import { useFetchCountryAndCurrencyCode } from '../../sharedComponent/sharedComponent';
import Search from '../../sharedComponent/Search/Search';
import ToggleButton from './ToggleButton/ToggleButton';
import { ascendingArrangement } from './ToggleButton/data';
import SupportList from './SupportList/SupportList';
import Error from '../../Error/Error';
import Loading from '../../Loading/Loading';

const SupportedCodes = () => {
  const [lang, login, login2, loginKey, APiCode] = useOutletContext();
  // fetching countries base on the available currency fetched from the exchange rate api
  const { countryCurrencyCode, Serror, SLoading } = useFetchCountryAndCurrencyCode(login, login2, loginKey, APiCode)
  // make sure the countries are arranged alphabetically regardless of the language choosen
  const { ascendingByCountry } = ascendingArrangement(countryCurrencyCode, lang)
  const [searchResult, setSearchResult] = useState([])
  const [arrangeResult, setArrangeResult] = useState([])
  const [finalResult, setFinalResult] = useState([])

  // handling setting the input text for the search box
  const handleSetSearchResult = (array) => {
    setSearchResult(array)
  }

  // handling how the countries are displayed (eg ascending , descending etc)
  const handleSetArrangeResult = (searchArray) => {
    setArrangeResult(searchArray)
  }

   // setting the final result making sure that once their is a search text
  // then a search result is need and if an arrange button is clicked an arrange 
  // button should be dispalyed
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
      {/* Title and sub-title */}
      <div className='mb-20'>
        <h1 className='headTitle1'>
          {Heading.title[lang]}
        </h1>
        <h4 className='headSubTitle1'>
          {Heading.sub_title[lang]}
        </h4>
      </div>

      {/* unsupported currencies */}
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
      
      {/* search */}
      <Search countries={ascendingByCountry} lang={lang} handleSetSearchResult={handleSetSearchResult}/>

      {/* Toggle button */}
      <ToggleButton 
        searchResult={searchResult}  
        lang={lang} 
        ascendingByCountry={ascendingByCountry} 
        handleSetArrangeResult={handleSetArrangeResult}
        countryCurrencyCode={countryCurrencyCode}
      />

      {/* loading handling */}
      <Loading loading={SLoading}/> 

      {/* supported currrencies */}
      <SupportList lang={lang} finalResult={finalResult}/>

      {/* Error handling */}
      <Error customId={"supportcode"} error1={Serror}/>
    </div>
  )
}

export default SupportedCodes
