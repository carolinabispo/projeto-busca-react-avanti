import React from "react";
import SearchComponent from "../components/searchComponent/SearchComponent";
import "../pages/MainComponent.scss";

const MainComponent = () => {
  return (
    <>
      <div class="ellipse" id="topEllipse"></div>
      <div class="ellipse" id="bottomEllipse"></div>

      <div>
        <SearchComponent></SearchComponent>
      </div>
    </>
  );
};

export default MainComponent;
