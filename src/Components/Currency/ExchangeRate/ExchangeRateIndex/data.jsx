export const useFetchCountry = (countryId, countryCurrencyCode) => {
  const search = countryId ? countryId : "united states"
  const foundCountry = countryCurrencyCode.find(country => country.id === search)
  return { foundCountry }
}