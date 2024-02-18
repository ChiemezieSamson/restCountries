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


export const useFetchCountryWithExchangeRate = (countryCurrencyCode, countryId, loginUrl, loginKey, code) => {
  const { exchangerate, exchangerateLoading, exchangerateError } = useApiFetchingExchangeRate(loginUrl, loginKey, code)
  const [countriesRate, setCountriesRate] = useState([])

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


      setCountriesRate(() => newCountriesList)
    }

  }, [exchangerate, countryCurrencyCode, countryId])

  return { countriesRate, exchangerate, exchangerateLoading, exchangerateError }
}