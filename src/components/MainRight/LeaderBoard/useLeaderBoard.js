import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getLeaderBoard } from "../../../api/LeaderBoard";
import useUser from "../../User/useUser";

const useLeaderBoard = ({ questionId }) => {
  const { data: user } = useUser();
  const [basedOn, setBasedOn] = useState("word_count");
  const [rankingData, setRankingData] = useState();

  const { data, isLoading } = useQuery(
    ["leaderboard", { basedOn, questionId }],
    () => getLeaderBoard({ questionId, basedOn })
  );

  const changeBasedOn = (key) => {
    setBasedOn((current) => {
      return key;
    });
  };

  useEffect(() => {
    if (!data) {
      return;
    }
    if (!user) {
      return;
    }
    const myData = data?.map((eachData) => {
      return {
        ...eachData,
        myRecord: eachData.username === user.username,
      };
    });
    setRankingData(myData);
  }, [data, user]);

  return {
    changeBasedOn,
    basedOn,
    rankingData,
    isLoading,
  };
};

export default useLeaderBoard;
