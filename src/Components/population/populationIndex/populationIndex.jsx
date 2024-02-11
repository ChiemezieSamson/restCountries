import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { useApiFetchingComponent } from '../../sharedComponent/sharedComponent';
import { useFetchNameAndPopulation } from './data';
import PopulationSearch from '../PopulationSearch/PopulationSearch';
import PopulationSelectionButton from '../PopulationSelectionButton/PopulationSelectionButton';
import PopulationBarCharts from '../PopulationBarCharts/PopulationBarCharts';

const PopulationIndex = () => {
  const [lang, login] = useOutletContext();
  const { data, loading, error } = useApiFetchingComponent(login)
  const { countries } = useFetchNameAndPopulation(data)
  const [searchResult, setSearchResult] = useState([])
  const [arrangeResult, setArrangeResult] = useState([])
  const [finalResult, setFinalResult] = useState([])


  const handleSetSearchResult = (array) => {
    setSearchResult(array)
  }

  const handleSetArrangeResult = (searchArray) => {
    setArrangeResult(searchArray)
  }

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
      <PopulationSearch 
        lang={lang}
        handleSetSearchResult={handleSetSearchResult}
        sortedArrayDescending={countries}  
      />
      <PopulationSelectionButton
        lang={lang}
        handleSetArrangeResult={handleSetArrangeResult}
        countries={countries}
        searchResult={searchResult}
        finalResult={finalResult}
      />

      <PopulationBarCharts 
        lang={lang}
        finalResult={finalResult}
      />
    </div>
  )
}

export default PopulationIndex
