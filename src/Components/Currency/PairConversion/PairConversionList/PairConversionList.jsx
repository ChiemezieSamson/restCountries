import React from 'react'
import { PiDoorOpenBold } from "react-icons/pi";

const PairConversionList = ({countries, lang, handlePair, selectValue}) => {

  const handleSelect = (event) => {
    const country = event.target.value
    const pair = event.target.options[event.target.selectedIndex].id
    handlePair(pair, country);
  }

  return (
    <div className='relative max-w-40'>
      <select value={selectValue} 
        className='capitalize max-w-40 max-h-[400px] font-semibold border-0 focus:border-0 font-poppins appearance-none py-2 leading-relaxed' onChange={(event) => handleSelect(event)}>
        {countries?.map(country => {
          return (
            <option key={country?.id} id={country?.currency_code} value={country?.id} title={country?.name[lang]?.length > 18 ? country?.name[lang] : ""}>
              {country?.name[lang]?.slice(0, 18)}
              {country?.name[lang]?.length > 18  && "..."}
            </option>
          )
        })}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 grid items-center justify-center mx-2">
        <PiDoorOpenBold className='inline-block font-semibold text-lg'/>
      </div>
    </div>
  )
}

export default PairConversionList
