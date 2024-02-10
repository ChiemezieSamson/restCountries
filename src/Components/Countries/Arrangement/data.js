import { FaRandom, FaSortAlphaDown, FaSortAlphaUpAlt } from "react-icons/fa";

export const arrangementIcons = [
	{
		id: 0,
		name: "random",
		title: {
			en: "Random",
			ko: "무작위 ",
			zh: "随机",
		},
		icon: <FaRandom className="inline-block" />,
	},
	{
		id: 1,
		name: "ascend",
		title: {
			en: "Ascend",
			ko: "오르다 ",
			zh: "上升",
		},
		icon: <FaSortAlphaDown className="inline-block" />,
	},
	{
		id: 2,
		name: "descend",
		title: {
			en: "Descend",
			ko: "내리다",
			zh: "下降",
		},
		icon: <FaSortAlphaUpAlt className="inline-block" />,
	},
];
