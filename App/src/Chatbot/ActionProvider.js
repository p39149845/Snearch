class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handlePromotionDocs = () => {
    const messages = this.createChatBotMessage(
      "Show Promotion",
      { widget: "Promotion", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  handleSearchDocs = () => {
    const messages = [
      this.createChatBotMessage(
        "Use Snearch",
        { widget: "Search", withAvatar: true }
      ),
    ];

    this.addMessageToBotState(messages);
  };

  handleRecommendDocs = () => {
    const messages = this.createChatBotMessage(
      "Show Recommend",
      { widget: "Recommend", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      "How can I help? Here is the overview.",
    );

    this.addMessageToBotState(message);
  };

  addMessageToBotState = (messages, newState) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        ...newState,
        messages: [...state.messages, ...messages],
        infoBox: "",
      }));
    } else {
      this.setState((state) => ({
        ...state,
        ...newState,
        messages: [...state.messages, messages],
        infoBox: "",
      }));
    }
  };
}

export default ActionProvider;