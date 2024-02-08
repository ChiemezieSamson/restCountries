import Population from "./../asset/images/population.jpg";
import Currency from "./../asset/images/currency.jpg";
import Africa from "./../asset/images/africa-icon.png";
import Asia from "./../asset/images/asia-icon.png";
import CentralAmerica from "./../asset/images/central-america-icon.png";
import Europe from "./../asset/images/europe-icon.png";
import MiddleEast from "./../asset/images/middle-east-icon.png";
import NorthAmerica from "./../asset/images/north-america-icon.png";
import Oceania from "./../asset/images/oceania-icon.png";
import SouthAmerica from "./../asset/images/south-america-icon.png";
import Caribbean from "./../asset/images/carribbean-icon.png";

export const Indexdata = {
	title: {
		en: "World Countries",
		zh: "全球国家",
		ko: "세계 국가",
	},
	sub_title: {
		en: "Discover the World's Wonders",
		zh: "发现世界的奇迹",
		ko: "세계의 경이로움을 발견하다",
	},
	text: {
		en: "Embark on a journey to explore fascinating details about countries around the globe. From historical landmarks to cultural richness, our web app brings the world to your fingertips.",
		zh: "踏上一场探索之旅，发现全球各国的引人入胜的细节。从历史地标到文化丰富，我们的网络应用将世界带到您的指尖。",
		ko: "세계 각지의 국가에 관한 매혹적인 세부 사항을 탐험하는 여행에 참여하세요. 역사적인 명소부터 문화적 풍부함까지, 우리의 웹 앱은 세계를 당신의 손끝으로 가져옵니다.",
	},
	button_text: {
		en: "Explore Now",
		zh: "立即探索",
		ko: "지금 탐험하기",
	},
	currencyPopulation: {
		title: {
			en: "Countries Curreny And Population",
			zh: "国家货币和人口",
			ko: "국가 통화 및 인구",
		},
		sub_title: {
			en: "Currency conversion rates and population chart for 161 currencies",
			zh: "161种货币的汇率和人口图表",
			ko: "161개 통화의 환율 및 인구 통계 차트",
		},
	},
	worldRegions: {
		title: {
			en: "World Regions",
			zh: "世界地区",
			ko: "세계 지역",
		},
		sub_title: {
			en: "The 9 regions in the world",
			zh: "世界的9个地区",
			ko: "세계의 9개 지역",
		},
	},
};

export const populationCurrencyImage = [
	{
		id: 0,
		name: {
			en: "population",
			ko: "인구",
			zh: "人口",
		},
		image: Population,
		url: "/population",
	},
	{
		id: 1,
		name: {
			en: "currency",
			ko: "통화",
			zh: "货币",
		},
		image: Currency,
		url: "/currency",
	},
];

export const worldRegionsData = [
	{
		id: 0,
		name: {
			en: "Africa",
			ko: "아프리카",
			zh: "非洲",
		},
		url: "/region/africa",
		image: Africa,
	},
	{
		id: 1,
		name: {
			en: "Asia",
			ko: "아시아",
			zh: "亚洲",
		},
		url: "/region/asia",
		image: Asia,
	},
	{
		id: 2,
		name: {
			en: "Central America",
			ko: "중앙 아메리카",
			zh: "中美洲",
		},
		url: "/region/central america",
		image: CentralAmerica,
	},
	{
		id: 3,
		name: {
			en: "Europe",
			ko: "유럽",
			zh: "欧洲",
		},
		url: "/region/europe",
		image: Europe,
	},
	{
		id: 4,
		name: {
			en: "Middle East",
			ko: "중동",
			zh: "中东 ",
		},
		url: "/region/middle east",
		image: MiddleEast,
	},
	{
		id: 5,
		name: {
			en: "North America",
			ko: "북아메리카",
			zh: "北美洲",
		},
		url: "/region/north america",
		image: NorthAmerica,
	},
	{
		id: 6,
		name: {
			en: "Oceania",
			ko: "오세아니아",
			zh: "大洋洲",
		},
		url: "/region/oceania",
		image: Oceania,
	},
	{
		id: 7,
		name: {
			en: "South America",
			ko: "남아메리카",
			zh: "南美洲",
		},
		url: "/region/south america",
		image: SouthAmerica,
	},
	{
		id: 8,
		name: {
			en: "The Caribbean",
			ko: "카리브해",
			zh: "加勒比地区",
		},
		url: "/region/caribbean",
		image: Caribbean,
	},
];
