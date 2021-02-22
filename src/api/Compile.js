const axios = require("axios").default;
const { COMPILE_SERVICE_URI } = require("./constants");

const compile = async ({ source, lang, questionId }) => {
  const res = await axios.post(`${COMPILE_SERVICE_URI}/compile`, {
    source,
    lang,
    questionId,
  });

  console.log(res);
  return res?.data;
};

export { compile };
