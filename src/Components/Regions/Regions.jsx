import React from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'

const Regions = () => {
  const [lang, login] = useOutletContext();

  return (
    <div>
      <Outlet context={[lang, login]}/>
    </div>
  )
}

export default Regions
