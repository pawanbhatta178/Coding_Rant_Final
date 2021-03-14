const axios = require("axios").default;
const { GENERAL_SERVICE_URI } = require("./constants");

const getDefaultCode = async ({ questionId, language }) => {
  console.log("params:", questionId, language);
  const { data } = await axios.post(`${GENERAL_SERVICE_URI}/defaultCode`, {
    challengeId: questionId,
    language,
  });
  console.log(data);
  return data;
};

export { getDefaultCode };
