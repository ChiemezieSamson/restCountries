import { useEffect, useState } from "react";

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

export const total = {
	en: "Total Countries",
	zh: "总国家",
	ko: "총 국가",
};
