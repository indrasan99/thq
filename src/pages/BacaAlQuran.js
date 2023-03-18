import React from "react";
import FilterableQuran from "../components/FilterableQuran";

function BacaAlQuran(props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         surahs: []
    //     }
    // }

    // componentDidMount() {
    //     axios.get(API_URL + 'surat')
    //         .then(response => {
    //             const surahs = response.data.data;
    //             this.setState({ surahs });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    // render() {
    //     return (
    //         <FilterableQuran surahs={this.state.surahs} />
    //     );
    // }

    return (
        <FilterableQuran surahs={props.surahs} />
    );
}

export default BacaAlQuran;