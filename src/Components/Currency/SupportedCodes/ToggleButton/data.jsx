import { FaSortAlphaDown, FaSortAlphaUpAlt } from "react-icons/fa";

export const arrangementIconsToggle = [
  {
		name: "ascend",
		title: {
      en: "Ascend",
			ko: "오르다 ",
			zh: "上升",
		},
		icon: <FaSortAlphaDown  className="inline-block" />,
	},
	{
		name: "descend",
		title: {
			en: "Descend",
			ko: "내리다",
			zh: "下降",
		},
		icon: <FaSortAlphaUpAlt className="inline-block" />,
	},
]

export const ascendingArrangement = (countryCurrencyCode, lang) => { 
	const ascendingByCountry = [...countryCurrencyCode].sort((a, b) =>  a.name[lang].toLowerCase().localeCompare(b.name[lang], lang))
	return { ascendingByCountry }
}

export const descendingArrangement = (countryCurrencyCode, lang) => { 
	const descendingByCountry = [...countryCurrencyCode].sort((a, b) =>  b.name[lang].toLowerCase().localeCompare(a.name[lang], lang))
	return { descendingByCountry }
}

