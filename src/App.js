import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
// import Header from "./components/Header";
import BlogEntries from "./components/BlogEntries";
import IntroductionMenu from "./components/IntroductionMenu";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Menu from "./pages/Menu/Menu";
import NotFound from "./pages/NotFound/NotFound";
import Catalog from "./pages/Catalog/Catalog";
import Iphone from "./pages/Iphone/Iphone";
import MacBook from "./pages/MacBook/MacBook";

function App() {
    return (
        // <>
        //     <div className="w3-content" style={{maxWidth: "1400px"}}>
        //         <Header/>
        //         <div className="w3-row">
        //             <BlogEntries/>
        //             <IntroductionMenu/>
        //         </div>
        //     </div>
        //     <Footer/>
        // </>
        <>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main pageName="Main"/>}/>
                    <Route path="/about" element={<About text="Здесь должна быть инфо о нас"/>}/>
                    <Route path="/contacts" element={<Contacts text="Phone number (555)101010"/>}/>
                    <Route path="/catalog" element={<Catalog/>}>
                        <Route path="iphone" element={<Iphone text="Появляется iphone"/>}/>
                        <Route path="macBook" element={<MacBook text="Появляется macbook"/>}/>
                    </Route>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;
