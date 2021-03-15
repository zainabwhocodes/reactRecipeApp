import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

function Nav(){
    return(
        <div>
            <ul className='nav-list'>
                <Link  className="underline" to='/'>
                    <li>Home</li>
                </Link>
                <Link className="underline" to='/search'>
                    <li>Recipes</li>
                </Link>
                <Link className="underline" to='/about'>
                    <li>About</li>
                </Link>
            </ul>
        </div>
    );

}

export default Nav;