import React from 'react'
import { Outlet, useOutletContext } from 'react-router-dom';

const Currency = ({loginUrl, loginKey, APiCode}) => {
  const [lang, login, login2] = useOutletContext();
  return (
    <div>
      <Outlet context={[lang, login, login2, loginUrl, loginKey, APiCode]}/>
    </div>
  )
}

export default Currency
