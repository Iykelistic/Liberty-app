import React from 'react';
import Notification from "../assets/images/Group 10633.svg";
import Profile from "../assets/images/Ellipse 824.svg";
import ChevronDown from "../assets/images/Chevron-Right (1).svg";

const Header = () => {
    return (
        <div className="header__container">
            <div className="header__content">
                <div className="header__first__content">
                    <p className="header__analytics__text">Analytics Dashboard</p>
                </div>
                <div className="header__second__content">
                    <img src={Notification} className="header__bell__icon" alt="bell__icon" />
                    <img src={Profile} className="header__profile__image" alt="profile__img" />
                    <div className="header__text__group">
                        <p className="header__text">Dexter Olaniyi</p>
                        <p className="header__text_i">Dexterola@gmail.com</p>
                    </div>
                    <img src={ChevronDown} className="header__arrow__down" alt="arrow_down" />
                </div>
            </div>
        </div>
    );
}

export default Header;
