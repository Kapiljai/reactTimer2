import React from 'react';
import Style from  './Navbar.module.css'
import { User , ShoppingCart } from 'lucide-react';
function Navbar(){

    return(
        <>
        <div className='container'>
            <header>
                <div className="logo">
                    <img src="" alt="" />
                </div>
                <div className="middle-navbar">
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">Category</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="user-profile">
                    <div className="login">

                    
                    <li><User /><a href="#">Login</a></li>
                    </div>
                    <ShoppingCart />
                </div>
            </header>

        </div>
        </>
    );
}
export default Navbar;