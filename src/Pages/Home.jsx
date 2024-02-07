import { Fragment } from "react";
import Lainding from "./../components/Lainding";
import Features from "../components/Features";
import StayProductive from "../components/StayProductive";

const Home = () => {
  return (
    <Fragment>
      <Lainding />
      <Features />
      <StayProductive />
    </Fragment>
  );
};

export default Home;
