import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { pairConversionData, useApiFetchingPairConversion } from './data';
import { useFetchCountriesUniqueArrayById } from '../../../sharedComponent/sharedComponent';
import FormComponent from './FormComponent';
import { useDebounce } from '@uidotdev/usehooks';
import ImageComponent from './ImageComponent';

const PairConversionIndex = () => {
  const [firstCountryName, setFirstCountryName] = useState("united states")
  const [firstPair, setFirstPair] = useState("USD")
  const [firstPairInputValue, setFirstPairInputValue] = useState("")
  const [secondCountryName, setSecondCountryName] = useState("south korea")
  const [secondPair, setSecondPair] = useState("KRW")
  const [secondPairInputValue, setSecondPairInputValue] = useState("")
  let [amount, setAmount] = useState(0)
  const [savedPair, setSavedPair] = useState([])
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
    setAmount(() =>  "")
    setFirstPairInputValue(() => "")
    setSecondPairInputValue(() => "")

    if(savedPair[0]) {
      setSecondPair(() => savedPair[1])
      setSavedPair(() => [])
    }
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

    setAmount(() =>  "")
    setFirstPairInputValue(() => "")
    setSecondPairInputValue(() => "")

    if(savedPair[0]) {
      setFirstPair(() => savedPair[0])
      setSavedPair(() => [])
    }
  }

  const handleFirstPairInputvalue = (event) => {
    setSetOnce(() => true)
    setPairRevers(() => false)
    setSecondPairInputValue(() => "")
    const value = event.target.value.trim()

    if(!isNaN(value) && value !== '') {
      setIsSearching(() => true);
      setAmount(() =>  value)
      setFirstPairInputValue(() => value)
    } else {
      setAmount(() => "")
      setIsSearching(() => false);
      setFirstPairInputValue(() => "")
    }
    setPairWasReversed(() => true)
 }


  const handleSecondPairInputvalue = (event) => {
    setSetOnce(() => true)
    setFirstPairInputValue(() => "")
    const value = event.target.value.trim()

    if(!isNaN(value) && value !== '') {
      setIsSearching(() => true);
      setPairRevers(() => true)
      setSecondPairInputValue(() => value)
      
      if (savedPair[0]) {
        setFirstPair(() =>  savedPair[1])
        setSecondPair(() => savedPair[0])
      } else {
        setSavedPair(() => [pairData?.base_code, pairData?.target_code])
      }
      setAmount(() =>  value)
    } else {
      setSecondPairInputValue(() => "")
      if (pairWasReversed === false)
      setIsSearching(() => false);
    }
  }

  useEffect(() => {
    setSetOnce(() => true)
    if(pairWasReversed && secondPairInputValue !== "") {
      setFirstPair(() =>  pairData?.target_code)
      setSecondPair(() => pairData?.base_code)
      setPairWasReversed(() => false)
    } 
    
    if(savedPair[0] && secondPairInputValue === "" && firstPairInputValue === "") {
      setFirstPair(() =>  savedPair[0])
      setSecondPair(() => savedPair[1])
      setAmount(() =>  "")
      setPairRevers(() => false)
      setPairWasReversed(() => true)
    }
  }, [pairWasReversed, secondPairInputValue, pairData, savedPair, firstPairInputValue])

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
      <div className='mb-20'>
        <h1 className='headTitle1'>
          {pairConversionData.title[lang]}
        </h1>
        <h4 className='headSubTitle1'>
          {pairConversionData.sub_title[lang]}
        </h4>
      </div>

      <div className='text-center mb-10'>
        <p className='px-2 font-poppins font-semibold sm:text-lg md:text-xl lg:text-2xl'><strong>{pairConversionData.last_update[lang]}:</strong> {lastUpdate}</p>
        <p className='px-2 font-poppins font-semibold sm:text-lg md:text-xl lg:text-2xl'><strong>{pairConversionData.next_update[lang]}:</strong> {nextUpdate}</p>
      </div>

      <div className='grid sm:grid-cols-2 gap-6 p-10'>
        <div>
          <ImageComponent 
            countryId={firstCountryName} 
            countryCurrencyCode={countries} 
            lang={lang} 
            firstPair={firstPair}
            number={pairConvertion?.result === "success" && pairRevers ? pairConvertion?.conversion_result : amount}
          />

          <FormComponent 
            lang={lang}
            countries={countries}
            amount={pairConvertion?.result === "success" && pairRevers ? pairConvertion?.conversion_result : amount}
            selectValue={firstCountryName}
            inputValue={firstPairInputValue}
            idName={"firstPair"}
            isSearching={isSearching}
            getinputValue={handleFirstPairInputvalue}
            handlePair={(pair, country) => handleSetFirstPair(pair, country, false)}
          />           
        </div>

        <div>
          <ImageComponent 
            countryId={secondCountryName} 
            countryCurrencyCode={countries} 
            lang={lang}
            number={pairConvertion?.result === "success" && !pairRevers ? pairConvertion?.conversion_result : amount}
          />
          <FormComponent 
            lang={lang}
            countries={countries}
            amount={pairConvertion?.result === "success" && !pairRevers ? pairConvertion?.conversion_result : amount}
            selectValue={secondCountryName}
            inputValue={secondPairInputValue}
            idName={"secondPairPair"}
            isSearching={isSearching}
            getinputValue={handleSecondPairInputvalue}
            handlePair={(pair, country) => handleSetSecondPair(pair, country, true)}
          />
        </div> 
      </div>
    </div>
  )
}

export default PairConversionIndex
