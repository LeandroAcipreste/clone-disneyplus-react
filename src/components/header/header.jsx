import './header.css'
import { useState } from 'react';
import style from 'styled-components';


function Header() {
   
   
   
    return (
        <nav className='nav'>
            <img src='../images/logo.svg' alt='' className='nav-logo'/>
            <div className='nav-menu'>
                <a className='nav-link'>
                    <img src="../images/home-icon.svg" alt="" className='nav-link-img'/>
                    <span className='nav-link-text'>HOME</span>
                </a>
                <a className='nav-link'>
                    <img src="../images/search-icon.svg" alt="" className='nav-link-img'/>
                    <span className='nav-link-text'>SEARCH</span>
                </a>
                <a className='nav-link'>
                    <img src="../images/watchlist-icon.svg" alt="" className='nav-link-img'/>
                    <span className='nav-link-text'>WHATCHLIST</span>
                </a>
                <a className='nav-link'>
                    <img src="../images/original-icon.svg" alt="" className='nav-link-img'/>
                    <span className='nav-link-text'>ORIGINALS</span>
                </a>
                <a className='nav-link'>
                    <img src="../images/movie-icon.svg" alt="" className='nav-link-img'/>
                    <span className='nav-link-text'>MOVIES</span>
                </a>
                <a className='nav-link'>
                    <img src="../images/series-icon.svg" alt="" className='nav-link-img'/>
                    <span className='nav-link-text'>SERIES</span>
                </a>
            </div>
            <div>
                <img src="../images/eu.JPG" alt="" className='user-image'/>
            </div>
        </nav>
    )
};

export default Header

