// 1. Using the countries array create the following array of arrays. The country name,
// the first three letters of the country name and the length of the country name.

const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

const createArrayOfArrays = (arr) => {
  const newArray = [];
  arr.forEach((item) => {
    newArray.push([
      item.charAt(0) + item.slice(1).toLowerCase(),
      item.substring(0, 3),
      item.length,
    ]);
  });
  return newArray;
};
console.log(createArrayOfArrays(countries));
