import React from 'react';
import {Outlet} from 'react-router-dom';

const title = {
    textAlign: "center"
}

const Catalog = () => {
    return (
        <div>
            <ul>
                <li><a href="/Catalog/Iphone">Iphone</a></li>
                <li><a href="/Catalog/MacBook">MacBook</a></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default Catalog;