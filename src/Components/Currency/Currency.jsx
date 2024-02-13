import React from 'react'
import { Outlet, useOutletContext } from 'react-router-dom';

const Currency = ({loginUrl, loginKey, APiCode}) => {
  const [lang, login] = useOutletContext();
  return (
    <div>
      <Outlet context={[lang, login, loginUrl, loginKey, APiCode]}/>
    </div>
  )
}

export default Currency