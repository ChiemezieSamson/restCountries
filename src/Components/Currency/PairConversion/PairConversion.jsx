import React from 'react'
import { Outlet, useOutletContext } from 'react-router-dom';
import { useFetchCountryAndCurrencyCode } from '../../sharedComponent/sharedComponent';
import Error from '../../Error/Error';

const PairConversion = () => {
  const [lang, login, login2, loginKey, APiCode, loginUrl, APiPair] = useOutletContext();
  // fetching countries base on the available currency fetched from the exchange rate api
  const { countryCurrencyCode, Serror, SLoading } = useFetchCountryAndCurrencyCode(login, login2, loginKey, APiCode)

  return (
    <div>
      <Outlet context={[lang, loginKey, APiPair, countryCurrencyCode, loginUrl, SLoading]}/>
      {/* Error handling */}
      <Error customId={"pairConversion"} error1={Serror}/>
    </div>
  )
}

export default PairConversion
