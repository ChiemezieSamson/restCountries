import React from 'react'
import { Outlet, useOutletContext } from 'react-router-dom';

const Currency = ({loginUrl, loginKey, APiCode, APiPair}) => {
  const [lang, login, login2] = useOutletContext();
  return (
    <div>
      <Outlet context={[lang, login, login2, loginKey, APiCode, loginUrl, APiPair]}/>
    </div>
  )
}

export default Currency
