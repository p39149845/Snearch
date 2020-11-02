import React, { useEffect } from "react";
import { FadeIn } from "react-anim-kit";
import { ConditionallyRender } from "react-util-kit";
import PromotionMenage1 from '../Option/PromotionMenage1'
import InformationBox from "../Option/InformationBox";

const PromotionDocs = ({ infoBox, setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
      infoBox: "Promotion",
    }));
  }, [setState]);

  const showMessageParserInfoBox = infoBox === "Promotion";

  return (
    <div>
      <FadeIn left by={250}>
      </FadeIn>

      <ConditionallyRender
        ifTrue={showMessageParserInfoBox}
        show={
          <InformationBox setState={setState}>
            <h1> Promotion!! </h1>
            <PromotionMenage1 />
          </InformationBox>
        }
      />
    </div>
  );
};

export default PromotionDocs;