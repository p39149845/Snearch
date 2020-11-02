class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse = (message) => {
    const lowerCase = message.toLowerCase();

    if (
      lowerCase.includes("Promotion")
    ) {
      return this.actionProvider.handlePromotionDocs();
    }

    if (lowerCase.includes("Search")) {
      return this.actionProvider.handleSearchDocs();
    }

    if (lowerCase.includes("Recommend")) {
      return this.actionProvider.handleRecommendDocs();
    }

    return this.actionProvider.handleDefault();
  };
}

export default MessageParser;