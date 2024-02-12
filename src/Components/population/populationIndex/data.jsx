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


export const Heading = {
  title: {
    en: "World Population by Country",
    zh: "按国家划分的世界人口",
    ko: "세계 국가별 인구",
  },
  sub_title: {
    en: "Unveiling the World's Diversity: Country Names, Populations, and Percentages",
    zh: "揭示世界多样性：国家名称，人口和百分比 ",
    ko: "세계 다양성의 발표: 국가 이름, 인구 및 백분율",
  },
}