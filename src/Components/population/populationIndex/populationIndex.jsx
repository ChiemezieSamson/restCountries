import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { useApiFetchingComponent } from '../../sharedComponent/sharedComponent';
import { Heading, useFetchNameAndPopulation } from './data';
import PopulationSearch from '../PopulationSearch/PopulationSearch';
import PopulationSelectionButton from '../PopulationSelectionButton/PopulationSelectionButton';
import PopulationBarCharts from '../PopulationBarCharts/PopulationBarCharts';
import Error from '../../Error/Error';
import Loading from '../../Loading/Loading';

const PopulationIndex = () => {
  const [lang, login] = useOutletContext();
  // fetching the countries from rest countries api
  const { data, loading, error } = useApiFetchingComponent(login)
  const { countries } = useFetchNameAndPopulation(data) // fetching the countries from rest countries api adding population percentage
  const [searchResult, setSearchResult] = useState([])
  const [arrangeResult, setArrangeResult] = useState([])
  const [finalResult, setFinalResult] = useState([])

  // handling setting the input text for the search box
  const handleSetSearchResult = (array) => {
    setSearchResult(array)
  }

  // handling how the countries are displayed (eg ascending , descending etc)
  const handleSetArrangeResult = (searchArray) => {
    setArrangeResult(searchArray)
  }

  // setting the final result making sure that once their is a search text
  // then a search result is need and if an arrange button is clicked an arrange 
  // button should be dispalyed
  useEffect(() => {
    if(searchResult[0]) {
      setFinalResult(() => [...searchResult].sort((a, b) =>  a.name[lang].toLowerCase().localeCompare(b.name[lang], lang)))
      return
    }

    if(arrangeResult[0]) {
      setFinalResult(() => arrangeResult)
      return
    }

    setFinalResult(() => countries.slice().sort((a, b) => {
      const populationA = parseInt(a?.population, 10);
      const populationB = parseInt(b?.population, 10);
      
      if (populationA > populationB) {
        return -1; 
      }
    
      if (populationA < populationB) {
        return 1; 
      }
  
      return populationB - populationA ;
    }))
    return
  }, [arrangeResult, searchResult, countries, lang])
  
  return (
    <div className='pt-32'>
      {/* Title and sub-title */}
      <div className='mb-20'>
        <h1 className='headTitle1'>
          {Heading.title[lang]}
        </h1>
        <h4 className='headSubTitle1'>
          {Heading.sub_title[lang]}
        </h4>
      </div>

      {/* search */}
      <PopulationSearch 
        lang={lang}
        handleSetSearchResult={handleSetSearchResult}
        sortedArrayDescending={countries}  
      />

      {/* Toggle buttons */}
      <PopulationSelectionButton
        lang={lang}
        handleSetArrangeResult={handleSetArrangeResult}
        countries={countries}
        searchResult={searchResult}
        finalResult={finalResult}
      />

      {/* loading handling */}
      <Loading loading={loading}/> 

      {/* Population lists */}
      <PopulationBarCharts 
        lang={lang}
        finalResult={finalResult}
      />

      {/* Error handling */}
      <Error customId={"populationIndex"} error1={error}/>
    </div>
  )
}

export default PopulationIndex
