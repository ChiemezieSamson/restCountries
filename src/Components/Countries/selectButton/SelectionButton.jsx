import React, { useState } from 'react'
import { selectionButton } from './data'

const SelectionButton = ({showCount, count, handleSetCount, handleSetShowCount, width, lang, handleSetButtonClicked, buttonClicked}) => {
  const [displayType, setDisplayType] = useState(null)

  // handling setting numbers of columes selected
  const action = (num) => {
    if (count < num) {
      if(count === 0) {
        handleSetCount(() => 3 + 1)
        handleSetShowCount(() => true)
      } else {
        handleSetCount(() => count + 1)
        handleSetShowCount(() => true)
     }
  } else {
    handleSetCount(() => 3)
    handleSetShowCount(() => true)
  }
}

const onClick = (event) => {
  const ID = event.target.id
  setDisplayType(() => ID)

  if(ID === "0") { // if list is clicked   
    if (buttonClicked !== "list") {
      if (width >  1280) {
        action(2)
      }
      handleSetButtonClicked("list")
    } else {
      if (width >  1280) {
        action(5)
      }        
    }
  }

  if(ID === "1") { // if grid is clicked
    if(buttonClicked !== "grid") {
      if (width >  1280) {
        action(2)
      }
      handleSetButtonClicked("grid")
    } else {
      if (width >  1280) {
        action(4)
      }
    }
  }

  if(ID === "2") { // if detailed is clicked
    if(buttonClicked !== "detailed") {
      action(2)
      handleSetButtonClicked("detailed")
    }     
  }
}

  return (
    <ul className='grid grid-cols-3 gap-x-3 my-10 mx-2 px-2'>
      {selectionButton.map(button => {
        return (
          <li key={button.id} title={lang ? button.title[lang] : ""}>
            <button 
              id={button.id} 
              type='button' 
              className={`${buttonClicked === button.name ? 
                "dark:border-stone-200 border-stone-800 text-amber-500 dark:text-green-400 hover:line dark:hover:text-stone-200 hover:text-stone-800" : 
                "lineSoft dark:hover:border-slate-200 hover:border-stone-800 hover:text-amber-500 dark:hover:text-green-400"} 
                border-2 block w-full text-center relative py-1 rounded-xl group transitionEffect cursor-pointer after:absolute after:inset-0 after:rounded-xl`} 
              onClick={onClick}
            >
              {button.icon}
              {buttonClicked === button.name && buttonClicked !== "detailed" && 
                <span className={`absolute right-4 inset-y-0 grid group-hover:text-amber-500 dark:group-hover:text-stone-200 items-center justify-center text-lg transitionEffect ${showCount ? "visible opacity-100" : "invisible opacity-0"}`}>
                  {parseInt(displayType) === button.id && count}
                </span>
              }
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default SelectionButton
