const axios = require("axios").default;
const { GENERAL_SERVICE_URI } = require("./constants");

const getAllSubmissions = async ({ questionId }) => {
  const { data } = await axios.post(`${GENERAL_SERVICE_URI}/submissions`, {
    questionId,
  });
  console.log(data);
  return data;
};

export { getAllSubmissions };
