import React from 'react'
import PairConversionList from '../PairConversionList/PairConversionList'

const PairConversionCurrency = ({lang, countries, pairConvertion, lastUpdate, nextUpdate, handleSetFirstPair, handleSetSecondPair, handleSetAmount}) => {
  return (
    <div>
      <PairConversionList 
        countries={countries} 
        lang={lang}
        handleSetSecondPair={handleSetSecondPair}
        handleSetFirstPair={handleSetFirstPair}
      />
    </div>
  )
}

export default PairConversionCurrency
