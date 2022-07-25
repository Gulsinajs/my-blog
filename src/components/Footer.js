import React from "react";

const style_title = {
    textAlign:"left",
    fontSize:"16px",
    color:"black"
}

const style_link = {
    fontSize:"16px",
    textTransform:"uppercase"
}

const Footer =() => {
    return (
        <>
            <footer className="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
                <button className="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom">
                    Previous
                </button>
                <button className="w3-button w3-black w3-padding-large w3-margin-bottom">
                    Next »
                </button>
                <p style={style_title}>
                    Powered by {" "}
                    <a style={style_link} href="https://www.w3schools.com/w3css/default.asp" target="_blank">
                        w3.css
                    </a>
                </p>
            </footer>
        </>

    )
}

export default Footer;
