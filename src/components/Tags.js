import React from "react";
import {tags} from "../constants";

const margin = {
    marginRight:"5px"
}

const Tag = (props) => {
    return (
        <span
            className="w3-tag w3-light-grey w3-small w3-margin-bottom"
            style={margin}>
                {props.name}
        </span>
    )
}


const Tags =() => {

    const tagsArray = tags.map(item => <Tag name={item}/>);

    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4 className="text-red">Tags</h4>
                </div>
                <div className="w3-container w3-white">
                    <p>
                        {tagsArray}
                    </p>
                </div>
            </div>
            {/* END Introduction Menu */}
            {/* END GRID */}
            <br />
            {/* END w3-content */}
        </>
    )
}

export default Tags;