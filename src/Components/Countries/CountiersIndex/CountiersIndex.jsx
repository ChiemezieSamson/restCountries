import React from 'react'
import { useOutletContext } from 'react-router-dom';
import SelectionButton from '../selectButton/SelectionButton';
import Search from '../Search/Search';
import ArrangeMent from '../Arrangement/ArrangeMent';
import List from '../List/List';
import Grid from '../Grid/Grid';
import Detailed from '../Detailed/Detailed';

const CountiersIndex = () => {
  const [,lang,, width, countries, count, showCount, handleSetCount, handleSetShowCount, handleSetButtonClicked, buttonClicked, handleSetSearchResult,
    handleSetArrangeResult, searchResult, finalResult] = useOutletContext();
  return (
    <div className='pt-14'>
      <SelectionButton 
        showCount={showCount} 
        count={count} 
        handleSetCount={handleSetCount} 
        handleSetShowCount={handleSetShowCount} 
        width={width} 
        lang={lang} 
        handleSetButtonClicked={handleSetButtonClicked}
        buttonClicked={buttonClicked}
      />

      <div className='mb-10'>
        <Search lang={lang} countries={countries} handleSetSearchResult={handleSetSearchResult}/>
      </div>

      <ArrangeMent finalResult={finalResult} searchResult={searchResult} countries={countries} lang={lang} handleSetArrangeResult={handleSetArrangeResult}/>

      {buttonClicked === "list" ?
        <List count={count} size={width} buttonClicked={buttonClicked} countries={finalResult}/> 
          : buttonClicked === "grid" ?
        <Grid count={count} size={width} buttonClicked={buttonClicked} countries={finalResult}/>
          :
        <Detailed  lang={lang} countries={finalResult}/>
      }
    </div>
  )
}

export default CountiersIndex
