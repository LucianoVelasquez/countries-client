export const functionOrderCountries = (typeOrder, dataPaises) => {
  let order;

  if (typeOrder === "des") {
    order = dataPaises.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }

      if (a.name < b.name) {
        return 1;
      }

      return 0;
    });
  }
  if (typeOrder === "asc") {
    order = dataPaises.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }

      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
  if (typeOrder === "popu") {
    order = dataPaises.sort((a, b) => {
      if (a.population > b.population) {
        return -1;
      }

      if (a.population < b.population) {
        return 1;
      }
      return 0;
    });
  }

  return order;
};
