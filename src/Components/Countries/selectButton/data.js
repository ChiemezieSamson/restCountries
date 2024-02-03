import { FaGripHorizontal, FaList, FaNewspaper } from "react-icons/fa";

export const selectionButton = [
	{
		id: 0,
		icon: <FaList className="inline-block text-3xl" />,
		title: {
			en: "List",
			zh: "列表 ",
			ko: "목록 ",
		},
		name: "list",
	},
	{
		id: 1,
		icon: <FaGripHorizontal className="inline-block text-3xl" />,
		title: {
			en: "Grid",
			zh: "网格",
			ko: "격자 ",
		},
		name: "grid",
	},
	{
		id: 2,
		icon: <FaNewspaper className="inline-block text-3xl" />,
		title: {
			en: "Detailed",
			zh: "详细 ",
			ko: "상세한 ",
		},
		name: "detailed",
	},
];
