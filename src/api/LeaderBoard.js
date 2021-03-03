const axios = require("axios").default;
const { GENERAL_SERVICE_URI } = require("./constants");

const getLeaderBoard = async ({ questionId, basedOn }) => {
  const { data } = await axios.post(`${GENERAL_SERVICE_URI}/leaderboard`, {
    challengeId: questionId,
    basedOn,
  });
  console.log(data);
  return data;
};

export { getLeaderBoard };
