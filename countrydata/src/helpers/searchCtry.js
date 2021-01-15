export const isExistedMany = (searchPhrase, clt) => {
  console.log("btn click hldr here", searchPhrase);
  const resMany = clt.filter((item) => item.name.toLowerCase().includes(searchPhrase));
  return resMany;
};
