import React from 'react'

const PairConversionList = ({countries, lang, handlePair, selectValue, handleCloseOpenCountryList}) => {

  const handleSelect = (pair, country) => {
    handlePair(pair, country)
    handleCloseOpenCountryList()
  }

  return (
    <div className='max-h-[400px] overflow-y-scroll border-b bg-gray-200 dark:border-stone-50 border-stone-900 rounded-lg overflowScrollSmallScreen'>
      <ul name="country" id="country" 
        className='capitalize px-2 font-semibold border-0 focus:border-0 font-poppins py-2 leading-relaxed grid gap-y-3'>
        {countries?.map(country => {
          return (
            <li key={country?.id} id={country?.currency_code} title={country?.name[lang]?.length > 18 ? country?.name[lang] : ""} 
              className={`${selectValue === country?.id ? "dark:bgLight bg-slate-500/30" : ""} cursor-pointer dark:hover:bgLight hover:bg-slate-500/30 transitionEffect`} 
              onClick={() => handleSelect(country?.currency_code, country?.id)}>
              <img 
                src={country?.flag?.svg ? country?.flag?.svg : country?.flag?.png} 
                alt={country?.flag?.alt} 
                loading="lazy"
                className='aspect-square size-7 inline-block hover:scale-[1.03] focus-within:scale-[1.03] transitionEffect'
              />

              <span className='inline-block mx-3'>
                {country?.name[lang]?.slice(0, 18)}
                {country?.name[lang]?.length > 18  && "..."}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PairConversionList
