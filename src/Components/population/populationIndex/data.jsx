import { useEffect, useState } from "react";

export const useFetchNameAndPopulation = (data) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if(data) {
      const totalPopulation = data.reduce((acc, country) => acc + country?.population, 0);
      let newlist;
      const allCountries = data?.map(country => {

        newlist = {
          id: country?.name?.common?.toLowerCase().trim(),
          name: {
            en: country?.name?.common?.toLowerCase().trim(),
            ko: country?.translations?.kor?.common?.toLowerCase().trim(),
            zh: country?.translations?.zho !== undefined ? country?.translations?.zho?.common?.toLowerCase().trim() : country?.name?.nativeName?.zho?.common?.toLowerCase().trim(),
          },
          population: country?.population,
          percentage: ((country?.population / totalPopulation) * 100).toFixed(2),
        }

        return newlist
      })

      setCountries(() => allCountries)
    }
  }, [data])

  return { countries }
}