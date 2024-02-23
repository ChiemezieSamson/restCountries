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
import Currency from "./Components/Currency/Currency";
import CurrencyInedx from "./Components/Currency/CurrencyInedx/CurrencyInedx";
import SupportedCodes from "./Components/Currency/SupportedCodes/SupportedCodes";
import PairConversion from "./Components/Currency/PairConversion/PairConversion";
import PairConversionIndex from "./Components/Currency/PairConversion/PairConversionIndex/PairConversionIndex";
import ExchangeRateIndex from "./Components/Currency/ExchangeRate/ExchangeRateIndex/ExchangeRateIndex";
import ExchangeRate from "./Components/Currency/ExchangeRate/ExchangeRate";
import ExchangeRateCountryCurrency from "./Components/Currency/ExchangeRate/ExchangeRateCountryCurrency/ExchangeRateCountryCurrency";
import NotFound from "./Components/NotFound/NotFound";

const apiUrl1 = process.env.REACT_APP_RESTCOUNTRIES_API_URL;
const apiUrl2 = process.env.REACT_APP_TRANSLATED_RESTCOUNTRIES_API_URL;
const exchangeRateApiKey = process.env.REACT_APP_EXCHANGERATE_API_KEY;
const exchangeRateApiUrl = process.env.REACT_APP_EXCHANGERATE_API_URL;
const exchangeRateApiCode = process.env.REACT_APP_EXCHANGERATE_API_CODE;
const exchangeRateApiPair = process.env.REACT_APP_EXCHANGERATE_PAIR;

const App = createBrowserRouter([
	{
		path: "/",
		element: <Home login={apiUrl1} login2={apiUrl2} />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Index />,
				errorElement: <NotFound />,
			},
			{
				path: "countries",
				element: <Countries />,
				errorElement: <NotFound />,
				children: [
					{
						index: true,
						element: <CountiersIndex />,
						errorElement: <NotFound />,
					},
					{
						path: "/countries/:countryId",
						element: <SIngleCountry />,
						errorElement: <NotFound />,
					},
				],
			},
			{
				path: "regions",
				element: <Regions />,
				errorElement: <NotFound />,
				children: [
					{
						index: true,
						element: <RegionIndex />,
						errorElement: <NotFound />,
					},
					{
						path: "/regions/:regionsId",
						element: <SingleRegion />,
						errorElement: <NotFound />,
					},
				],
			},
			{
				path: "population",
				element: <Population />,
				errorElement: <NotFound />,
				children: [
					{
						index: true,
						element: <PopulationIndex />,
						errorElement: <NotFound />,
					},
				],
			},
			{
				path: "currency",
				element: (
					<Currency
						loginUrl={exchangeRateApiUrl}
						loginKey={exchangeRateApiKey}
						APiCode={exchangeRateApiCode}
						APiPair={exchangeRateApiPair}
					/>
				),
				errorElement: <NotFound />,
				children: [
					{
						index: true,
						element: <CurrencyInedx />,
						errorElement: <NotFound />,
					},
					{
						path: "/currency/supported_code",
						element: <SupportedCodes />,
						errorElement: <NotFound />,
					},
					{
						path: "/currency/exchange_rate",
						element: <ExchangeRate />,
						errorElement: <NotFound />,
						children: [
							{
								index: true,
								element: <ExchangeRateIndex />,
								errorElement: <NotFound />,
							},
							{
								path: "/currency/exchange_rate/:countryId",
								element: <ExchangeRateCountryCurrency />,
								errorElement: <NotFound />,
							},
						],
					},
					{
						path: "/currency/pair_conversion",
						element: <PairConversion />,
						errorElement: <NotFound />,
						children: [
							{
								index: true,
								element: <PairConversionIndex />,
								errorElement: <NotFound />,
							},
						],
					},
				],
			},
		],
	},
]);
export default App;
