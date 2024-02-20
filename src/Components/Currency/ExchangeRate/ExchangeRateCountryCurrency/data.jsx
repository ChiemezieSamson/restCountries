import { useEffect, useState } from "react";

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


export const useFetchCountryWithExchangeRate = (countryCurrencyCode, countryId, loginUrl, loginKey, code, lang) => {
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
        if (country?.id !== countryId) {
          newList = {
            ...country,
            conversion_rates: exchangerate?.conversion_rates[country?.id === "sierra leone" ? "SLE" : country?.id === "croatia" ? "HRK" : country?.currency_code ? country?.currency_code : ""]
          }
        }

        return newList
      }))

      setCountriesRate(() => [...newCountriesList].sort((a, b) =>  a.name[lang].toLowerCase().localeCompare(b.name[lang], lang)))
    }

  }, [exchangerate, countryCurrencyCode, countryId, lang])

  return { countriesRate, lastUpdate, nextUpdate, exchangerateLoading, exchangerateError }
}

export const NameTags = {
	currency_code: {
    en: "Currency Code",
    ko: "통화 코드",
    zh: "货币代码"
  },
  currency_name: {
    en: "Currency Name",
    ko: "통화 이름",
    zh: "货币名称"
  },
  currency_symbol: {
    en: "Currency Symbol",
    ko: "통화 심볼",
    zh: "货币符号"
  },
	last_update: {
		en: "Last Update",
    ko: "최종 업데이트",
    zh: "上次更新"
	}, 
	next_update: {
		en: "Next Update",
    ko: "다음 업데이트",
    zh: "下次更新"
	}
}