import React from 'react';
import Location from "../assets/images/Location.svg";
import FullBar from "../assets/images/Full Bars.svg";
import Group from "../assets/images/Group.svg";
import Wifi from "../assets/images/Wi–Fi.svg";
import FirstLayer from './FirstLayer';
import SecondLayer from "./SecondLayer";
import ThirdLayer from './ThirdLayer';
import FourthLayer from './FourthLayer';

const MobileDashboard = () => {
    return (
        <div>
            <div className="maindashboard__mobile__container">
                <div className="mobile__container__header">
                    <div className="mobile__container__first">
                        <p className="mobile__text">4:44</p>
                        <img src={Location} className="mobile__location" alt="location" />
                    </div>
                    <div className="mobile__container__second">
                        <img src={FullBar} className="mobile__bar" alt="fullbar" />
                        <img src={Wifi} className="mobile__network" alt="network" />
                        <img src={Group} className="mobile__strength" alt="battery__strength" />
                    </div>
                </div>
                <div className="mobile__second__header__content">
                    <div className="mobile__analytics">
                        <p className="mobile__analytics__text">Analytics Dashboard</p>
                    </div>

                    <div className="mobile__menu">
                        <button className="mobile__menu__button">Menu</button>
                    </div>
                </div>
            </div>
            <div className="mobile__dashboard__content">
                <FirstLayer />
            </div>
            <div className="mobile__dashboard__content">
                <SecondLayer />
            </div>

            <div className="mobile__dashboard__content">
                <ThirdLayer />
            </div>

            <div className="mobile__dashboard__content">
                <FourthLayer />
            </div>
        </div>
    );
}

export default MobileDashboard;
