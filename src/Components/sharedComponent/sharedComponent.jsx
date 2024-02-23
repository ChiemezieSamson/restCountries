import { useEffect, useState } from "react";
import Africa from "./../asset/images/africa-icon.png";
import Antarctica from "./../asset/images/antarctica-icon.png";
import Asia from "./../asset/images/asia-icon.png";
import CentralAmerica from "./../asset/images/central-america-icon.png";
import Europe from "./../asset/images/europe-icon.png";
import NorthAmerica from "./../asset/images/north-america-icon.png";
import Oceania from "./../asset/images/oceania-icon.png";
import SouthAmerica from "./../asset/images/south-america-icon.png";
import Caribbean from "./../asset/images/carribbean-icon.png";
import { Link } from "react-router-dom";


export const useApiFetchingComponent = (login) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			if (!login) return;
			try {
				// Set loading to true when starting the fetch
				setLoading(true);

				// Fetch data from the API
				const response = await fetch(login);
				const result = await response.json();

				// Set the fetched data and loading to false
				setData(result);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
				setError(() => error);
				// Handle error, set loading to false
				setLoading(false);
			}
		};

		// Call the fetchData function
		fetchData();
	}, [login]);

	return { data, loading, error };
};

export const useApiFetchingTranslatedData = (login2) => {
	const [TranslatedData, setTranslatedData] = useState(null);
	const [Tloading, setTLoading] = useState(true);
	const [Terror, setTError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			if (!login2) return;
			try {
				// Set loading to true when starting the fetch
				setTLoading(true);

				// Fetch data from the API
				const response = await fetch(login2);
				const result = await response.json();

				// Set the fetched data and loading to false
				setTranslatedData(result);
				setTLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
				setTError(() => error);
				// Handle error, set loading to false
				setTLoading(false);
			}
		};

		// Call the fetchData function
		fetchData();
	}, [login2]);

	return { TranslatedData, Tloading, Terror };
};


export const useApiFetchingExchangeRate = (loginUrl, loginKey, code) => {
	const [exchangerate, setExchangerate] = useState(null);
	const [exchangerateLoading, setExchangerateLoading] = useState(true);
	const [exchangerateError, setExchangerateError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			if (!loginUrl) return;
			try {
				// Set loading to true when starting the fetch
				setExchangerateLoading(true);

				// Fetch data from the API
				const response = await fetch(`${loginUrl}/${code}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${loginKey}`,
            'Content-Type': 'application/json',
          },
        });
				const result = await response.json();

				// Set the fetched data and loading to false
				setExchangerate(result);
				setExchangerateLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
				setExchangerateError(() => error);
				// Handle error, set loading to false
				setExchangerateLoading(false);
			}
		};

		// Call the fetchData function
		fetchData();
	}, [loginUrl, loginKey, code]);

	return { exchangerate, exchangerateLoading, exchangerateError };
};


export const worldRegionsData = [
	{
		id: 0,
		name: {
			en: "Africa",
			ko: "아프리카",
			zh: "非洲",
		},
		url: "/regions/africa",
		image: Africa,
	},
	{
		id: 1,
		name: {
			en: "Antarctic",
			ko: "남극",
			zh: "南极洲",
		},
		url: "/regions/antarctic",
		image: Antarctica,
	},
	{
		id: 2,
		name: {
			en: "Asia",
			ko: "아시아",
			zh: "亚洲",
		},
		url: "/regions/asia",
		image: Asia,
	},
	{
		id: 3,
		name: {
			en: "Central America",
			ko: "중앙 아메리카",
			zh: "中美洲",
		},
		url: "/regions/central america",
		image: CentralAmerica,
	},
	{
		id: 4,
		name: {
			en: "Europe",
			ko: "유럽",
			zh: "欧洲",
		},
		url: "/regions/europe",
		image: Europe,
	},
	{
		id: 5,
		name: {
			en: "North America",
			ko: "북아메리카",
			zh: "北美洲",
		},
		url: "/regions/north america",
		image: NorthAmerica,
	},
	{
		id: 6,
		name: {
			en: "Oceania",
			ko: "오세아니아",
			zh: "大洋洲",
		},
		url: "/regions/oceania",
		image: Oceania,
	},
	{
		id: 7,
		name: {
			en: "South America",
			ko: "남아메리카",
			zh: "南美洲",
		},
		url: "/regions/south america",
		image: SouthAmerica,
	},
	{
		id: 8,
		name: {
			en: "Caribbean",
			ko: "카리브해",
			zh: "加勒比地区",
		},
		url: "/regions/caribbean",
		image: Caribbean,
	},
];


export const total = {
	en: "Total Countries",
	zh: "总国家",
	ko: "총 국가",
};


export const RegionListComponent = ({region, lang}) => {
	return (
		<ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-20 items-center justify-center'>
		{region.map(region => {
			return (
				<li key={region.id} className='inline-block text-center mt-10 '>
					<Link to={region.url}>
						<figure className='inline-block'>
							<img src={region.image} alt={region.name[lang]} className='size-28 sm:max-h-36 sm:w-full aspect-video object-fill mx-auto'/>
							<figcaption className='inline-block mt-3 font-poppins font-semibold capitalize'>{region.name[lang]}</figcaption>
						</figure>
					</Link>
				</li>
			)
		})}
	</ul>
	)
}

