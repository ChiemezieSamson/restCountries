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


export const Heading = {
  title: {
    en: "Supported Currencies",
    zh: "支持的货币",
    ko: "지원되는 통화",
  },
  sub_title: {
    en: "List of supported currency codes and countries",
    zh: "支持的货币代码和国家列表",
    ko: "지원되는 통화 코드 및 국가 목록",
  },
  text: {
    en: "There is only 1 widely known currency we don't offer exchange rate data for due to sanctions & lack of any international trade.",
    ko: "국제 제재와 국제 무역이 전혀 이루어지지 않아 환율 데이터를 제공하지 않는 유명한 통화가 1가지만 있습니다.",
    zh: "由于制裁和缺乏国际贸易，我们仅不提供某一广泛认知的货币的汇率数据。"
  },
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
  country: {
    en: "Country",
    ko: "국가",
    zh: "国家"
  },
  north_korea: {
    name: {
      en: 'north korea', 
      ko: '조선', 
      zh: '朝鲜'
    },
    currency_name: {
      en: 'North Korean won', 
      zh: '朝鲜元', 
      ko: '북한 원'
    },
    currency_symbol: "₩",
  },
  unsupported_currencies: {
    en: "Unsupported Currencies",
    ko: "지원되지 않는 통화",
    zh: "不支持的货币"
  }
}


export const useFetchCountryAndCurrencyCode = (data, TranslatedData, code) => {
  const [countryCurrencyCode, setCountryCurrencyCode] = useState([])

  useEffect(() => {
    if(data && TranslatedData && code?.result === "success") {
      let newList = []
  
      const countryCurrencyCodeResult = data?.map((country) => {
        // const leveOut = ["north korea", "antarctica", "bouvet island", 'heard island and mcdonald islands']


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

  return  { countryCurrencyCode }
} 