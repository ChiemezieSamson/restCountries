import React, { useEffect, useState } from 'react'
import { NameTags } from './data'
import { useOutletContext } from 'react-router-dom';
import ExchangerateList from './ExchangerateList/ExchangerateList';
import { useFetchCountriesUniqueArrayById } from '../../../sharedComponent/sharedComponent';
import Error from '../../../Error/Error';
import Loading from '../../../Loading/Loading';

const ExchangeRateCountryCurrency = () => {
  const [lang, loginKey, loginUrl, code, countryId, countryCurrencyCode, foundCountry, SLoading] = useOutletContext();
  // fetch countries while making sure that no countries apppeared twice
  const { countries, lastUpdate, nextUpdate, exchangerateLoading, exchangerateError } = useFetchCountriesUniqueArrayById(countryCurrencyCode, countryId, loginUrl, loginKey, code, lang)
  const [searchResult, setSearchResult] = useState([])
  const [arrangeResult, setArrangeResult] = useState([])
  const [finalResult, setFinalResult] = useState([])

  const stillLoading = SLoading && exchangerateLoading

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

  }, [arrangeResult, searchResult, lang])


  return (
    <div className='mb-40'>
      <div className='relative isolate after:absolute after:inset-0 after:bg-zinc-950/40 after:backdrop-blur-sm after:backdrop-brightness-125 md:max-h-[80dvh]'>
        <img src={foundCountry?.flag?.svg ? foundCountry?.flag?.svg : foundCountry?.flag?.png} loading="lazy" alt={foundCountry?.flag?.alt} className='aspect-video md:max-h-[80dvh]'/>
        <h1 className='absolute inset-0 grid justify-center items-center z-20 dark_text font-poppins font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase textShawdo backdrop-blur-[1px]'>
          {foundCountry?.name[lang]}
        </h1>
      </div>

      <div className='my-5 '>
        <p className='px-2 font-poppins font-semibold sm:text-lg md:text-xl lg:text-2xl'><strong>{NameTags.currency_name[lang]}:</strong> {foundCountry?.currency_name[lang]}</p>
        <p className='px-2 font-poppins font-semibold sm:text-lg md:text-xl lg:text-2xl'><strong>{NameTags.currency_code[lang]}:</strong> {foundCountry?.currency_code}</p>
        <p className='px-2 font-poppins font-semibold sm:text-lg md:text-xl lg:text-2xl'><strong>{NameTags.currency_symbol[lang]}:</strong> {foundCountry?.currency_symbol}</p>
        <p className='px-2 font-poppins font-semibold sm:text-lg md:text-xl lg:text-2xl'><strong>{NameTags.last_update[lang]}:</strong> {lastUpdate}</p>
        <p className='px-2 font-poppins font-semibold sm:text-lg md:text-xl lg:text-2xl'><strong>{NameTags.next_update[lang]}:</strong> {nextUpdate}</p>
      </div>

      <div className='py-5 px-2 mx-2'>
        <ExchangerateList  
          countriesRate={countries} 
          lang={lang} 
          searchResult={searchResult}
          finalResult={finalResult[0] ? finalResult : countries}
          handleSetSearchResult={handleSetSearchResult}
          handleSetArrangeResult={handleSetArrangeResult}
        />
      </div>

      {/* loading handling */}
      <Loading loading={stillLoading}/> 

       {/* Error handling */}
      <Error customId={"exchangerate_country_currency"} error1={exchangerateError}/>
    </div>
  )
}

export default ExchangeRateCountryCurrency
