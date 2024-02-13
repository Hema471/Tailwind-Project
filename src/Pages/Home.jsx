import { Fragment } from "react";
import Lainding from "./../components/Lainding";
import Features from "../components/Features";
import StayProductive from "../components/StayProductive";
import Testimonial from "./../components/Testimonial";
import GetStarted from "./../components/GetStarted";

const Home = () => {
  return (
    <Fragment>
      <Lainding />
      <Features />
      <StayProductive />
      <Testimonial />
      <GetStarted />
    </Fragment>
  );
};

export default Home;
