import React from 'react'
import { Outlet, useOutletContext } from 'react-router-dom';

const Population = () => {
  const [lang, login] = useOutletContext();

  return (
    <div>
      <Outlet context={[lang, login]}/>
    </div>
  )
}

export default Population
