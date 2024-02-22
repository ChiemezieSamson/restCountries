import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { useApiFetchingPairConversion } from './data';
import { useFetchCountriesUniqueArrayById } from '../../../sharedComponent/sharedComponent';
import FormComponent from './FormComponent';
import { useDebounce } from '@uidotdev/usehooks';

const PairConversionIndex = () => {
  const [firstCountryName, setFirstCountryName] = useState("united states")
  const [secondCountryName, setSecondCountryName] = useState("south korea")
  const [firstPair, setFirstPair] = useState("USD")
  const [secondPair, setSecondPair] = useState("KRW")
  const [amount, setAmount] = useState("1")
  const [pairData, setPairData] = useState(false)
  const [pairRevers, setPairRevers] = useState(false)
   const [pairWasReversed, setPairWasReversed] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [setOnce, setSetOnce] = useState(true);
  const [lang, loginKey, APiPair, countryCurrencyCode, loginUrl] = useOutletContext();
  const debouncedSearchTerm  = useDebounce(amount, 1000);
  const { pairConvertion, pairConvertionLoading, pairConvertionError } = useApiFetchingPairConversion(loginKey, APiPair, firstPair, secondPair, debouncedSearchTerm)
  const countryId = firstCountryName
  const { countries, lastUpdate, nextUpdate, exchangerateLoading, exchangerateError } = useFetchCountriesUniqueArrayById(countryCurrencyCode, countryId, loginUrl, loginKey, firstPair, lang, firstCountryName)

 const handleSetFirstPair = (pair, country, isSecondPair) => {
  setSetOnce(() => true)

  if(country === secondCountryName && !isSecondPair) {
    setFirstPair(() => secondPair)
    setFirstCountryName(() => secondCountryName)
    setSecondPair(() => firstPair)
    setSecondCountryName(() => firstCountryName)
  } else {

    setFirstPair(() => pair)
    setFirstCountryName(() => country)
  }
  setAmount(() =>  1)
 }

 const handleSetSecondPair = (pair, country, isSecondPair) => {
  setSetOnce(() => true)

  if(country === firstCountryName && isSecondPair) {
    setFirstPair(() => secondPair)
    setFirstCountryName(() => secondCountryName)
    setSecondPair(() => firstPair)
    setSecondCountryName(() => firstCountryName)
  } else {
    setSecondPair(() => pair)
    setSecondCountryName(() => country)
  }
 
 }

  const handleFirstPairInputvalue = (event) => {
  setSetOnce(() => true)
  setPairRevers(() => false)
  const value = event.target.value.trim()

  if(!isNaN(value) && value !== '') {
    setIsSearching(() => true);
    setAmount(() =>  value)
  } else {
    setAmount(() => "1")
    setIsSearching(() => false);
  }
  setPairWasReversed(() => true)
 }


 const handleSecondPairInputvalue = (event) => {
  setSetOnce(() => true)
  const value = event.target.value.trim()

  if(!isNaN(value) && value !== '') {
    setIsSearching(() => true);
    setPairRevers(() => true)

    if(pairWasReversed) {
      setFirstPair(() =>  pairData?.target_code)
      setSecondPair(() => pairData?.base_code)
      setPairWasReversed(() => false)
    }

    setAmount(() =>  value)
  } else {
    if (pairWasReversed === false) {
      setFirstPair(() =>  pairData?.target_code)
      setSecondPair(() => pairData?.base_code)
      setAmount(() =>  1)
      setPairRevers(() => false)
      setPairWasReversed(() => true)
    }
    setIsSearching(() => false);
  }
 }

 useEffect(() => {
  if (debouncedSearchTerm && isSearching) {
    setIsSearching(false);
  }
}, [debouncedSearchTerm, isSearching])

useEffect(() => {
  if(pairConvertion?.result === "success" && setOnce) {
    setPairData(() => pairConvertion)
    setSetOnce(() => false)
  }
},[pairConvertion, setOnce])

  return (
    <div className='py-32 mx-2 px-2 overflow-clip'>

      <div className='grid sm:grid-cols-2 gap-6 p-10'>
        <div>
          <FormComponent 
            lang={lang}
            countries={countries}
            amount={pairConvertion?.result === "success" && pairRevers ? pairConvertion?.conversion_result : amount}
            selectValue={firstCountryName}
            pairConvertion={pairConvertion}
            lastUpdate={lastUpdate}
            nextUpdate={nextUpdate}
            isSearching={isSearching}
            inputValue={handleFirstPairInputvalue}
            handlePair={(pair, country) => handleSetFirstPair(pair, country, false)}
          />           
        </div>

        <div>
          <FormComponent 
            lang={lang}
            countries={countries}
            amount={pairConvertion?.result === "success" && !pairRevers ? pairConvertion?.conversion_result : amount}
            selectValue={secondCountryName}
            pairConvertion={pairConvertion}
            lastUpdate={lastUpdate}
            nextUpdate={nextUpdate}
            isSearching={isSearching}
            inputValue={handleSecondPairInputvalue}
            handlePair={(pair, country) => handleSetSecondPair(pair, country, true)}
          />
        </div> 
      </div>
    </div>
  )
}

export default PairConversionIndex
