import React, { useState } from 'react'
import { arrangementIcons, arrangementIconsToggle, tenHighestPopulation, tenLowestPopulation, tenMiddlePopulation } from '../../../../sharedComponent/IconArrangementDate'
import { total } from '../../../../sharedComponent/sharedComponent'
import { Reset, sortedByLowestExChangeRate, sortedByhigHestExChangeRate } from './data'
import { FaHistory } from 'react-icons/fa'

const ExchangeRateSlectionButton = ({searchResult, finalResult, lang, countriesRate,  handleSetArrangeResult}) => {
  const [toggleButton, setToggleButton] = useState(false)
  const [clickIcon, setClickedIcon] = useState("highest")
  const [sortLastArrangment, setsortLastArrangment] = useState("")
  const { sortedArrayAscending } = sortedByhigHestExChangeRate(countriesRate)
  const { sortedArrayDescending } = sortedByLowestExChangeRate(countriesRate)
  const { highestTenPopulation } = tenHighestPopulation(sortedArrayDescending)
  const { lowestTenPopulation } = tenLowestPopulation(sortedArrayAscending)
  const { middlePopulation } = tenMiddlePopulation(sortedArrayAscending)

  const handlerandom = (event) => {
    const IconName = event.target.id
    
    // set to top ten order
    if (IconName === "top ten" && IconName !== clickIcon) {
      setsortLastArrangment(() => clickIcon)
      handleSetArrangeResult(() => highestTenPopulation)
    }

    // set to bottom ten order
    if (IconName === "bottom ten" && IconName !== clickIcon) {
      setsortLastArrangment(() => clickIcon)
      handleSetArrangeResult(() => lowestTenPopulation)
    }

    // set to middle ten order
    if (IconName === "middle ten" && IconName !== clickIcon) {
      setsortLastArrangment(() => clickIcon)
      handleSetArrangeResult(() => middlePopulation)
    }

    if (clickIcon !== IconName) {
      setClickedIcon(() => IconName)  
    } else {
      setClickedIcon(() => sortLastArrangment)
      setToggleButton(() => toggleButton)

      // making sure users are returned to their last arrangment before moving to random
      if (sortLastArrangment === "highest") {
        handleSetArrangeResult(() => sortedArrayDescending)
        return
      } else {
        handleSetArrangeResult(() => sortedArrayAscending)
        return
      }
    }
  }

  const handleSetToggleButton = (event) => {
    const IconName = event.target.id

    // set to ascending order
    if (toggleButton && IconName !== "highest") {
      handleSetArrangeResult(() => sortedArrayDescending)
    } 

     // set to descending order
    if (!toggleButton && IconName !== "lowest") {
      handleSetArrangeResult(() => sortedArrayAscending)
    }

    if (clickIcon !== "highest") {
      setClickedIcon(() => "highest")  
    } else {
      setClickedIcon(() => "lowest")
    }

    setToggleButton((change) => !change)
  }

  const handleReset = () => {
    handleSetArrangeResult(() => countriesRate)
    setClickedIcon(() => "highest")
    setsortLastArrangment(() => "")
    setToggleButton(() => false)
  }

  return (
    <div className='mx-2 px-2 mb-6 mt-4 grid sm:grid-flow-col gap-y-3 justify-center text-center sm:text-left sm:justify-between'>
      <p><strong>{total[lang]} :</strong> {finalResult ? finalResult.length : countriesRate.length}</p>
      <ul className='grid grid-cols-5 max-w-xs gap-x-3 text-lg font-semibold'>
        {arrangementIcons.map(button => {
          return (
            <li key={button.id} title={button?.title[lang]}>
              <button 
                id={button.name} 
                className={`${clickIcon === button.name ? "bgObject rounded-xl" : ""} line border px-4 rounded-xl hover:lineSoft hover:bgObject transitionEffect relative isolate after:absolute after:inset-0 after:rounded-xl after:border after:border-transparent`}
                onClick={handlerandom}
                disabled={searchResult[0]}
              >
                {button.icon}
              </button>
            </li>
          )
        })}
        <li title={toggleButton ? arrangementIconsToggle[0]?.title[lang] : arrangementIconsToggle[1]?.title[lang]}>
          <button 
            id={toggleButton ? arrangementIconsToggle[0]?.name : arrangementIconsToggle[1]?.name} 
            className={`${clickIcon === "highest" || clickIcon === "lowest" ? "bgObject rounded-xl" : ""} line border px-4 rounded-xl hover:lineSoft hover:bgObject transitionEffect relative isolate after:absolute after:inset-0 after:rounded-xl after:border after:border-transparent`}
            onClick={handleSetToggleButton}
            disabled={searchResult[0]}
          >
            {toggleButton ? arrangementIconsToggle[0]?.icon : arrangementIconsToggle[1]?.icon}
          </button>
        </li>
        <li title={Reset[lang]}>
          <button 
            className='line border px-4 rounded-xl hover:lineSoft hover:bgObject transitionEffect relative isolate after:absolute after:inset-0 after:rounded-xl after:border after:border-transparent'
            onClick={handleReset}
            disabled={searchResult[0]}
          >
            <FaHistory className='inline-block' />
          </button>
        </li>
      </ul>      
    </div>
  )
}

export default ExchangeRateSlectionButton
