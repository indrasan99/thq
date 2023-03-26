import React from "react";
import FilterableQuran from "../components/FilterableQuran";

function BacaAlQuran(props) {
    return (
        <FilterableQuran surahs={props.surahs} />
    );
}

export default BacaAlQuran;