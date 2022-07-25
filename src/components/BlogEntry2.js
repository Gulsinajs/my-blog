import React from "react";
import {blogs2} from "../constants";

const BlogEntry2 = () => {

    const blogsArray = blogs2.map(item => (
        <>
            <img src={item.image} alt="Norway"/>
            <div className="w3-container">
                <h3>
                    <b>{item.title}</b>
                </h3>
                <h5>
                    Title description, <span className="w3-opacity">{item.titleDate}</span>
                </h5>
            </div>
            <div className="w3-container">
                <p>{item.text}</p>
                <div className="w3-row">
                    <div className="w3-col m8 s12">
                        <p>
                            <button className="w3-button w3-padding-large w3-white w3-border">
                                <b>READ MORE »</b>
                            </button>
                        </p>
                    </div>
                    <div className="w3-col m4 w3-hide-small">
                        <p>
              <span className="w3-padding-large w3-right">
                <b>Comments &nbsp;</b> <span className="w3-badge">{item.numberOfComments}</span>
              </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
    );
    return (
        <>
            <div className="w3-card-4 w3-margin w3-white">
                {blogsArray}
            </div>
        </>
    )
}

export default BlogEntry2;