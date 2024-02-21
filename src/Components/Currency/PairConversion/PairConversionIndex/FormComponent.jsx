import React from 'react'
import PairConversionList from '../PairConversionList/PairConversionList'

const FormComponent = ({lang, countries, pairConvertion, lastUpdate, nextUpdate, handlePair, handleSetAmount, amount, selectValue}) => {
  return (
    <form id="search-form" role="search" onSubmit={(e) => e.preventDefault()}> 
      <label htmlFor="firstPair" className='relative block'>
        <input type="text" id='firstPair' name='firstPair' placeholder={amount} aria-label="text" 
        className=' focus:outline-none focus:border-0 w-full focus:ring-0 caret-stone-900 rounded-lg font-medium placeholder:textLight
        dark:placeholder:dark_text textLight tracking-wide shadow-inner focus:shadow-slate-400/60 py-2 pl-4 bg-stone-200 dark:bg-stone-400 border-slate-300'/>
        
        <span className='absolute inset-y-0 right-0 px-2 grid items-center justify-center'>
          <PairConversionList 
            countries={countries} 
            lang={lang}
            handlePair={handlePair}
            selectValue={selectValue}
          />
        </span>
      </label>
    </form>
  )
}

export default FormComponent
