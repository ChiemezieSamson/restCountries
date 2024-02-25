import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { placeHolder } from './data'

const PopulationSearch = ({lang, handleSetSearchResult, sortedArrayDescending}) => {

  const handleInputValues = (event) => {
    const inputValue = event.target.value?.toLowerCase()?.trim()
    
    if (inputValue !== "") {
       const newList = sortedArrayDescending.filter(countries => {
        const foundSearch =  countries?.name[lang]?.toLowerCase()?.startsWith(inputValue) || countries?.name[lang]?.toLowerCase() === inputValue?.toLowerCase()?.trim() || countries?.name[lang]?.toLowerCase()?.split(" ")[1]?.startsWith(inputValue)
       
        return foundSearch
      })

     handleSetSearchResult(() => newList);
    }else {
      
      handleSetSearchResult(() => []);
    }
  }

  return (
    <form id="search-form" role="search" className='mx-2 px-2' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="Search" className='relative '>
        <input type="search" name="Search" id="Search" placeholder={placeHolder[lang]} aria-label="Search" onChange={handleInputValues}/>
        <span className='absolute left-1 inset-y-0 grid items-center justify-center'>
          <FaSearch className='inline-block text-lg cursor-pointer mx-1'/>
        </span>
      </label>
    </form>
  )
}

export default PopulationSearch