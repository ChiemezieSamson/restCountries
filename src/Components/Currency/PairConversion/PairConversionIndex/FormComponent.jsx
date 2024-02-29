import React, { useState } from 'react'
import PairConversionList from '../PairConversionList/PairConversionList'
import { PiDoorOpenBold } from 'react-icons/pi'
import { FaEllipsisH } from 'react-icons/fa'
import { useFetchCountry } from '../../../sharedComponent/sharedComponent'

const FormComponent = ({lang, countries, selectValue, amount, inputValue, handlePair, getinputValue, isSearching, idName}) => {
  const [openCountryList, setOpenCountryList] = useState(false)
  const { foundCountry } = useFetchCountry(selectValue, countries); // get the country using the selectValue as countryId

  const handleCloseOpenCountryList = () => { // handling toggle of lists on door icon click
    setOpenCountryList(() => false)
  }

  return (
    <div>
      <form id="search-form" role="search" onSubmit={(e) => e.preventDefault()} className='relative block'> 
        <input 
          type="text" 
          id={idName}
          name={idName}
          placeholder={amount === 0 || !amount ? "|" : amount}
          value={inputValue}
          aria-label="text" 
          onChange={(event) => getinputValue(event)}
          maxLength="12"
          className=' focus:outline-none focus:border-0 w-full focus:ring-0 caret-stone-900 rounded-lg font-medium placeholder:textLight
          dark:placeholder:dark_text textLight tracking-wide shadow-inner focus:shadow-slate-400/60 py-2 pl-4 bg-stone-200 dark:bg-stone-400 border-slate-300'
        />

        <label  htmlFor="firstPair" className="absolute inset-y-0 right-0 grid items-center justify-center mx-2 cursor-pointer z-20 border-l-2 border-stone-900 dark:border-stone-300" onClick={() => setOpenCountryList((change) => !change)}>
          <button type='submit' disabled={isSearching}>
          {isSearching ? <FaEllipsisH className='inline-block font-semibold text-lg animate-pulse '/> :
            <>
              <span className='capitalize inline-block pt-px mx-3 font-semibold font-poppins leading-relaxed'>{foundCountry?.name[lang].slice(0, 15)}{foundCountry?.name[lang].length > 15 ? "..." : ""}</span>
              <PiDoorOpenBold className='inline-block font-semibold text-lg'/>
            </>
          }
          </button>
        </label>
      </form>

      <div className={openCountryList ? "block" : "hidden"} onClick={handleCloseOpenCountryList}>
        {/* List of countries and their flags */}
        <PairConversionList 
          countries={countries} 
          lang={lang}
          handlePair={handlePair}
          selectValue={selectValue}
          handleCloseOpenCountryList={handleCloseOpenCountryList}
        />
      </div>

    </div>

  )
}

export default FormComponent
