import React, { useState } from 'react'
import { total } from '../data'
import { arrangementIcons } from './data'

const ArrangeMent = ({lang, searchResult, countries, finalResult, handleSetArrangeResult}) => {
  const [clickIcon, setClickedIcon] = useState("ascend")

  const handleSetClickedIcons = (event) => {
    const IconName = event.target.id

    if (clickIcon !== IconName) {
      setClickedIcon(() => IconName)  
    } else {
      setClickedIcon(() => "")
      handleSetArrangeResult(() => [])
    }

    if (IconName === "ascend" && clickIcon !== IconName) {
      const ascendingByCountry = [...countries].sort((a, b) =>  a.name.toLowerCase().localeCompare(b.name, lang))
      handleSetArrangeResult(() => ascendingByCountry)
    }

    if (IconName === "descend" && clickIcon !== IconName) {
      const descendingByCountry = [...countries].sort((a, b) =>  b.name.toLowerCase().localeCompare(a.name, lang))
      handleSetArrangeResult(() => descendingByCountry)
    }

    if (IconName === "random" && clickIcon !== IconName) {
      const randomByCountry = [...countries].sort(() => Math.random() - 0.5);
      handleSetArrangeResult(() => randomByCountry)
    }
  }
  return (
    <div className='mx-2 px-2 mb-6 grid grid-flow-col justify-between'>
      <p><strong>{total[lang]} :</strong> {finalResult ? finalResult.length : countries.length}</p>

      <ul className='grid grid-cols-3 gap-x-4 px-2 items-center text-lg font-semibold'>
        {arrangementIcons.map(icon => {
          return (
            <li key={icon.id} title={icon.title[lang]} className={clickIcon === "" ? "[&:nth-child(2)]:bgObject rounded-xl transitionEffect" : "rounded-xl"}>
              <button 
                id={icon.name} 
                className={`${clickIcon === icon.name ? "bgObject rounded-xl" : ""} line border px-3 rounded-xl hover:lineSoft hover:bgObject transitionEffect relative isolate after:absolute after:inset-0 after:rounded-xl after:border after:border-transparent`}
                onClick={handleSetClickedIcons}
                disabled={searchResult[0]}
              >
                {icon.icon}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ArrangeMent