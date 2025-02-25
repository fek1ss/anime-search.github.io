import './Header.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites</Link>
                    </li>
                    <li>
                        <Link to="/about">About Anime</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
