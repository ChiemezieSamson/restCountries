import { useEffect, useState } from "react";
import TanslatedcountriesData from "./../../../translatedData..json";

export const useDetailedCountriesName = (data, lang, language) => {
	const [countries, setCountries] = useState([]);
	// For each country get its Korean "ko" or Chinese name accordly
	useEffect(() => {
		if (data) {
			// make sure the array of countries is present
			let translateID = [];

			const allCountries = data?.map((country) => {
				let newList;

				if (lang === "ko") {
					translateID = [];
					// if language choice is korean

					if (country?.translations?.[language]) {
						// making sure that we are not getting the undefined object
						translateID.push({ id: country?.name?.common });
						translateID.map((KoreanTransCountry) => {
							const Translation = TanslatedcountriesData.find(
								(country) => country.country === KoreanTransCountry?.id
							);

								if (Translation) {
									newList = {
										id: country?.name?.common?.toLowerCase().trim(),
										name: country?.translations?.[language]?.common?.toLowerCase().trim(),
										flag: country?.flags,
										capital: Translation?.capital?.korean,
										continents: Translation?.continent?.korean,
										currencies: {name: Translation?.currency?.korean, symbol: country?.currencies ? country?.currencies[Object?.keys(country?.currencies)[0]].symbol : ""},
										population: country?.population,
										language: Translation?.language?.korean,
									};
								}

							return newList;
						});
					}
				}

				if (lang === "zh") {
					translateID = [];
					// if language choice is chinese
					translateID.push({ id: country?.name?.common });
					translateID.map((ChineseTranscountry) => {
						const Translation = TanslatedcountriesData.find(
							(country) => country?.country === ChineseTranscountry?.id
							);
							
						if (Translation) {
							newList = {
								id: country?.name?.common?.toLowerCase().trim(),
								name: country?.translations?.[language] ? country?.translations?.[language]?.common?.toLowerCase().trim() :
								 country?.name?.nativeName?.zho?.common?.toLowerCase().trim(),
								flag: country?.flags,
								capital: Translation?.capital?.chinese,
								continents: Translation?.continent?.chinese,
								currencies:{name: Translation?.currency?.chinese, symbol: country?.currencies ? country?.currencies[Object?.keys(country?.currencies)[0]].symbol : ""},
								population: country?.population,
								language: Translation?.language?.chinese,
							};

						} 
							return newList;
					});
				}

				// if the user language selection is English run this
				if (lang === "en") {
					newList = {
						id: country?.name?.common?.toLowerCase().trim(),
						name: country?.name?.common?.toLowerCase().trim(),
						capital: country?.capital ? country?.capital[0]?.toLowerCase().trim() : "",
						continents: country?.continents[0]?.toLowerCase().trim(),
						currencies: country?.currencies ? country?.currencies[Object?.keys(country?.currencies)[0]]	: "",
						population: country?.population,
						language: country?.languages ? country?.languages[Object?.keys(country?.languages)[0]]?.toLowerCase().trim() : "",
						flag: country.flags,
					};
				}

				return newList;
			});

			setCountries(() => allCountries);
		}
	}, [data, language, lang]);

	return { countries };
};