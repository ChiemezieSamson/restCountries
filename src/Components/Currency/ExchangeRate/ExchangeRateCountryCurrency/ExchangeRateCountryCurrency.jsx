import React from 'react'
import { useFetchCountryWithExchangeRate } from './data'
import { useOutletContext } from 'react-router-dom';


const ExchangeRateCountryCurrency = ({}) => {
  const [lang, loginKey, loginUrl, code, countryId, countryCurrencyCode] = useOutletContext();
  const { countriesRate, exchangerate, exchangerateLoading, exchangerateError } = useFetchCountryWithExchangeRate(countryCurrencyCode, countryId, loginUrl, loginKey, code)
 
  return (
    <div>
      
    </div>
  )
}

export default ExchangeRateCountryCurrency
