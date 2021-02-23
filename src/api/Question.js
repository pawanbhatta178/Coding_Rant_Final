const axios = require("axios").default;
const { GENERAL_SERVICE_URI } = require("./constants");

const getQuestion = async ({ questionId }) => {
  const { data } = await axios.post(`${GENERAL_SERVICE_URI}/challenge`, {
    id: questionId,
  });
  console.log(data);
  return data;
};

export { getQuestion };
