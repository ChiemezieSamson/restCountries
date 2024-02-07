import React, { useEffect, useState } from 'react'
import { total } from '../data'
import { arrangementIcons } from './data'

const ArrangeMent = ({lang, searchResult, countries, finalResult, handleSetArrangeResult}) => {
  const [clickIcon, setClickedIcon] = useState("ascend")
  const [sortLastArrangment, setsortLastArrangment] = useState("")
  const [savelanguage, setSavelanguage] = useState("")
  const [toggleButton, setToggleButton] = useState(false)

  const handlerandom = (event) => {
    const IconName = event.target.id
    
    // set to random order
    if (IconName === "random" && IconName !== clickIcon) {
      setsortLastArrangment(() => clickIcon)
      const randomByCountry = [...countries].sort(() => Math.random() - 0.5);
      handleSetArrangeResult(() => randomByCountry)
    }

    if (clickIcon !== IconName) {
      setClickedIcon(() => IconName)  
    } else {
      setClickedIcon(() => sortLastArrangment)
      setToggleButton(() => toggleButton)

      // making sure users are returned to their last arrangment before moving to random
      if (sortLastArrangment === "ascend") {
        const ascendingByCountry = [...countries].sort((a, b) =>  a.name.toLowerCase().localeCompare(b.name, lang))
        handleSetArrangeResult(() => ascendingByCountry)
      } else {
        const descendingByCountry = [...countries].sort((a, b) =>  b.name.toLowerCase().localeCompare(a.name, lang))
        handleSetArrangeResult(() => descendingByCountry)
      }
    }
  }

  const handleSetToggleButton = (event) => {
    const IconName = event.target.id

    // set to ascending order
    if (toggleButton && IconName !== "ascend") {
      const ascendingByCountry = [...countries].sort((a, b) =>  a.name.toLowerCase().localeCompare(b.name, lang))
      handleSetArrangeResult(() => ascendingByCountry)
    } 

     // set to descending order
    if (!toggleButton && IconName !== "descend") {
      const descendingByCountry = [...countries].sort((a, b) =>  b.name.toLowerCase().localeCompare(a.name, lang))
      handleSetArrangeResult(() => descendingByCountry)
    }

    if (clickIcon !== "ascend") {
      setClickedIcon(() => "ascend")  
    } else {
      setClickedIcon(() => "descend")
    }

    setToggleButton((change) => !change)
  }
  
  return (
    <div className='mx-2 px-2 mb-6 grid grid-flow-col justify-between'>
      <p><strong>{total[lang]} :</strong> {finalResult ? finalResult.length : countries.length}</p>


      <ul className='grid grid-cols-2 gap-x-4 px-2 items-center text-lg font-semibold'>
        <li title={arrangementIcons[0]?.title[lang]}>
          <button 
            id={arrangementIcons[0]?.name} 
            className={`${clickIcon === "random" ? "bgObject rounded-xl" : ""} line border px-3 rounded-xl hover:lineSoft hover:bgObject transitionEffect relative isolate after:absolute after:inset-0 after:rounded-xl after:border after:border-transparent`}
            onClick={handlerandom}
            disabled={searchResult[0]}
          >
            {arrangementIcons[0]?.icon}
          </button>
        </li>
       
        <li title={toggleButton ? arrangementIcons[2]?.title[lang] : arrangementIcons[1]?.title[lang]}>
          <button 
            id={toggleButton ? arrangementIcons[2]?.name : arrangementIcons[1]?.name} 
            className={`${clickIcon !== "random"? "bgObject rounded-xl" : ""} line border px-3 rounded-xl hover:lineSoft hover:bgObject transitionEffect relative isolate after:absolute after:inset-0 after:rounded-xl after:border after:border-transparent`}
            onClick={handleSetToggleButton}
            disabled={searchResult[0]}
          >
            {toggleButton ? arrangementIcons[2]?.icon : arrangementIcons[1]?.icon}
          </button>
        </li>         
      </ul>
    </div>
  )
}

export default ArrangeMent