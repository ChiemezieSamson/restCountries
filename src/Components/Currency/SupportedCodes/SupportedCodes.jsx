import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { useApiFetchingSupportCode } from './data';
import { useApiFetchingComponent } from '../../sharedComponent/sharedComponent';

const SupportedCodes = () => {
  const [lang, login, loginUrl, loginKey, APiCode] = useOutletContext();
  const { data, loading, error } = useApiFetchingComponent(login)
  const {code, codeLoading, codeError} = useApiFetchingSupportCode(APiCode, loginKey)
  console.log(code?.result === "success" ? code.supported_codes : "");
  return (
    <div>
      
    </div>
  )
}

export default SupportedCodes
