import { useEffect, useState } from "react";

export const useApiFetchingPairConversion = (loginKey, APiPair, firstPair, secondPair, amount) => {
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
				const response = await fetch(`${APiPair}/${firstPair}/${secondPair}/${amount}`, {
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
	}, [APiPair, loginKey, firstPair, secondPair, amount]);

	return { pairConvertion, pairConvertionLoading, pairConvertionError };
};