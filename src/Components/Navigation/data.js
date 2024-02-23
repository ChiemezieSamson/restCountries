import { FaEllipsisH, FaEllipsisV } from "react-icons/fa";

export const navLink = [
	{
		id: 0,
		name: {
			en: "Home",
			zh: "主页",
			ko: "홈",
		},
		url: "/",
	},
	{
		id: 1,
		name: {
			en: "Countries",
			zh: "国家",
			ko: "국가",
		},
		url: "/countries",
	},
	{
		id: 2,
		name: {
			en: "Population",
			zh: "人口",
			ko: "인구",
		},
		url: "/population",
	},
	{
		id: 3,
		name: {
			en: "Currencies",
			zh: "货币",
			ko: "통화",
		},
		url: "/currency",
	},
	{
		id: 4,
		name: {
			en: "Regions",
			zh: "地区",
			ko: "지역",
		},
		url: "/regions",
	},
];

export const NavBartoggleIcon = ({ navBar, toggleNavBar }) => {
	return (
		<span
			className="mx-4 p-2 grid items-center justify-center dark:dark_bg rounded-lg bgLight dark:text-white md:hidden cursor-pointer"
			onClick={toggleNavBar}
		>
			{navBar ? (
				<FaEllipsisH className="icon" />
			) : (
				<FaEllipsisV className="icon" />
			)}
		</span>
	);
};
