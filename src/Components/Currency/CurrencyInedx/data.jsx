import { BsCurrencyExchange } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";
import ExchangeRate from "./../../asset/images/exchange_rate.jpg"
import Pair from "./../../asset/images/pair.jpg"



export const Heading = {
  title: {
    en: "Global Exchange Rates & Pair Conversions",
    zh: "全球汇率和货币对转换",
    ko: "글로벌 환율 및 통화 쌍 변환",
  },
  sub_title: {
    en: "Explore Live Exchange Rates and Currency Pair Conversions Worldwide",
    zh: "探索全球实时汇率和货币对转换",
    ko: "실시간 환율 및 통화 쌍 변환 전세계 탐험",
  },
  hero_info: {
    head: {
      en: "The Accurate & Reliable Exchange Rate.",
      ko: "정확하고 신뢰할 수 있는 환율.",
      zh: "准确可靠的汇率。",
    },
    list: [
      {
        id: 0,
        text: {
          en: "Currency conversion rates for 161 currencies.",
          ko: "161개 국가의 통화 환산율.",
          zh: "161种货币的兑换率。",
        },
        icon: <GiEarthAmerica className="inline-block text-sky-600"/>
      },
      {
        id: 1,
        text: {
          en: "Navigate and perform currency conversions effortlessly.",
          ko: "손쉽게 탐험하고 화폐 변환을 수행하세요.",
          zh: "轻松导航并进行货币转换。",
        },
        icon: <BsCurrencyExchange className="inline-block text-amber-600"/>
      },
    ],
    supportedCode: {
      en: "Explore our extensive list of 161 supported currency codes.",
      ko: "161가지의 지원되는 통화 코드 목록을 탐험해보세요.",
      zh: "探索我们支持的161种货币代码的广泛列表。"        
    }
  },
  ExchangeRatePairConversion: {
		title: {
			en: "Curreny exchange rate And Pair Conversion",
			zh: "货币汇率和货币对转换",
			ko: "통화 환율 및 페어 변환",
		},
		sub_title: {
			en: "Currency exchange rates and pair conversion between two specific currencies",
			zh: "两个特定货币之间的货币汇率和货币对转换",
			ko: "두 특정 통화 간의 환율 및 페어 변환",
		},
	},
}


export const ExchangeRatePairConversionCurrencyImage = [
	{
		id: 0,
		name: {
			en: "exchange rate",
			ko: "환율",
			zh: "汇率",
		},
		image: ExchangeRate,
		url: "/currency/exchange_rate",
	},
	{
		id: 1,
		name: {
			en: "pair conversion",
			ko: "페어 변환",
			zh: "货币对转换",
		},
		image: Pair,
		url: "/currency/pair_conversion",
	},
];
