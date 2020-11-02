import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Overview from "../Option/Overview.js";
import PromotionDocs from "../Docs/PromotionDocs.js";
import RecommendDocs from "../Docs/RecommendDocs.js";
import SearchDocs from "../Docs/SearchDocs.js";

const botName = "SNEARCH";

const config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "darkorange",
    },
    chatButton: {
      backgroundColor: "darkorange",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hi I'm ${botName}. I’m here to help`,
      {
        withAvatar: false,
        delay: 500,
        widget: "overview",
      }
    ),
  ],
  state: {
    gist: "",
    infoBox: "",
  },
  customComponents: {},
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
    },
    {
      widgetName: "Promotion",
      widgetFunc: (props) => <PromotionDocs {...props} />,
      mapStateToProps: [ "infoBox"],
    },
    {
      widgetName: "Recommend",
      widgetFunc: (props) => <RecommendDocs {...props} />,
      mapStateToProps: ["infoBox"],
    },
    {
      widgetName: "Search",
      widgetFunc: (props) => <SearchDocs {...props} />,
      mapStateToProps: [ "infoBox"],
    },
  ],
};

export default config;