export const useApiFetchingSupportCode = (login, apiToken) => {
	const [code, setCode] = useState(null);
	const [codeLoading, setCodeLoading] = useState(true);
	const [codeError, setCodeError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			if (!login) return;
			try {
				// Set loading to true when starting the fetch
				setCodeLoading(true);

				// Fetch data from the API
				const response = await fetch(login, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json',
          },
        });
				const result = await response.json();

				// Set the fetched data and loading to false
				setCode(result);
				setCodeLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
				setCodeError(() => error);
				// Handle error, set loading to false
				setCodeLoading(false);
			}
		};

		// Call the fetchData function
		fetchData();
	}, [login, apiToken]);

	return { code, codeLoading, codeError };
};


export const useFetchCountryAndCurrencyCode = (login, login2, loginKey, APiCode) => {
  const { data, loading, error } = useApiFetchingComponent(login)
  const { TranslatedData, Tloading, Terror } = useApiFetchingTranslatedData(login2)
  const {code, codeLoading, codeError} = useApiFetchingSupportCode(APiCode, loginKey)
  const [countryCurrencyCode, setCountryCurrencyCode] = useState([]) 

	const Error = error ? error : Terror ? Terror :  codeError ? codeError : ""
	const Loading = loading && Tloading && codeLoading

  useEffect(() => {
    if(data && TranslatedData && code?.result === "success") {
      let newList = []
  
      const countryCurrencyCodeResult = data?.map((country) => {

        const currencyCodes = Object.keys(country?.currencies ? country?.currencies : "");
        const findTranslatedCountries = TranslatedData?.find(TranslatedCountry => TranslatedCountry?.country === country?.name?.common)
        const findCurrencyCode = code?.supported_codes?.find(([code]) => currencyCodes.includes(code));
        
        newList = {
          id: country?.name?.common?.toLowerCase().trim(),
          name: {
            en: country?.name?.common?.toLowerCase().trim(),
            ko: country?.translations?.kor?.common?.toLowerCase().trim(),
            zh: country?.translations?.zho !== undefined ? country?.translations?.zho?.common?.toLowerCase().trim() : country?.name?.nativeName?.zho?.common?.toLowerCase().trim(),
          },
          currency_code: findCurrencyCode ? findCurrencyCode[0] : "",
          currency_name: {
            en:  country?.currencies ? country?.currencies[Object?.keys(country?.currencies)[0]].name : "",
            zh: findTranslatedCountries?.currency?.chinese,
            ko: findTranslatedCountries?.currency?.korean
          },
          currency_symbol: country?.currencies ? country?.currencies[Object?.keys(country?.currencies)[0]].symbol : "",
          flag: country?.flags,
        }                  
        
        return newList
      })
  
      setCountryCurrencyCode(() => countryCurrencyCodeResult)
    }
  }, [data, code, TranslatedData])

  return  { countryCurrencyCode, Error, Loading }
} 


export const useFiliterCountryWithNoCureencyName = (countries) => {
	const filiteredCountry = countries.filter(country => country?.currency_code !== "")

	return { filiteredCountry }
}


export const useFetchCountryWithExchangeRate = (countryCurrencyCode, countryId, loginUrl, loginKey, code, lang, firstCountryName) => {
  const { exchangerate, exchangerateLoading, exchangerateError } = useApiFetchingExchangeRate(loginUrl, loginKey, code)
  const [countriesRate, setCountriesRate] = useState([])
	const lastUpdatedateString  = exchangerate ? exchangerate?.time_last_update_utc : ""
	const nextUpdatedateString  = exchangerate ? exchangerate?.time_next_update_utc : ""
	const lastUpdate = new Date(lastUpdatedateString).toLocaleString(lang, {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const nextUpdate = new Date(nextUpdatedateString).toLocaleString(lang, {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

  useEffect(() => {
    let newList
    
    if(exchangerate?.result === "success" && countryCurrencyCode[0]?.id) {

      const newCountriesList = countryCurrencyCode?.map((country => {

				if (firstCountryName) {
					newList = {
            ...country,
            conversion_rates: exchangerate?.conversion_rates[country?.id === "sierra leone" ? "SLE" : country?.id === "croatia" ? "HRK" : country?.currency_code ? country?.currency_code : ""]
          }
				} else {

					if (country?.id !== countryId) {
						newList = {
							...country,
							conversion_rates: exchangerate?.conversion_rates[country?.id === "sierra leone" ? "SLE" : country?.id === "croatia" ? "HRK" : country?.currency_code ? country?.currency_code : ""]
						}
					}
				}

        return newList
      }))

      setCountriesRate(() => [...newCountriesList].sort((a, b) =>  a.name[lang].toLowerCase().localeCompare(b.name[lang], lang)))
    }

  }, [exchangerate, countryCurrencyCode, countryId, lang, firstCountryName])

  return { countriesRate, lastUpdate, nextUpdate, exchangerateLoading, exchangerateError }
}


export const useFetchCountriesUniqueArrayById = (countryCurrencyCode, countryId, loginUrl, loginKey, code, lang, firstCountryName) => {
	const { countriesRate, lastUpdate, nextUpdate, exchangerateLoading, exchangerateError } = useFetchCountryWithExchangeRate(countryCurrencyCode, countryId, loginUrl, loginKey, code, lang, firstCountryName)
	const { filiteredCountry } = useFiliterCountryWithNoCureencyName(countriesRate)
  const uniqueArrayById = filiteredCountry.filter((obj, index, self) =>
    index === self.findIndex((o) => o.id === obj.id)
  );

	return {countries: uniqueArrayById, lastUpdate, nextUpdate, exchangerateLoading, exchangerateError}
}


export const useFetchCountry = (countryId, countryCurrencyCode) => {
  const search = countryId ? countryId : "united states"
  const foundCountry = countryCurrencyCode.find(country => country.id === search)
  return { foundCountry }
}