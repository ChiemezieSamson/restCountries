import React from 'react'

const PairConversionList = ({countries, lang, handlePair, selectValue, handleCloseOpenCountryList}) => {

  const handleSelect = (pair, country) => { // get the currency code and the currency name of any selected country
    handlePair(pair, country)
    handleCloseOpenCountryList() // close the box after each click
  }

  return (
    <div className='max-h-[400px] overflow-y-scroll border-b bg-gray-200 dark:border-stone-50 border-stone-900 rounded-lg overflowScrollSmallScreen'>
      <ul name="country" id="country" 
        className='capitalize px-2 font-semibold border-0 focus:border-0 font-poppins py-2 leading-relaxed grid gap-y-3'>
        {countries?.map(country => {
          let setCode 

          if(country?.id) { // croatia and sierra leone made a change to their currency which haven't been made on the exchange rate api 
            if (country?.id === "croatia") {
              return setCode = "HRK"
            } 
      
            if (country?.id === "sierra leone") {
              return setCode ="SLE"
            }
      
            setCode = country?.currency_code
          }
          
          return (
            <li key={country?.id} id={country?.currency_code} title={country?.name[lang]?.length > 18 ? country?.name[lang] : ""} 
              className={`${selectValue === country?.id ? "dark:bgLight bg-slate-500/30" : ""} cursor-pointer dark:hover:bgLight hover:bg-slate-500/30 transitionEffect`} 
              onClick={() => handleSelect(setCode, country?.id)}>
              <img 
                src={country?.flag?.svg ? country?.flag?.svg : country?.flag?.png} 
                alt={country?.flag?.alt} 
                loading="lazy"
                className='aspect-square size-7 inline-block hover:scale-[1.03] focus-within:scale-[1.03] transitionEffect'
              />

              <span className='inline-block mx-3 text-stone-900'>
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
