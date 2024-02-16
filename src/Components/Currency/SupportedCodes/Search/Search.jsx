import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { placeHolder } from './data'

const Search = ({countries, lang, handleSetSearchResult}) => {

  const handleInputValues = (event) => {
    const inputValue = event.target.value?.toLowerCase()?.trim()
    
    if (inputValue !== "") {
       const newList = countries.filter(country => {
        let foundSearch 
        const byCountryName = country?.name[lang]?.toLowerCase()?.startsWith(inputValue) || country?.name[lang]?.toLowerCase() === inputValue?.toLowerCase()?.trim() || country?.name[lang]?.toLowerCase()?.split(" ")[1]?.startsWith(inputValue)
        const byCurrencyName = country?.currency_name[lang]?.toLowerCase()?.startsWith(inputValue) || country?.currency_name[lang]?.toLowerCase() === inputValue?.toLowerCase()?.trim() || country?.currency_name[lang]?.toLowerCase()?.split(" ")[1]?.startsWith(inputValue)

        if(byCountryName) {
          foundSearch = byCountryName
        }

        if(byCurrencyName) {
          foundSearch = byCurrencyName
        }
        return foundSearch
      })
     handleSetSearchResult(() => newList);
    }else {
      handleSetSearchResult(() => []);
    }
  }

  return (
    <form id="search-form" role="search" className='mt-20' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="Search" className='relative '>
        <input type="search" name="Search" id="Search" placeholder={placeHolder[lang]} aria-label="Search" onChange={handleInputValues}/>
        <span className='absolute left-1 inset-y-0 grid items-center justify-center'>
          <FaSearch className='inline-block text-lg cursor-pointer mx-1'/>
        </span>
      </label>
    </form>
  )
}

export default Search
