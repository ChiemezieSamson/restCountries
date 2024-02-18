

export const useFetchCountry = (countryId, countryCurrencyCode, lang) => {
  const foundCountry = countryCurrencyCode.find(country => country.name[lang] === countryId)
  return { foundCountry }
}