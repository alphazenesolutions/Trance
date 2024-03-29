import React from "react";
import HomeBanner from "../Components/HomeComp/HomeBanner/HomeBanner";
import HomeSwiper from "../Components/HomeComp/HomeSwiper/HomeSwiper";
import HomeGrid from "../Components/HomeComp/HomeGrid/HomeGrid";
import HomeExpand from "../Components/HomeComp/Mission/Mission";
import HomePentGrid from "../Components/HomeComp/HomePentGrid/HomePentGrid";
import GuideLine from "../Components/HomeComp/GuideLine/GuideLine";
import Diseases from "../Components/HomeComp/Diseases/Diseases";
import HomeMobileBanner from "../Components/HomeMobileComp/HomeMobileBanner/HomeMobileBanner";
import TestimonialComp from "../Components/HomeMobileComp/Testimonial/TestimonialComp";

const Home = () => {
  return (
    <div>
      <div className="webHandler">
        <HomeBanner />
        <HomeSwiper />
        <HomeGrid />
        <HomeExpand />
        <HomePentGrid />
        <Diseases />
        <GuideLine />
      </div>
      <div className="mobileHandler">
        <HomeMobileBanner />
        <HomeSwiper />
        <HomeGrid />
        <TestimonialComp />
        <Diseases />
        <GuideLine />
      </div>
    </div>
  );
};

export default Home;
