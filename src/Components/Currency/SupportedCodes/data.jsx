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