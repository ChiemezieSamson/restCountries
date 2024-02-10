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