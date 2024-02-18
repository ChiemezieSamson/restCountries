import React, { useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom';
import { useFetchCountryAndCurrencyCode } from '../../../sharedComponent/sharedComponent';
import ExchangeRateCountryCurrency from '../ExchangeRateCountryCurrency/ExchangeRateCountryCurrency';
import { useFetchCountry } from './data';

const ExchangeRateIndex = () => {
  const [lang, loginKey, loginUrl, code, countryId, countryCurrencyCode] = useOutletContext();
 
  return (
    <div>
      <ExchangeRateCountryCurrency
       
      />
    </div>
  )
}

export default ExchangeRateIndex
