import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { placeHolder, searchByData } from './data'

const Search = ({lang, handleSetSearchResult, countries}) => {
  const [searcByOption, setSearcByOption] = useState("name")

  const handleSetSearcByOption = (event) => { // handling the selection of search "By"
    const searchByValue = event.target.value
    setSearcByOption(() => searchByValue);
  }

  //handling getting and setting input values
  const handleInputValues = (event) => {
    const inputValue = event.target.value?.toLowerCase()?.trim()
    
    
    if (inputValue !== "") {//make sure we are not gettin an empty sting

      if (searcByOption === "name") { // search by name
       const newList = countries.filter(countries => {

        const foundSearch =  countries?.name?.startsWith(inputValue) || countries?.name === inputValue || countries?.name?.split(" ")[1]?.startsWith(inputValue)
       
        return foundSearch
      })
       handleSetSearchResult(() => newList);
      }

      if(searcByOption === "capital") { // search by capital
        const newList = countries.filter(countries => countries?.capital?.startsWith(inputValue) || countries?.capital === inputValue)

        handleSetSearchResult(() => newList);
      }

      if(searcByOption === "continets") { // search by continets
        const newList = countries.filter(countries => countries?.continents?.startsWith(inputValue) || countries?.continents === inputValue)

        handleSetSearchResult(() => newList);
      }

      if(searcByOption === "language") {// search by language
        const newList = countries.filter(countries => countries?.language?.startsWith(inputValue) || countries?.language === inputValue)

        handleSetSearchResult(() => newList);
      }
    } else {
      handleSetSearchResult(() => []);
    }
  }

  return (
    <form id="search-form" role="search" className='mx-2 px-2' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="Search" className='relative '>
        <input type="search" name="Search" id="Search" placeholder={placeHolder[lang]} aria-label="Search" onChange={handleInputValues}/>
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
