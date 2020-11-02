import React, { useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";
import InformationBox from "../Option/InformationBox";

const RecommendDocs = ({ infoBox, setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
      infoBox: "Recommend",
    }));
  }, [setState]);

  const showActionProviderinfoBox = infoBox === "Recommend";

  return (
    <div>
      <ConditionallyRender
        ifTrue={showActionProviderinfoBox}
        show={
          <InformationBox setState={setState}>
            <p className='infoBoxParagraph'>
              Recommend!!
              <img className='imagepromotion_recommend' src={require('../recommend.jpg')} />
            </p>
          </InformationBox>
        }
      />
    </div>
  );
};

export default RecommendDocs;