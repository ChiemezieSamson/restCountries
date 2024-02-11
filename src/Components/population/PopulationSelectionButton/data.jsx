import { FaSortAmountDown, FaSortAmountUpAlt, FaUserFriends, FaUsers } from "react-icons/fa";
import { RxTextAlignMiddle } from "react-icons/rx";

export const arrangementIcons = [
	{
		id: 0,
		name: "top ten",
		title: {
			en: "top ten",
			ko: "상위 십 ",
			zh: "前十",
		},
		icon: <FaUsers  className="inline-block" />,
	},
	{
		id: 1,
		name: "bottom ten",
		title: {
			en: "bottom ten",
			ko: "하위 십  ",
			zh: "底十",
		},
		icon: <FaUserFriends  className="inline-block" />,
	},
	{
		id: 2,
		name: "middle ten",
		title: {
			en: "middle ten",
			ko: "중간 십 ",
			zh: "中间十",
		},
		icon: <RxTextAlignMiddle className="inline-block" />,
	},
];


export const arrangementIconsToggle = [
  {
		id: 0,
		name: "lowest",
		title: {
			en: "lowest",
			ko: "최하",
			zh: "最低",
		},
		icon: <FaSortAmountUpAlt  className="inline-block" />,
	},
	{
		id: 1,
		name: "highest",
		title: {
			en: "highest",
			ko: "최상",
			zh: "最高",
		},
		icon: <FaSortAmountDown className="inline-block" />,
	},
]

export const sortedByhigHestPopulation = (countries) => {
  const sortedArrayDescending = countries.slice().sort((a, b) => {
    const populationA = parseInt(a?.population, 10);
    const populationB = parseInt(b?.population, 10);
    
    if (populationA > populationB) {
      return -1; 
    }
  
    if (populationA < populationB) {
      return 1; 
    }

    return populationB - populationA ;
  });

  return { sortedArrayDescending }
}

export const sortedByLowestPopulation = (countries) => {

  const sortedArrayAscending = countries.slice().sort((a, b) => {
    const populationA = parseInt(a?.population, 10);
    const populationB = parseInt(b?.population, 10);
   
    if (populationA < populationB) {
      return -1; 
    }
  
    if (populationA > populationB) {
      return 1; 
    }
  
    return populationA - populationB;
  });

  return { sortedArrayAscending }
}

export const tenHighestPopulation = (sortedArrayDescending) => {
  const highestTenPopulation = sortedArrayDescending?.slice(0, 10);

  return { highestTenPopulation }
}

export const tenLowestPopulation = (sortedArrayAscending) => {
  const lowestTenPopulation = sortedArrayAscending?.slice(0, 10);

  return { lowestTenPopulation }
}

export const tenMiddlePopulation = (sortedArrayAscending) => {
  const middlePopulationStartIndex = Math.floor(sortedArrayAscending.length / 2) - 5;
  const middlePopulation = sortedArrayAscending.slice(middlePopulationStartIndex, middlePopulationStartIndex + 10);

  return { middlePopulation }
}
