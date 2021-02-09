import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import GridWrapper from "../../components/Wrapper/GridWrapper";

const PageNotFound = () => {
  return (
    <GridWrapper>
      <NavBar />
      <div className="flex flex-col px-4 sm:px-6 md:px-8 pb-12 h-screen">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-primary mt-10 mb-8 sm:mt-14 sm:mb-10 ">
          Page Not Found
        </h1>
        <p className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11 text-secondary">
          We couldn't find what you were looking for.
        </p>
        <p className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11 text-primary">
          Please contact the owner of the site that linked you to the original
          URL and let them know their link is broken.
        </p>
      </div>
      <Footer />
    </GridWrapper>
  );
};

export default PageNotFound;
