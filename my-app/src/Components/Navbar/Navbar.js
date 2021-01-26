import React, { useState } from 'react';
import './Navbar.css';
import DropdownProfile from './Dropdown/DropdownProfile';
import DropdownLanguage from './Dropdown/DropdownLanguage';

export default function Navbar() {

    const [dropdownProfile, setDropdownProfile] = useState(false);
    const [dropdownLanguage, setDropdownLanguage] = useState(false);

    const onClickProfile = () => setDropdownProfile(!dropdownProfile);
    const onClickLanguage = () => setDropdownLanguage(!dropdownLanguage);

    return (
        <>
            <header className='header'>
                <nav className='navbar'>
                    <div className='navbar-logo'>
                        <h5>AlfaPharm</h5>
                    </div>
                    <div className='navbar-menu'>
                        <div className='menu-search'>
                            <input type='search' id='search' placeholder='Որոնել'/>
                            <i className='fas fa-search'/>
                        </div>
                        <ul className='menu-items'>
                            <li>Կատեգորիաներ</li>
                            <li>Դեղատներ</li>
                            <li>Կլինիկա</li>
                        </ul>
                        <div className='profile'>
                            <div className='profile-image'></div>
                            <div className='profile-name'  onClick={onClickProfile}>Նարեկ <i className={ dropdownProfile ? "fas fa-caret-up" : "fas fa-caret-down"} onClick={onClickProfile}/></div>
                            {dropdownProfile && <DropdownProfile/>}
                        </div>
                        <div className='shopping-cart'>
                            <i class="fas fa-shopping-cart"/>
                            <div className='smallCount'>1</div>
                        </div>
                        <div className='language' onClick={onClickLanguage}>Հայ <i className={ dropdownLanguage ? "fas fa-caret-up" : "fas fa-caret-down"}/>
                        {dropdownLanguage && <DropdownLanguage/>}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
