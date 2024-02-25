import { BsTranslate } from "react-icons/bs";
import { iconData, languages } from "./data";

export const LanguageToggleButton = ({lang, setIsLanguage}) => {
  
  const toggleLanguage = (event) => {
    const value = event.target.value
   
    if (value !== lang && value !== "") {
      setIsLanguage(value)   
      localStorage.setItem("Language", value);
      document.documentElement.setAttribute('lang', value);
    }    
  }; 

  return (  
    <span>
      <BsTranslate className="inline-block sm:align-top sm:mt-0.5 text-lg mr-0.5 cursor-pointer" title={iconData[lang]}/>

      <select name="language" id="language" value={lang}  onChange={(event) => toggleLanguage(event)}>
        {languages.map(lang =>
          <option 
            key={lang.id} 
            value={lang.lang.short}
          >{lang.lang.long}</option>
        )}
      </select>
    </span>
  )
}