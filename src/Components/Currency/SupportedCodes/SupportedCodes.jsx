import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { useApiFetchingSupportCode, useFetchCountryAndCurrencyCode } from './data';
import { useApiFetchingComponent, useApiFetchingTranslatedData } from '../../sharedComponent/sharedComponent';

const SupportedCodes = () => {
  const [lang, login, login2, loginUrl, loginKey, APiCode] = useOutletContext();
  const { data, loading, error } = useApiFetchingComponent(login)
  const { TranslatedData, Tloading, Terror } = useApiFetchingTranslatedData(login2)
  const {code, codeLoading, codeError} = useApiFetchingSupportCode(APiCode, loginKey)
  const { countryCurrencyCode } = useFetchCountryAndCurrencyCode(data, TranslatedData, code)
  
  // console.log(countryCurrencyCode);
  return (
    <div>
      
    </div>
  )
}

export default SupportedCodes
