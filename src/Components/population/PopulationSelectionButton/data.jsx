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
