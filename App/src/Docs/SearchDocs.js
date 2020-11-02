import React, { useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";
import Snearch from '../Option/Snearch'

import InformationBox from "../Option/InformationBox";

const SearchDocs = ({ infoBox, setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
      infoBox: "Search",
    }));
  }, [setState]);

  const showActionProviderInfoBox = infoBox === "Search";

  return (
    <div>
      <ConditionallyRender
        ifTrue={showActionProviderInfoBox}
        show={
          <InformationBox setState={setState}>
            <h2>Search</h2>
            <Snearch/>
          </InformationBox>
        }
      />
    </div>
  );
};

export default SearchDocs;