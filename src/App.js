import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Menu from "./pages/Menu/Menu";
import NotFound from "./pages/NotFound/NotFound";
import Catalog from "./pages/Catalog/Catalog";
import Iphone from "./pages/Iphone/Iphone";
import Product from "./pages/Product/Product";
import Watch from "./pages/Watch/Watch";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts text="Phone number (555)101010"/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                    <Route path="/catalog/iphone" element={<Iphone/>}/>
                    <Route path="/catalog/watch" element={<Watch/>}/>
                    <Route path="/product/:id" element={<Product/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
