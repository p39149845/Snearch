import React from "react";
import Options from "./Options.js";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "PROMOTION",
      handler: props.actionProvider.handlePromotionDocs,
      id: 1,
    },
    {
      name: "RECOMMEND",
      handler: props.actionProvider.handleRecommendDocs,
      id: 2,
    },
    {
      name: "Search Snack Name",
      handler: props.actionProvider.handleSearchDocs,
      id: 3,
    },

  ];
  
  return <Options options={options} />;
};

export default GeneralOptions;