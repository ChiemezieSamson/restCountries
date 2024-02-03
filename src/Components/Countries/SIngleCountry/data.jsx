import { useEffect, useState } from "react";
import TanslatedcountryData from "../../../translatedData..json";

export const useFetchSingleCountry = (countryId, data, lang) => {
	const [country, setCountry] = useState({});

	useEffect(() => {
		if (data) {
			const apiCountry = data.find((foundCountry) => foundCountry?.name?.common?.toLowerCase().trim() === countryId);
			const TranslateCountry = TanslatedcountryData.find((foundCountry) => foundCountry?.country.toLowerCase().trim() === countryId);
			let newList;

			if (lang === "ko") { // if language choice is korean

				if(TranslateCountry) {
				
					newList = {
						id: apiCountry?.name?.common?.toLowerCase().trim(),
						name: apiCountry?.translations?.kor,
						capital: TranslateCountry?.capital?.korean,
						continents: TranslateCountry?.continent?.korean,
						currencies: {name: TranslateCountry?.currency?.korean, symbol: apiCountry?.currencies ? apiCountry?.currencies[Object?.keys(apiCountry?.currencies)[0]].symbol : ""},
						population: apiCountry?.population,
						language: TranslateCountry?.language?.korean,
						flag: apiCountry?.flags,
						car: TranslateCountry?.car?.korean,
						coatOfArms: apiCountry?.coatOfArms,
						independent: apiCountry?.independent === true ? "참" : "거짓",
						area: apiCountry?.area,
						latlng: apiCountry?.latlng,
						maps: apiCountry?.maps,
						region: TranslateCountry?.region?.korean,
						subregion: TranslateCountry?.subregion?.korean,
						startOfWeek: TranslateCountry?.startOfWeek?.korean,
						timezones: apiCountry?.timezones,
						unMember: apiCountry?.unMember === true ? "참" : "거짓"
					};
				}
			}

			if (lang === "zh") {// if language choice is chinese
				if(TranslateCountry) { 
					newList = {
						id: apiCountry?.name?.common?.toLowerCase().trim(),
						name: apiCountry?.translations?.zho ? apiCountry?.translations?.zho : apiCountry?.name?.nativeName?.zho,
						capital: TranslateCountry?.capital?.chinese,
						continents: TranslateCountry?.continent?.chinese,
						currencies: {name: TranslateCountry?.currency?.chinese, symbol: apiCountry?.currencies ? apiCountry?.currencies[Object?.keys(apiCountry?.currencies)[0]].symbol : ""},
						population: apiCountry?.population,
						language: TranslateCountry?.language?.chinese,
						flag: apiCountry?.flags,
						car: TranslateCountry?.car?.chinese,
						coatOfArms: apiCountry?.coatOfArms,
						independent: apiCountry?.independent === true ? "真" : "假",
						area: apiCountry?.area,
						latlng: apiCountry?.latlng,
						maps: apiCountry?.maps,
						region: TranslateCountry?.region?.chinese,
						subregion: TranslateCountry?.subregion?.chinese,
						startOfWeek: TranslateCountry?.startOfWeek?.chinese,
						timezones: apiCountry?.timezones,
						unMember: apiCountry?.unMember === true ? "真" : "假"
					};
				}
			} 
			
			if (lang === "en") { // if the user language selection is English run this

				newList = {
					id: apiCountry?.name?.common?.toLowerCase().trim(),
					name: {common: apiCountry?.name?.common?.toLowerCase().trim(), official: apiCountry?.name?.official?.toLowerCase().trim()},
					capital: apiCountry?.capital ? apiCountry?.capital[0] : "",
					continents: apiCountry?.continents[0],
					currencies: apiCountry?.currencies ? apiCountry?.currencies[Object?.keys(apiCountry?.currencies)[0]] : "",
					population: apiCountry?.population,
					language: apiCountry?.languages ? apiCountry?.languages[Object?.keys(apiCountry?.languages)[0]] : "",
					flag: apiCountry?.flags,
					car: apiCountry?.car?.side,
					coatOfArms: apiCountry?.coatOfArms,
					independent: apiCountry?.independent === true ? "true" : "false",
					area: apiCountry?.area,
					latlng: apiCountry?.latlng,
					maps: apiCountry?.maps,
					region: apiCountry?.region,
					subregion: apiCountry?.subregion,
					startOfWeek: apiCountry?.startOfWeek,
					timezones: apiCountry?.timezones,
					unMember: apiCountry?.unMember === true ? "true" : "false"
				};
			}
			
			setCountry(() => newList);
		}
	}, [data, countryId, lang]);

	return { country };
};


export const SinglePageText = {
	coatOfArms: {
		en: "coat of arms",
		zh: "纹章",
		ko: "국장",
	},
	capital: {
		en: "capital",
		ko: "수도",
		zh: "首都",
	},
	language: {
		en: "language",
		ko: "언어",
		zh: "语言",
	},
	continent: {
		en: "continent",
		ko: "대륙",
		zh: "洲",
	},
	currency: {
		en: "currency",
		ko: "통화",
		zh: "货币",
	},
	population: {
		en: "population",
		ko: "인구",
		zh: "人口",
	},
	name: {
		en: "name",
		ko: "이름",
		zh: "名称",
	},
	commonName: {
		en: "common name",
		ko: "통용 이름",
		zh: "通用名称",
	},
	officialName: {
		en: "official name",
		ko: "공식 이름",
		zh: "官方名称",
	},
	region: {
		en: "region",
		ko: "지역",
		zh: "地区",
	},
	subregion: {
		en: "subregion",
		ko: "소지역",
		zh: "次区域",
	},
	startOfTheWeek: {
		en: "start of the week",
		ko: "주의 시작",
		zh: "星期开始",
	},
	timezone: {
		en: "timezone",
		ko: "시간대",
		zh: "时区",
	},
	map: {
		en: "map",
		ko: "지도",
		zh: "地图",
	},
	independent: {
		en: "independent",
		ko: "독립적인",
		zh: "独立的",
	},
	car: {
		en: "car",
		ko: "자동차",
		zh: "汽车",
	},
	area: {
		en: "area",
		ko: "면적",
		zh: "面积",
	},
	symbol: {
		en: "symbol",
		ko: "상징",
		zh: "象征",
	},
	UNMember: {
		en: "UN member",
		ko: "UN 회원",
		zh: "联合国会员",
	},
}
