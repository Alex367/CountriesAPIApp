export default function transformData(data) {
  let transformedData = [];
  for (let item = 0; item < data.length; item++) {
    transformedData.push({
      id: item,
      code: data[item].code.alpha3code,
      name: data[item].name.shortnamelowercase,
      flag: data[item].flag.officialflag.svg,
    });
  }
  return transformedData;
}
