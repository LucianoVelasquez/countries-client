export const functionFilterRepeadActivites = (actividades) => {
  let aux = "";
  let newFilter = [];

  let orderAZ = actividades.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  
  orderAZ.forEach((a) => { //ejemplo actividades : [a.senderismo,a.senderismo,a.natacion....]
    if (aux !== a.name) {
      aux = a.name;
      newFilter.push(a);
    }
  });

  return newFilter;
};
