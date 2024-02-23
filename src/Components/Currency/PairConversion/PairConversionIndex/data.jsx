import { useEffect, useState } from "react";

export const useApiFetchingPairConversion = (loginKey, APiPair, firstPair, secondPair, debouncedSearchTerm) => {
	const [pairConvertion, setPairConvertion] = useState(null);
	const [pairConvertionLoading, setPairConvertionLoading] = useState(true);
	const [pairConvertionError, setPairConvertionError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			if (!APiPair) return;
			try {
				// Set loading to true when starting the fetch
				setPairConvertionLoading(true);

				// Fetch data from the API
				const response = await fetch(`${APiPair}/${firstPair}/${secondPair}/${debouncedSearchTerm}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${loginKey}`,
            'Content-Type': 'application/json',
          },
        });
				const result = await response.json();

				// Set the fetched data and loading to false
				setPairConvertion(result);
				setPairConvertionLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
				setPairConvertionError(() => error);
				// Handle error, set loading to false
				setPairConvertionLoading(false);
			}
		};

		// Call the fetchData function
		fetchData();
	}, [APiPair, loginKey, firstPair, secondPair, debouncedSearchTerm]);

	return { pairConvertion, pairConvertionLoading, pairConvertionError };
};


export const pairConversionData = {
	title: {
    en: "World Currency Pair Conversion",
    zh: "全球货币对转换",
    ko: "세계 통화 쌍 변환",
  },
  sub_title: {
    en: "Effortlessly Convert World Currencies with Accurate Exchange Rates",
    zh: "轻松精准地转换世界各国货币 ",
    ko: "노력없이 정확한 환율로 세계 통화 변환",
  },
	equals: {
		en: "equals",
		ko: "같음",
		zh: "等于"
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