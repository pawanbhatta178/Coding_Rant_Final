import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import AppWrapper from "../../components/AppWrapper/AppWrapper";

const Home = () => {
  return (
    <AppWrapper>
      <NavBar />
      <div className="flex flex-col px-4 sm:px-6 md:px-8 pb-12 h-full">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-primary mt-10 mb-8 sm:mt-14 sm:mb-10 ">
          Start understanding the code and algorithms you write.
        </h1>
        <p className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11 text-secondary">
          With our hand picked coding challenges, you not only will be ready for
          coding interviews but also gain deeper insight on how{" "}
          <span className="text-primary font-mono font-bold">time</span> and{" "}
          <span className="text-primary font-mono font-bold">
            space-complexity
          </span>{" "}
          actually works behind the hood for both{" "}
          <span className="text-primary font-mono font-bold">
            deterministic
          </span>{" "}
          and{" "}
          <span className="text-primary font-mono font-bold">
            probabilistic
          </span>{" "}
          algorithms.
        </p>
        <div className="flex text-center">
          <Link
            className="w-full py-3 px-6 sm:w-auto bg-accent text-white  rounded-xl font-semibold text-lg leading-6"
            to="/workspace"
          >
            Start Coding!
          </Link>
        </div>
      </div>
    </AppWrapper>
  );
};

export default Home;
