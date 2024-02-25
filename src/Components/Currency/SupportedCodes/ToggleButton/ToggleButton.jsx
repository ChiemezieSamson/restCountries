import React, { useState } from 'react'
import { arrangementIconsToggle, descendingArrangement } from './data'

const ToggleButton = ({searchResult, lang, ascendingByCountry, handleSetArrangeResult, countryCurrencyCode}) => {
  const { descendingByCountry } = descendingArrangement(countryCurrencyCode, lang) // arranging the countries from z to A alphabetically
  const [clickIcon, setClickedIcon] = useState("ascend")

  // handling toggle alphabetically
  const handleSetToggleButton = (event) => {
    const IconName = event.target.id

    // set to ascending order
    if (IconName !== "ascend") {
      handleSetArrangeResult(() => ascendingByCountry)
    } 

     // set to descending order
    if (IconName !== "descend") {      
      handleSetArrangeResult(() => descendingByCountry)
    }

    if (clickIcon !== "ascend") {
      setClickedIcon(() => "ascend")  
    } else {
      setClickedIcon(() => "descend")
    }
  }
  
  return (
    <div title={clickIcon === "ascend" ? arrangementIconsToggle[0]?.title[lang] : arrangementIconsToggle[1]?.title[lang]} className='mt-4 mx-3'>
      <button 
        id={clickIcon === "ascend" ? arrangementIconsToggle[0]?.name : arrangementIconsToggle[1]?.name} 
        className={`${clickIcon === "ascend" || clickIcon === "lowest" ? "bgObject rounded-xl" : ""} line border px-4 rounded-xl hover:lineSoft hover:bgObject transitionEffect relative isolate after:absolute after:inset-0 after:rounded-xl after:border after:border-transparent`}
        onClick={handleSetToggleButton}
        disabled={searchResult[0]}
      >
        {clickIcon === "ascend" ? arrangementIconsToggle[0]?.icon : arrangementIconsToggle[1]?.icon}
      </button>
    </div>
  )
}

export default ToggleButton
