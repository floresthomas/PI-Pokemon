import React from "react";
import { connect } from "react-redux";
import { filterCreated } from "../../actions";

const FilterCreated = ({ filterCreated, setPage}) => {

    const handleCreated = (e) =>{
        filterCreated(e.target.value);
        setPage(1);
    }

    return(
    <select onChange={(e) => handleCreated(e)}>
        <option hidden value="">Filter By:</option>
        <option value='all'>All</option>
        <option value='created'>Created</option>
        <option value='api'>Existing</option>
    </select>
    )
}


export const mapDispatchToProps = (dispatch) => {
    return{
        filterCreated : (payload) => dispatch(filterCreated(payload))
    }
}

export default connect(null, mapDispatchToProps)(FilterCreated)
