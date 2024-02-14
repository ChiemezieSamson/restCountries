import { useEffect, useState } from "react";

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


export const useFetchCountryAndCurrencyCode = (data, TranslatedData, code) => {
  const [countryCurrencyCode, setCountryCurrencyCode] = useState([])

  useEffect(() => {
    if(data && code?.result === "success" && TranslatedData) {
      let newList
  
      const countryCurrencyCodeResult = code?.supported_codes?.map((CurrencyCode) => {
      
        const findCountry = data?.find(country =>  country?.currencies ? country?.currencies[CurrencyCode[0]] : "")

        const findTranslatedCountries = TranslatedData?.find(TranslatedCountry => TranslatedCountry?.country === findCountry?.name?.common)
      
        newList = {
          id: findCountry?.name?.common?.toLowerCase().trim(),
          name: {
            en: findCountry?.name?.common?.toLowerCase().trim(),
            ko: findCountry?.translations?.kor?.common?.toLowerCase().trim(),
            zh: findCountry?.translations?.zho !== undefined ? findCountry?.translations?.zho?.common?.toLowerCase().trim() : findCountry?.name?.nativeName?.zho?.common?.toLowerCase().trim(),
          },
          currency_code: CurrencyCode[0],
          currency_name: {
            en: {
              countryApi: findCountry?.currencies ? findCountry?.currencies[Object?.keys(findCountry?.currencies)[0]].name : "",
              codeApi: CurrencyCode[1]
            },
            zh: findTranslatedCountries?.currency?.chinese,
            ko: findTranslatedCountries?.currency?.korean
          },
          currency_symbol: findCountry?.currencies ? findCountry?.currencies[Object?.keys(findCountry?.currencies)[0]].symbol : ""
        }
  
        return newList
      })
  
      setCountryCurrencyCode(() => countryCurrencyCodeResult)
    }
  }, [data, code, TranslatedData])

  return  { countryCurrencyCode }
} 