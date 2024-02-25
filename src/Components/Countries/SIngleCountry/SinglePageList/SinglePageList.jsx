import { useEffect, useState } from "react";
import { SinglePageText } from "../data";

export const useSinglePageList = (country, lang) => {
  const [convertedTimes, setConvertedTimes] = useState([]);
  let list 

  useEffect(() => { // conversion of time zones

    if (country) {
      const timeZones = country?.timezones ? country?.timezones : []
      
      const baseTime = new Date();
      let countryTimeZone
      
      if (timeZones.length >= 2 || timeZones[0]?.match(/([+-]\d+):(\d+)/)) {
        
        countryTimeZone = timeZones?.map((timeZone) => {
            const [offsetHours, offsetMinutes] = timeZone?.match(/([+-]\d+):(\d+)/)?.slice(1).map(Number);
            const convertedTime = new Date(baseTime.getTime() + (offsetHours * 60 + offsetMinutes) * 60 * 1000);
            return convertedTime.toLocaleString(lang, { timeZoneName: 'short', hour12: true });
          });
        } else {
        countryTimeZone = country?.timezones !== undefined ? country?.timezones : [""]
      }

      setConvertedTimes(countryTimeZone);
    }

  }, [country, lang]);


  if (country) {


    list = [ 
      {
        id: 0,
        left: SinglePageText.commonName[lang],
        right: country?.name?.common ? country?.name?.common : ""
      },
      {
        id: 1,
        left: SinglePageText.officialName[lang],
        right: country?.name?.official ? country?.name?.official : ""
      },
      {
        id: 2,
        left: SinglePageText.capital[lang],
        right: country?.capital ? country?.capital : ""
      },
      {
        id: 3,
        left: SinglePageText.language[lang],
        right: country?.language ? country?.language : ""
      },
      {
        id: 4,
        left: SinglePageText.continent[lang],
        right: country?.continents ? country?.continents : ""
      },
      {
        id: 5,
        left: SinglePageText.region[lang],
        right: country?.region ? country?.region : ""
      },
      {
        id: 6,
        left: SinglePageText.subregion[lang],
        right: country?.subregion ? country?.subregion : ""
      },
      {
        id: 7,
        left: SinglePageText.currency[lang],
        right: country?.currencies?.name ? country?.currencies?.name : ""
      },
      {
        id: 8,
        left: SinglePageText.symbol[lang],
        right: country?.currencies?.symbol ? country?.currencies?.symbol : ""
      },
      {
        id: 9,
        left: SinglePageText.population[lang],
        right: country?.population ? parseInt(country?.population, 10).toLocaleString() : ""
      },
      {
        id: 10,
        left: SinglePageText.area[lang],
        right: country?.area ? parseInt(country?.area, 10).toLocaleString() : ""
      },
      {
        id: 11,
        left: SinglePageText.latitude[lang],
        right: country?.latlng ? country?.latlng[0] : ""
      },
      {
        id: 12,
        left: SinglePageText.longitude[lang],
        right: country?.latlng ? country?.latlng[1] : ""
      },
      {
        id: 13,
        left: SinglePageText.independent[lang],
        right: country?.independent ? country?.independent : ""
      },
      {
        id: 14,
        left: SinglePageText.car[lang],
        right: country?.car ? country?.car : country?.car
      },
      {
        id: 15,
        left: SinglePageText.startOfTheWeek[lang],
        right: country?.startOfWeek ? country?.startOfWeek : ""
      },
      {
        id: 16,
        left: `UTC(${SinglePageText.timezone[lang]})`,
        right: country?.timezones ? convertedTimes[0] : ""
      },
      {
        id: 17,
        left: SinglePageText.UNMember[lang],
        right: country?.unMember ? country?.unMember : ""
      },
    ]
  }

	return {list}
}