import React from "react";
import {posts} from "../constants";

const width = {
    width: "50px"
}

const Posts = () => {

    const postsArray = posts.map(item => (
        <li className="w3-padding-16">
            <img
                src={item.image}
                alt="Image"
                className="w3-left w3-margin-right"
                style={width}
            />
            <span className="w3-large">{item.title}</span>
            <br />
            <span>{item.subTitle}</span>
        </li>
        )
    );

    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    {postsArray}
                </ul>
            </div>
            <hr/>
        </>

    )
}

export default Posts;