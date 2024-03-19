import React from 'react';
import ReactDOM from "react-dom/client";

const Header = ()=>{
    return(
        <div className='header'>
            <div className='logo-container'>
                <img src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png' alt='logo' className='logo'></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return(
        <div className='app'>
            <Header/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>); 