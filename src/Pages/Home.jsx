import React from "react";
import HomeBanner from "../Components/HomeComp/HomeBanner/HomeBanner";
import HomeSwiper from "../Components/HomeComp/HomeSwiper/HomeSwiper";
import HomeGrid from "../Components/HomeComp/HomeGrid/HomeGrid";
import HomeExpand from "../Components/HomeComp/Mission/Mission";
import HomePentGrid from "../Components/HomeComp/HomePentGrid/HomePentGrid";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeSwiper />
      <HomeGrid />
      {/* <HomeExpand /> */}
      <HomePentGrid />
    </div>
  );
};

export default Home;
