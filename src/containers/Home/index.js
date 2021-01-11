import React, { useState } from "react";
import MenuSlider from "./_fragments/MenuSlider";
import { Data } from "Data";

const Home = () => {
  const [foodSlider, setFoodSlider] = useState(Data);

  return (
    <>
      <MenuSlider foodSlider={foodSlider} />
    </>
  );
};

export default Home;
