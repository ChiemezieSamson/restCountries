import React from 'react'

const PopulationBarCharts = ({finalResult, lang}) => {
 
  return (
    <div>
      <ul>
        {finalResult?.map(country => {
          return (
            <li key={country?.id} className='grid grid-cols-3 text-balance font-poppins font-semibold capitalize'>
              <span>{country?.name[lang]}</span>
              <span>{parseInt(country?.population, 10).toLocaleString()} people</span>
              <span>{country?.percentage}% of world total population</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PopulationBarCharts
