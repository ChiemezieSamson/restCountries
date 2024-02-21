import React from 'react'
import { Outlet, useOutletContext } from 'react-router-dom';
import { useFetchCountryAndCurrencyCode } from '../../sharedComponent/sharedComponent';

const PairConversion = () => {
  const [lang, login, login2, loginKey, APiCode, loginUrl, APiPair] = useOutletContext();
  const { countryCurrencyCode, Error, Loading } = useFetchCountryAndCurrencyCode(login, login2, loginKey, APiCode)

  return (
    <div>
      <Outlet context={[lang, loginKey, APiPair, countryCurrencyCode, loginUrl]}/>
    </div>
  )
}

export default PairConversion
