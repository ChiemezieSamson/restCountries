import Population from "./../asset/images/population.jpg";
import Currency from "./../asset/images/currency.jpg";

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
