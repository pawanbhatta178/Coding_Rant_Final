const StringToJson = (array, keyToConvert) => {
  if (!array) return;
  const newArray = array.map((item) => {
    let reqJSON = array;
    try {
      reqJSON = JSON.parse(item[keyToConvert]);
    } catch (err) {
      //do nth
    }
    return {
      ...item,
      [keyToConvert]: reqJSON,
    };
  });
  return newArray;
};
export { StringToJson };
