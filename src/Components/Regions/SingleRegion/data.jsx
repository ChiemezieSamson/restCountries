import { useEffect, useState } from "react";
import { worldRegionsData } from "../../sharedComponent/sharedComponent";

export const useFetchCountriesByRegion = (regionsId, data, lang) => {// fetching countries by rehion provided in the url
  const [countries, setCountries] = useState([]);
	
	useEffect(() => {

		if (data) {
			let newlist;
			
			const CountriesInRegion = data?.filter(
				(country) =>
					country?.region?.toLowerCase().trim() === regionsId ||
					country?.subregion?.toLowerCase().trim() === regionsId
			);

			if (CountriesInRegion[0]) {
				const allCountries = CountriesInRegion.map(country => {

					newlist = {
						id: country?.name?.common?.toLowerCase().trim(),
						name: {
							en: country?.name?.common?.toLowerCase().trim(),
							ko: country?.translations?.kor?.common?.toLowerCase().trim(),
							zh: country?.translations?.zho !== undefined ? country?.translations?.zho?.common?.toLowerCase().trim() : country?.name?.nativeName?.zho?.common?.toLowerCase().trim(),
						},
						flag: country?.flags,
					}

					return newlist
				})

				setCountries(() => [...allCountries].sort((a, b) =>  a.name[lang].toLowerCase().localeCompare(b.name[lang], lang)));
			}
		}
	}, [regionsId, data, lang])

	return { countries };
};

 // get the the name of the present region and remove it from the rest of the regions
export const regionByLanguage = (regionsId, lang) => {
	const findregion = worldRegionsData.find(region => region?.name?.en?.toLowerCase().trim() === regionsId)
	const OtherRegion = worldRegionsData.filter(region => region?.name?.en?.toLowerCase().trim() !== regionsId)

	return {RegionName: findregion.name[lang], OtherRegion}
} 


export const singleRegionData = {
	title: {
		en: "Countries in the",
		zh: "国家",
		ko: "의 국가들"
	},
	others: {
		en: "Other Regions",
		zh: "其他地区",
		ko: "다른 지역"
	}
}