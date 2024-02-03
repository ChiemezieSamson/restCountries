import React from "react";
import { useState, useEffect } from "react";

const TotheTop = () => {
  const [top, setTop] = useState("")

  const scrollFunction = () => {
    if (
      window.scrollY > 850
    ) {
    setTop("block") 
    } else {
     setTop("none") 
    }
  }

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", scrollFunction)
    }
  
    watchScroll()

   return () => {
    window.removeEventListener("scroll", scrollFunction)
   } 
  },[])

  return (
    <button 
      type="button"
      className={`${top === "block" ? "block" : "hidden"} BTop bgObjectSoft fixed bottom-8 right-2 z-50 outline-0 cursor-pointer text-4 hover:bgObject`}
      onClick={() => window.scrollTo(0,500)}
    >
      <span className="pt-4 px-2.5 inline-block align-bottom text-sm backdrop-blur">Top</span>
    </button>
  )

}


export default TotheTop