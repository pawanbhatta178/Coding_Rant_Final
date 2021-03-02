import React from "react";
import { UserContext } from "../../../UserContext";
import "./LeaderBoard.css";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

const LeaderBoard = ({ show, activeQuestionId, ...props }) => {
  const [data, setData] = React.useState(null);
  const { user } = React.useContext(UserContext);

  React.useEffect(() => {
    const rankingData = [
      {
        rank: "1",
        prevRank: "2",
        username: "Pawan",
        country: "NP",
        points: "1234",
      },
      {
        rank: "2",
        prevRank: "3",
        username: "Prabhat",
        country: "NP",
        points: "5949",
      },
      {
        rank: "3",
        prevRank: "4",
        username: "Usha",
        country: "US",
        points: "2323",
      },
      {
        rank: "4",
        prevRank: "4",
        username: "Rita",
        country: "IN",
        points: "0993",
      },
      {
        rank: "5",
        prevRank: "2",
        username: "Hari",
        country: "IO",
        points: "1232",
      },
      {
        rank: "6",
        prevRank: "6",
        username: "Zair",
        country: "IO",
        points: "1232",
      },
      {
        rank: "7",
        prevRank: "1",
        username: "Megan",
        country: "KY",
        points: "1232",
      },
      {
        rank: "8",
        prevRank: "4",
        username: "Dwarf",
        country: "AF",
        points: "1232",
      },
      {
        rank: "9",
        prevRank: "4",
        username: "Mashy",
        country: "AR",
        points: "1232",
      },
      {
        rank: "10",
        prevRank: "78",
        username: "Lorry",
        country: "AM",
        points: "1232",
      },
      {
        rank: "11",
        prevRank: "6",
        username: "Evan",
        country: "NE",
        points: "1232",
      },
      {
        rank: "12",
        prevRank: "7",
        username: "Helsinki",
        country: "JP",
        points: "1232",
      },
      {
        rank: "13",
        prevRank: "14",
        username: "Tokyo",
        country: "MO",
        points: "1232",
      },
      {
        rank: "14",
        prevRank: "17",
        username: "Muse",
        country: "NA",
        points: "1232",
      },
      {
        rank: "15",
        prevRank: "90",
        username: "Dora",
        country: "SI",
        points: "1232",
      },
      {
        rank: "16",
        prevRank: "10",
        username: "Amazon",
        country: "SL",
        points: "1232",
      },
      {
        rank: "17",
        prevRank: "4",
        username: "Kesha",
        country: "FI",
        points: "1232",
      },
      {
        rank: "18",
        prevRank: "4",
        username: "Lita",
        country: "AZ",
        points: "1232",
      },
      {
        rank: "109",
        prevRank: "4",
        username: "Zian",
        country: "PL",
        points: "1232",
      },
    ];
    //finding user's record
    const username = user?.username;
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
  }, [activeQuestionId, user]);

  if (!show) return null;

  return (
    <>
      <div className="grid-leaderboard  m-4 rounded overflow-y-auto">
        <div className="grid-title text-gray-500 pl-1"></div>
        <div className="grid-title text-gray-500 pl-1"></div>
        <div className="grid-title text-gray-500 "></div>
        <div className="grid-title text-gray-500 "></div>
        <div className="grid-title text-gray-500 ">Username</div>
        <div className="grid-title text-gray-500 ">Points</div>

        {data.map((challenger, i) => (
          <React.Fragment key={i}>
            <div
              className={`flex items-center ${
                challenger?.myRecord && "my-row"
              }`}
            >
              {/* <ChangeInRank
                current={parseInt(challenger.rank)}
                previous={parseInt(challenger.prevRank)}
              /> */}
            </div>
            <div
              className={`flex items-center ${
                challenger?.myRecord && "my-row"
              }`}
            >
              {challenger.rank}
            </div>
            <div className="text-2xl">
              {getUnicodeFlagIcon(challenger.country)}
            </div>

            <div
              className={`flex items-center ${
                challenger?.myRecord && "my-row"
              }`}
            ></div>
            <div
              className={`flex items-center ${
                challenger?.myRecord && "my-row"
              }`}
            >
              {challenger.username}
            </div>
            <div
              className={`flex items-center ${
                challenger?.myRecord && "my-row"
              }`}
            >
              {challenger.points}
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default LeaderBoard;
