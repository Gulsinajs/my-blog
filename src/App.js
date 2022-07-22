import React from "react";
import './App.css';
import Header from "./components/Header";
import BlogEntries from "./components/BlogEntries";
import IntroductionMenu from "./components/IntroductionMenu";
import Footer from "./components/Footer";
import ComponentA from "./components/componentA/ComponentA";
import ComponentB from "./components/componentB/ComponentB";

function App() {
    return (
        <>
            <div className="w3-content" style={{maxWidth: "1400px"}}>
                <Header/>
                <div className="w3-row">
                    <BlogEntries/>
                    <IntroductionMenu/>
                    <ComponentA/>
                    <ComponentB/>
                </div>

            </div>
            <Footer/>
        </>
    );
}

export default App;
