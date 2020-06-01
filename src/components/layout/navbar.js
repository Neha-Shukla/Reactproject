import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLink from './signedInLink';
import SignedOutLink from './signedOutLink';
const Navbar = () =>{
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                {/* <Link to='/' className="brand-logo">My Link</Link> */}
                <SignedInLink></SignedInLink>
                <SignedOutLink></SignedOutLink>
            </div>
        </nav>
    )
}

export default Navbar;