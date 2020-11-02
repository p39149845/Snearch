import React from "react";
import { FadeIn } from "react-anim-kit";

import GeneralOptions from "./GeneralOptions";

const Overview = (props) => {
  return (
    <div>
      <FadeIn left by={250}>
      </FadeIn>
      <GeneralOptions actionProvider={props.actionProvider} />
    </div>
  );
};

export default Overview;