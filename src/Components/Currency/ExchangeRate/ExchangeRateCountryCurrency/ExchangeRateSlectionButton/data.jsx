export const sortedByhigHestExChangeRate = (filiteredCountry) => {
  const sortedArrayAscending = filiteredCountry.slice().sort((a, b) => b?.conversion_rates - a?.conversion_rates)

  return { sortedArrayAscending }
}


export const sortedByLowestExChangeRate = (filiteredCountry) => {
  const sortedArrayDescending = filiteredCountry.slice().sort((a, b) =>  a?.conversion_rates - b?.conversion_rates)

  return { sortedArrayDescending }
}

export const Reset = {
  en: "Reset",
  ko: "리셋",
  zh: "重置"
}