import React, { useEffect, useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom';
import { useWindowSize } from '@uidotdev/usehooks';
import { useDetailedCountriesName } from './SharedComponent/SharedComponent';
import { useApiFetchingComponent, useApiFetchingTranslatedData } from '../sharedComponent/sharedComponent';
import Error from '../Error/Error';


const Countries = () => {
  const [lang, login, login2] = useOutletContext();
  const [language, setLanguage] = useState("kor")
  const { data, loading, error } = useApiFetchingComponent(login) // A function fetching each country details
  const { TranslatedData, Tloading, Terror } = useApiFetchingTranslatedData(login2) // fetching each country details in chinese and korean language
  const {countries} = useDetailedCountriesName(data, TranslatedData, lang, language) // Getting the each country details with their chinese and korean translation
  const [count, setCount] = useState(0)
  const [buttonClicked, setButtonClicked] = useState("grid")
  const [showCount, setShowCount] = useState(false)
  const [searchResult, setSearchResult] = useState([])
  const [arrangeResult, setArrangeResult] = useState([])
  const [finalResult, setFinalResult] = useState([])
  const size = useWindowSize();
  const width = size.width

  // handling setting number of columes displayed on List and Grid component
  const handleSetCount = (number) => {
    setCount(number)
  }

  // handling the button clicked between the list, grid and detailed button
  const handleSetButtonClicked = (number) => {
    setButtonClicked(number)
  }

  // handling when and how the number of viewable columes can be done
  const handleSetShowCount = (boolen) => {
    setShowCount(boolen)
  }

  // handling setting the input text for the search box
  const handleSetSearchResult = (searchArray) => {
    setSearchResult(searchArray)
  }

  // handling how the countries are displayed (eg ascending , descending etc)
  const handleSetArrangeResult = (searchArray) => {
    setArrangeResult(searchArray)
  }

  // Setting the language to match the language key for the translated objects
  // in the fetched api
  useEffect(() => {
    if(lang === "ko") {
      setLanguage(() => "kor")
    }else if (lang === "zh") {
      setLanguage(() => "zho")
    }
  }, [lang])

  // reset count on small screen
  useEffect(() => {
    if (width < 1280) {
      setCount(() => 0)
    }
  }, [width])

  // setting how long the number of columes displayed show wait before disappearing
  useEffect(() => {
    let intervalId
    if (count > 2) {
      intervalId = setInterval(() => {
        setShowCount(() => false)
      }, 1000); 
    }

    return () => clearInterval(intervalId);
  }, [count]);

  // setting the final result making sure that once their is a search text
  // then a search result is need and if an arrange button is clicked an arrange 
  // button should be dispalyed
  useEffect(() => {
    if(searchResult[0]) {
      setFinalResult(() => searchResult)
      return
    }

    if(arrangeResult[0]) {
      setFinalResult(() => arrangeResult)
      return
    }

    setFinalResult(() => [...countries].sort((a, b) =>  a.name.toLowerCase().localeCompare(b.name, lang)))
    return
  }, [arrangeResult, searchResult, countries, lang])

  return (
    <div className='pt-16'>
      <div className=''>
        <Outlet 
          context={[data, lang, TranslatedData, width, countries, count, showCount, handleSetCount, handleSetShowCount, handleSetButtonClicked, buttonClicked, handleSetSearchResult,
            handleSetArrangeResult, searchResult, finalResult, loading, Tloading]}
        />
        <Error customId={"countries"} error1={error} error2={Terror}/>
      </div>
    </div>
  )
}

export default Countries
