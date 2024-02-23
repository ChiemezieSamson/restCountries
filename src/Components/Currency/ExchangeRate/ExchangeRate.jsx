import React, { useEffect, useState } from 'react'
import { Outlet, useOutletContext, useParams } from 'react-router-dom';
import { useFetchCountry, useFetchCountryAndCurrencyCode } from '../../sharedComponent/sharedComponent';
import Error from '../../Error/Error';

const ExchangeRate = () => {
  const [lang, login, login2, loginKey, APiCode, loginUrl] = useOutletContext();
  const { countryId } = useParams();
  const { countryCurrencyCode, Serror, SLoading } = useFetchCountryAndCurrencyCode(login, login2, loginKey, APiCode)
  const { foundCountry } = useFetchCountry(countryId, countryCurrencyCode)
  const [code , setCode] = useState("USD")

  useEffect(() => {
    if(countryId) {
      if (countryId === "croatia") {
        setCode(() => "HRK")
        return
      } 

      if (countryId === "sierra leone") {
        setCode(() => "SLE")
        return
      }

      setCode(() => foundCountry?.currency_code)
    } else {
      setCode(() => "USD")
    }
  },[foundCountry, countryId])

  return (
    <div>
      <Outlet context={[lang, loginKey, loginUrl, code, countryId, countryCurrencyCode, foundCountry, SLoading]}/>
      <Error customId={"exchangerate"} error1={Serror}/>
    </div>
  )
}

export default ExchangeRate
