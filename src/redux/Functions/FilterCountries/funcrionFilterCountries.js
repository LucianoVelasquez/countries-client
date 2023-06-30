export const funcrionFilterCountries = (typeFilter, allPaises) => {
  let countryFilter;

  if (typeFilter.includes("con.")) {
    countryFilter =
      typeFilter === "con.ALL"
        ? allPaises
        : allPaises.filter(
            (pais) => pais.continents === typeFilter.split(".")[1]
          ); //con.Europe = [con][Europe]
  } else {
    countryFilter = allPaises.filter((country) =>
      country.Activities.find((act) => act.name == typeFilter)
    );
  }

	return countryFilter;
};
