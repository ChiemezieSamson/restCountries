import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Index from "./Components/Index/Index";
import Countries from "./Components/Countries/Countries";
import CountiersIndex from "./Components/Countries/CountiersIndex/CountiersIndex";
import SIngleCountry from "./Components/Countries/SIngleCountry/SIngleCountry";

const App = createBrowserRouter([
	{
		path: "/",
		element: <Home login={"https://restcountries.com/v3.1/all"} />,
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
		],
	},
]);
export default App;
