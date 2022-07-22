import React from "react";
import AboutCard from "./AboutCard";
import Posts from "./Posts";
import Tags from "./Tags";

const IntroductionMenu = () => {
    return (
            <div className="w3-col l4">
                <AboutCard/>
                <Posts/>
                <Tags/>
            </div>
    )
}

export default IntroductionMenu;