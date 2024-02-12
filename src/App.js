import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Index from "./Components/Index/Index";
import Countries from "./Components/Countries/Countries";
import CountiersIndex from "./Components/Countries/CountiersIndex/CountiersIndex";
import SIngleCountry from "./Components/Countries/SIngleCountry/SIngleCountry";
import Regions from "./Components/Regions/Regions";
import RegionIndex from "./Components/Regions/RegionIndex/RegionIndex";
import SingleRegion from "./Components/Regions/SingleRegion/SingleRegion";
import Population from "./Components/population/population";
import PopulationIndex from "./Components/population/populationIndex/populationIndex";

const App = createBrowserRouter([
	{
		path: "/",
		element: (
			<Home
				login={"https://restcountries.com/v3.1/all"}
				login2={
					"https://raw.githubusercontent.com/ChiemezieSamson/world-countries-api/master/translatedData..json"
				}
			/>
		),
		errorElement: <div>Not Found</div>,
		children: [
			{
				index: true,
				element: <Index />,
				errorElement: <div>Not Found</div>,
			},
			{
				path: "countries",
				element: <Countries />,
				errorElement: <div>Not Found</div>,
				children: [
					{
						index: true,
						element: <CountiersIndex />,
						errorElement: <div>Not Found</div>,
					},
					{
						path: "/countries/:countryId",
						element: <SIngleCountry />,
						errorElement: <div>Not Found</div>,
					},
				],
			},
			{
				path: "regions",
				element: <Regions />,
				errorElement: <div>Not Found</div>,
				children: [
					{
						index: true,
						element: <RegionIndex />,
						errorElement: <div>Not Found</div>,
					},
					{
						path: "/regions/:regionsId",
						element: <SingleRegion />,
						errorElement: <div>Not Found</div>,
					},
				],
			},
			{
				path: "population",
				element: <Population />,
				errorElement: <div>Not Found</div>,
				children: [
					{
						index: true,
						element: <PopulationIndex />,
						errorElement: <div>Not Found</div>,
					},
				],
			},
		],
	},
]);
export default App;
