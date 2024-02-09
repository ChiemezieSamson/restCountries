import { useEffect, useState } from "react";
import Africa from "./../asset/images/africa-icon.png";
import Asia from "./../asset/images/asia-icon.png";
import CentralAmerica from "./../asset/images/central-america-icon.png";
import Europe from "./../asset/images/europe-icon.png";
import MiddleEast from "./../asset/images/middle-east-icon.png";
import NorthAmerica from "./../asset/images/north-america-icon.png";
import Oceania from "./../asset/images/oceania-icon.png";
import SouthAmerica from "./../asset/images/south-america-icon.png";
import Caribbean from "./../asset/images/carribbean-icon.png";

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
			en: "Asia",
			ko: "아시아",
			zh: "亚洲",
		},
		url: "/regions/asia",
		image: Asia,
	},
	{
		id: 2,
		name: {
			en: "Central America",
			ko: "중앙 아메리카",
			zh: "中美洲",
		},
		url: "/regions/central america",
		image: CentralAmerica,
	},
	{
		id: 3,
		name: {
			en: "Europe",
			ko: "유럽",
			zh: "欧洲",
		},
		url: "/regions/europe",
		image: Europe,
	},
	{
		id: 4,
		name: {
			en: "Middle East",
			ko: "중동",
			zh: "中东 ",
		},
		url: "/regions/middle east",
		image: MiddleEast,
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
			en: "The Caribbean",
			ko: "카리브해",
			zh: "加勒比地区",
		},
		url: "/regions/caribbean",
		image: Caribbean,
	},
];