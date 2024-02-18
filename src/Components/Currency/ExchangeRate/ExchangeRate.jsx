import React, { useEffect, useState } from 'react'
import { Outlet, useOutletContext, useParams } from 'react-router-dom';
import { useFetchCountryAndCurrencyCode } from '../../sharedComponent/sharedComponent';
import { useFetchCountry } from './ExchangeRateIndex/data';

const ExchangeRate = () => {
  const [lang, login, login2, loginKey, APiCode, loginUrl] = useOutletContext();
  const { countryId } = useParams();
  const { countryCurrencyCode, Error, Loading } = useFetchCountryAndCurrencyCode(login, login2, loginKey, APiCode)
  const { foundCountry } = useFetchCountry(countryId, countryCurrencyCode, lang)
  const [code , setCode] = useState("USD")

  useEffect(() => {
    if(foundCountry?.id) {

      if (countryId === "croatia") {
        setCode(() => "HRK")
      } 

      if (countryId === "sierra leone") {
        setCode(() => "SLE")
      }

      if (countryId !== "croatia" && countryId === "sierra leone") {
        setCode(() => foundCountry?.currency_code)
      }
    } else {
      setCode(() => "USD")
    }
  },[foundCountry, countryId])

  return (
    <div>
      <Outlet context={[lang, loginKey, loginUrl, code, countryId, countryCurrencyCode]}/>
    </div>
  )
}

export default ExchangeRate
