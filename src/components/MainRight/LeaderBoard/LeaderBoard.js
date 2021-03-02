import React from "react";
import "./LeaderBoard.css";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import useUser from "../../User/useUser";

const LeaderBoard = ({ show, activeQuestionId, ...props }) => {
  const [data, setData] = React.useState(null);
  const { data: usr } = useUser();

  React.useEffect(() => {
    const rankingData = [
      {
        rank: "1",
        prevRank: "2",
        username: "pawan",
        country: "NP",
        wordCount: "1234",
        timeTaken: "8.8",
      },
      {
        rank: "2",
        prevRank: "3",
        username: "Prabhat",
        country: "NP",
        wordCount: "5949",
        timeTaken: "8.8",
      },
      {
        rank: "3",
        prevRank: "4",
        username: "Usha",
        country: "US",
        wordCount: "2323",
        timeTaken: "8.8",
      },
      {
        rank: "4",
        prevRank: "4",
        username: "Rita",
        country: "IN",
        wordCount: "0993",
        timeTaken: "8.8",
      },
      {
        rank: "5",
        prevRank: "2",
        username: "Hari",
        country: "IO",
        wordCount: "1232",
        timeTaken: "8.8",
      },
      {
        rank: "6",
        prevRank: "6",
        username: "Zair",
        country: "IO",
        wordCount: "1232",
        timeTaken: "8.8",
      },
      {
        rank: "7",
        prevRank: "1",
        username: "Megan",
        country: "KY",
        wordCount: "1232",
        timeTaken: "8.8",
      },
      {
        rank: "8",
        prevRank: "4",
        username: "Dwarf",
        country: "AF",
        wordCount: "1232",
        timeTaken: "8.8",
      },
      {
        rank: "9",
        prevRank: "4",
        username: "Mashy",
        country: "AR",
        wordCount: "1232",
        timeTaken: "8.8",
      },
      {
        rank: "10",
        prevRank: "78",
        username: "Lorry",
        country: "AM",
        wordCount: "1232",
        timeTaken: "8.8",
      },
      {
        rank: "11",
        prevRank: "6",
        username: "Evan",
        country: "NE",
        wordCount: "1232",
        timeTaken: "8.8",
      },
      {
        rank: "12",
        prevRank: "7",
        username: "Helsinki",
        country: "JP",
        wordCount: "1232",
        timeTaken: "8.8",
      },
      {
        rank: "13",
        prevRank: "14",
        username: "Tokyo",
        country: "MO",
        wordCount: "1232",
        timeTaken: "8.8",
      },
      {
        rank: "14",
        prevRank: "17",
        username: "Muse",
        country: "NA",
        wordCount: "1232",
        timeTaken: "8.8",
      },
      {
        rank: "15",
        prevRank: "90",
        username: "Dora",
        country: "SI",
        wordCount: "1232",
        timeTaken: "8.8",
      },
      {
        rank: "16",
        prevRank: "10",
        username: "Amazon",
        country: "SL",
        wordCount: "1232",
        timeTaken: "8.8",
      },
      {
        rank: "17",
        prevRank: "4",
        username: "Kesha",
        country: "FI",
        wordCount: "1232",
        timeTaken: "8.8",
      },
      {
        rank: "18",
        prevRank: "4",
        username: "Lita",
        country: "AZ",
        wordCount: "1232",
        timeTaken: "8.8",
      },
      {
        rank: "109",
        prevRank: "4",
        username: "Zian",
        country: "PL",
        wordCount: "1232",
        timeTaken: "8.8",
      },
    ];
    //finding user's record
    const username = usr?.username;

    setTimeout(() => {
      setData(
        rankingData.map((challenger) => {
          if (challenger.username !== username) {
            return challenger;
          } else {
            return { ...challenger, myRecord: true };
          }
        })
      );
    }, 500);
  }, [activeQuestionId, usr]);

  if (!show) return null;

  return (
    <>
      <div className="grid-leaderboard text-sm m-4 rounded overflow-y-auto">
        <div className="grid-title text-secondary pl-1"></div>
        <div className="grid-title text-secondary pl-1"></div>
        <div className="grid-title text-secondary "></div>
        <div className="grid-title text-secondary "></div>
        <div className="grid-title text-secondary font-extralight">
          Username
        </div>
        <div className="grid-title text-secondary font-extralight">
          WordCount
        </div>
        <div className="grid-title text-secondary font-extralight">
          TimeTaken
        </div>

        {data.map((challenger, i) => (
          <React.Fragment key={i}>
            <div
              className={`flex items-center ${
                challenger?.myRecord && "bg-accent text-white rounded-l-lg"
              }`}
            >
              {/* <ChangeInRank
                current={parseInt(challenger.rank)}
                previous={parseInt(challenger.prevRank)}
              /> */}
            </div>
            <div
              className={`flex items-center ${
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
              className={`flex items-center ${
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
