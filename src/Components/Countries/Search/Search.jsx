import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { searchByData } from './data'

const Search = ({lang, handleSetSearchResult, countries}) => {
  const [searcByOption, setSearcByOption] = useState("name")

  const handleSetSearcByOption = (event) => {
    const searchByValue = event.target.value
    setSearcByOption(() => searchByValue);
  }

  const handleInputValues = (event) => {
    const inputValue = event.target.value
    
    
    if (inputValue !== "") {// Using a regular expression to check if the value contains only letters
      if (searcByOption === "name") {
       const newList = countries.filter(countries => {
        const NameWithPositionStart = countries.name.split(" ")[1] 
        console.log( NameWithPositionStart);
        const foundSearch =  NameWithPositionStart !== undefined ? NameWithPositionStart?.startsWith(inputValue?.toLowerCase()?.trim()) : "" || countries?.name?.startsWith(inputValue?.toLowerCase()?.trim()) || countries?.name === inputValue?.toLowerCase()?.trim()
       
        return foundSearch
      })
       handleSetSearchResult(() => newList);
      }

      if(searcByOption === "capital") {
        const newList = countries.filter(countries => countries?.capital?.startsWith(inputValue?.toLowerCase()?.trim()) || countries?.capital === inputValue?.toLowerCase()?.trim())
        handleSetSearchResult(() => newList);
      }

      if(searcByOption === "continets") {
        const newList = countries.filter(countries => countries?.continents?.startsWith(inputValue?.toLowerCase()?.trim()) || countries?.continents === inputValue?.toLowerCase()?.trim())
        handleSetSearchResult(() => newList);
      }

      if(searcByOption === "language") {
        const newList = countries.filter(countries => countries?.language?.startsWith(inputValue?.toLowerCase()?.trim()) || countries?.language === inputValue?.toLowerCase()?.trim())
        handleSetSearchResult(() => newList);
      }
    } else {
      handleSetSearchResult(() => []);
    }
  }

  return (
    <form id="search-form" role="search" className='mx-2 px-2' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="Search" className='relative '>
        <input type="search" name="Search" id="Search" placeholder='Search...' aria-label="Search" onChange={handleInputValues}/>
        <span className='absolute left-1 inset-y-0 grid items-center justify-center'>
          <FaSearch className='inline-block text-lg cursor-pointer'/>
        </span>
        <select name="language" id="language" className='max-w-30 absolute right-1 inset-y-0 grid items-center justify-center' onChange={handleSetSearcByOption}>
          {searchByData.map(option =>
            <option 
              key={option.id} 
              value={option.name}
            >{option.option[lang]}</option>
          )}
        </select>
      </label>
    </form>
  )
}

export default Search
