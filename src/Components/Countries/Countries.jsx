import React, { useEffect, useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom';
import { useWindowSize } from '@uidotdev/usehooks';
import { useDetailedCountriesName } from './SharedComponent/SharedComponent';
import { useApiFetchingComponent } from '../sharedComponent/sharedComponent';


const Countries = () => {
  const [lang, login] = useOutletContext();
  const [language, setLanguage] = useState("kor")
  const { data, loading, error } = useApiFetchingComponent(login)
  const {countries} = useDetailedCountriesName(data, lang, language) // A function fetching just the names and images of each country 
  const [count, setCount] = useState(0)
  const [buttonClicked, setButtonClicked] = useState("grid")
  const [showCount, setShowCount] = useState(false)
  const [searchResult, setSearchResult] = useState([])
  const [arrangeResult, setArrangeResult] = useState([])
  const [finalResult, setFinalResult] = useState([])
  const size = useWindowSize();
  const width = size.width

  // if (data) {
  //   console.log(data[0]);
  // } 
  

  const handleSetCount = (number) => {
    setCount(number)
  }


  const handleSetButtonClicked = (number) => {
    setButtonClicked(number)
  }


  const handleSetShowCount = (boolen) => {
    setShowCount(boolen)
  }


  const handleSetSearchResult = (searchArray) => {
    setSearchResult(searchArray)
  }


  const handleSetArrangeResult = (searchArray) => {
    setArrangeResult(searchArray)
  }

  useEffect(() => {
    if(lang === "ko") {
      setLanguage(() => "kor")
    }else if (lang === "zh") {
      setLanguage(() => "zho")
    }
  }, [lang])


  useEffect(() => {
    if (width < 1280) {
      setCount(() => 0)
    }
  }, [width])


  useEffect(() => {
    let intervalId
    if (count > 2) {
      intervalId = setInterval(() => {
        setShowCount(() => false)
      }, 1000); 
    }

    return () => clearInterval(intervalId);
  }, [count]);


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
        <Outlet context={[data, lang, width, countries, count, showCount, handleSetCount, handleSetShowCount, handleSetButtonClicked, buttonClicked, handleSetSearchResult,
    handleSetArrangeResult, searchResult, finalResult]}/>
      </div>
    </div>
  )
}

export default Countries
