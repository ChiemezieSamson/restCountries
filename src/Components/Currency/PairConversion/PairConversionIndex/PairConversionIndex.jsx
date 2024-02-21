import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { useApiFetchingPairConversion } from './data';
import { useFetchCountriesUniqueArrayById } from '../../../sharedComponent/sharedComponent';
import FormComponent from './FormComponent';

const PairConversionIndex = () => {
  const [firstCountryName, setFirstCountryName] = useState("south korea")
  const [secondCountryName, setSecondCountryName] = useState("south korea")
  const [firstPair, setFirstPair] = useState("USD")
  const [secondPair, setSecondPair] = useState("NGN")
  const [amount, setAmount] = useState("1")
  const [lang, loginKey, APiPair, countryCurrencyCode, loginUrl] = useOutletContext();
  const { pairConvertion, pairConvertionLoading, pairConvertionError } = useApiFetchingPairConversion(loginKey, APiPair, firstPair, secondPair, amount)
  const { countries, lastUpdate, nextUpdate, exchangerateLoading, exchangerateError } = useFetchCountriesUniqueArrayById(countryCurrencyCode, firstCountryName , loginUrl, loginKey, firstPair, lang)

 const handleSetFirstPair = (pair, country) => {
  setFirstPair(() => pair)
  setFirstCountryName(() => country)
 }

 const handleSetSecondPair = (pair, country) => {
  setSecondPair(() => pair)
  setSecondCountryName(() => country)
 }

 const handleSetAmount = (amount) => {
  setAmount(amount)
 }

  return (
    <div className='py-32 mx-2 px-2 overflow-clip'>

      <div className='grid sm:grid-cols-2 gap-6 p-10'>
        <div>
          <FormComponent 
            lang={lang}
            countries={countries}
            amount={amount}
            selectValue={secondCountryName}
            pairConvertion={pairConvertion}
            lastUpdate={lastUpdate}
            nextUpdate={nextUpdate}
            handlePair={handleSetSecondPair}
            handleSetAmount={handleSetAmount}
          />
        </div> 
        
        <div>
          <FormComponent 
            lang={lang}
            countries={countries}
            amount={amount}
            selectValue={firstCountryName}
            pairConvertion={pairConvertion}
            lastUpdate={lastUpdate}
            nextUpdate={nextUpdate}
            handlePair={handleSetFirstPair}
            handleSetAmount={handleSetAmount}
          />
        </div>
      </div>
    </div>
  )
}

export default PairConversionIndex
