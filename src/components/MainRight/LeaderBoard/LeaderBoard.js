import React from "react";
import "./LeaderBoard.css";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import useLeaderBoard from "./useLeaderBoard";
import { IoChevronUpSharp } from "react-icons/io5";

const baseStyle =
  "grid-title text-secondary font-extralight cursor-pointer mr-4";

const selectedStyle = "border-b-2 border-accent text-accent";

const SortIcon = ({ show }) => {
  if (!show) return null;
  return (
    <div className=" w-full flex justify-end ">
      <IoChevronUpSharp />
    </div>
  );
};

const LeaderBoard = ({ show, activeQuestionId }) => {
  const { rankingData, basedOn, changeBasedOn } = useLeaderBoard({
    questionId: activeQuestionId,
  });

  if (!show) return null;

  return (
    <>
      {console.log(rankingData)}
      <div className="grid-leaderboard gap-y-2 text-sm m-4 rounded overflow-y-auto">
        <div className="grid-title text-secondary pl-1"></div>
        <div className="grid-title text-secondary "></div>
        <div className="grid-title text-secondary "></div>
        <div className="grid-title text-secondary font-extralight pr-4">
          Username
        </div>
        <div
          onClick={() => changeBasedOn("word_count")}
          className={
            basedOn === "word_count"
              ? `${baseStyle} ${selectedStyle}`
              : `${baseStyle}`
          }
        >
          WordCount
          <SortIcon show={basedOn === "word_count"} />
        </div>
        <div
          onClick={() => changeBasedOn("time_taken")}
          className={
            basedOn === "time_taken"
              ? `${baseStyle} ${selectedStyle}`
              : `${baseStyle}`
          }
        >
          TimeTaken
          <SortIcon show={basedOn === "time_taken"} />
        </div>
        {rankingData?.map((challenger, i) => (
          <React.Fragment key={i}>
            <div
              className={`flex items-center pl-2 ${
                challenger?.myRecord && "bg-accent text-white"
              }`}
            >
              {challenger.rank}
            </div>
            <div
              className={`text-2xl flex items-center ${
                challenger?.myRecord && "bg-accent text-white"
              }`}
            >
              {getUnicodeFlagIcon(challenger.country)}
            </div>

            <div
              className={`flex items-center ${
                challenger?.myRecord && "bg-accent text-white"
              }`}
            ></div>
            <div
              className={`flex items-center ${
                challenger?.myRecord && "bg-accent text-white"
              }`}
            >
              {challenger.username}
            </div>
            <div
              className={`flex items-center ${
                challenger?.myRecord && "bg-accent text-white"
              }`}
            >
              {challenger.wordCount}
            </div>
            <div
              className={`flex items-center pr-2 mr-4 ${
                challenger?.myRecord && "bg-accent text-white rounded-r-sm"
              }`}
            >
              {challenger.timeTaken}
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default LeaderBoard;
