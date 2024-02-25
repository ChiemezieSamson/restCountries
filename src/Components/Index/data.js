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
		en: `Embark on an enriching journey to explore captivating details about countries worldwide. Our web application is your gateway to discovering a wealth of information, 
				from historical landmarks and cultural highlights to population statistics and real-time currency exchange rates. Immerse yourself in the diverse tapestry of the globe, as our platform effortlessly brings the world's wonders to your fingertips, providing a comprehensive and engaging experience.`,
		zh: "踏上探索世界各国迷人细节的旅程。从历史地标到人口统计和实时汇率，我们的网络应用为您提供了一个探索世界的通道，将丰富的信息展现在您的指尖。",
		ko: "세계 각국의 매혹적인 세부사항을 탐험하는 여정에 참여하세요. 역사적인 명소부터 인구 통계 및 환율까지, 저희 웹 애플리케이션은 세계를 당신의 손끝에 가져옵니다.",
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
			en: "The regions in the world",
			zh: "世界的个地区",
			ko: "세계의 개 지역",
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
