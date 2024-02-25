import React from 'react'
import { useOutletContext } from 'react-router-dom';
import SelectionButton from '../selectButton/SelectionButton';
import Search from '../Search/Search';
import ArrangeMent from '../Arrangement/ArrangeMent';
import List from '../List/List';
import Grid from '../Grid/Grid';
import Detailed from '../Detailed/Detailed';
import { worldcountriesData } from './data';
import Loading from '../../Loading/Loading';

const CountiersIndex = () => {
  const [,lang,, width, countries, count, showCount, handleSetCount, handleSetShowCount, handleSetButtonClicked, buttonClicked, handleSetSearchResult,
    handleSetArrangeResult, searchResult, finalResult, loading, Tloading] = useOutletContext();
  const stillLoading = loading && Tloading
  const removeCountrieswithNoName = finalResult?.filter(country => country?.name)

  return (
    <div className='pt-14'>
      <div className='mb-20'>
        <h1 className='headTitle1'>
          {worldcountriesData.title[lang]}
        </h1>
        <h4 className='headSubTitle1'>
          {worldcountriesData.sub_title[lang]}
        </h4>
      </div>

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

      <ArrangeMent finalResult={removeCountrieswithNoName} searchResult={searchResult} countries={countries} lang={lang} handleSetArrangeResult={handleSetArrangeResult}/>

      <Loading loading={stillLoading}/> 

      {buttonClicked === "list" ?
        <List count={count} size={width} buttonClicked={buttonClicked} countries={removeCountrieswithNoName}/> 
          : buttonClicked === "grid" ?
        <Grid count={count} size={width} buttonClicked={buttonClicked} countries={removeCountrieswithNoName}/>
          :
        <Detailed  lang={lang} countries={removeCountrieswithNoName}/>
      }
    </div>
  )
}

export default CountiersIndex
