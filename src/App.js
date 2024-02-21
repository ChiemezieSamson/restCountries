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
import PairConversionCurrency from "./Components/Currency/PairConversion/PairConversionCurrency/PairConversionCurrency";
import ExchangeRateIndex from "./Components/Currency/ExchangeRate/ExchangeRateIndex/ExchangeRateIndex";
import ExchangeRate from "./Components/Currency/ExchangeRate/ExchangeRate";
import ExchangeRateCountryCurrency from "./Components/Currency/ExchangeRate/ExchangeRateCountryCurrency/ExchangeRateCountryCurrency";

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
				errorElement: <div>Not Found</div>,
				children: [
					{
						index: true,
						element: <CurrencyInedx />,
						errorElement: <div>Not Found</div>,
					},
					{
						path: "/currency/supported_code",
						element: <SupportedCodes />,
						errorElement: <div>Not Found</div>,
					},
					{
						path: "/currency/exchange_rate",
						element: <ExchangeRate />,
						errorElement: <div>Not Found</div>,
						children: [
							{
								index: true,
								element: <ExchangeRateIndex />,
								errorElement: <div>Not Found</div>,
							},
							{
								path: "/currency/exchange_rate/:countryId",
								element: <ExchangeRateCountryCurrency />,
								errorElement: <div>Not Found</div>,
							},
						],
					},
					{
						path: "/currency/pair_conversion",
						element: <PairConversion />,
						errorElement: <div>Not Found</div>,
						children: [
							{
								index: true,
								element: <PairConversionIndex />,
								errorElement: <div>Not Found</div>,
							},
						],
					},
				],
			},
		],
	},
]);
export default App;
