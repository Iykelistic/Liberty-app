import React from 'react';
import Line from "../assets/images/Line.svg";
import home from "../assets/images/home-2.svg"
import Category from "../assets/images/Category.svg"
import StrongBox from "../assets/images/strongbox.svg";
import ChevronRight from "../assets/images/Chevron-Right.svg"
import Shop from "../assets/images/shop.svg";
import Cube from "../assets/images/3dcube.svg";
import CardEdit from "../assets/images/card-edit.svg";
import Cards from "../assets/images/cards.svg";
import Medal from "../assets/images/medal-star.svg";
import Radar from "../assets/images/radar.svg";
import Security from "../assets/images/security-user.svg";

const Sidebar = () => {
    return (
        <div className="sidebar__container">
            <div className="sidebar__content">
                <p className="sidebar__title">Paybox</p>
                <p className="sidebar__subtitle">by LibertyPay</p>
                <img src={Line} alt="sidebar__dotted__line" className='sidebar__line' />
            </div>

            <div className="sidebar__first__content__container">
                <div className="sidebar__first__content">
                    <img src={home} className='sidebar__home__icon' alt="sidebar__icon" />
                    <p className="sidebar__home__text">Home</p>
                </div>

                <div className="sidebar__first__content analytics__context">
                    <img src={Category} className='sidebar__home__icon cat' alt="sidebar__icon" />
                    <p className="sidebar__home__text">Analytics Dashboard</p>
                </div>
                <img src={Line} alt="sidebar__dotted__line" className='sidebar__line_i' />
            </div>

            <div className='sidebar__second__content__container'>
                <div className="sidebar__second__content">
                    <div className="sidebar__second__context">
                        <img src={StrongBox} className="sidebar__shop__icon" alt="sidebar__shop" />
                        <p className="sidebar__shop__text">Personal</p>
                    </div>
                    <div className="sidebar__chevron__icon">
                        <img src={ChevronRight} className="sidebar__chevron" alt="sidebar_chevron" />
                    </div>
                </div>

                <div className="sidebar__second__content">
                    <div className="sidebar__second__context">
                        <img src={Shop} className="sidebar__shop__icon" alt="sidebar__shop" />
                        <p className="sidebar__shop__text">Sale Hub</p>
                    </div>
                    <div className="sidebar__chevron__icon">
                        <img src={ChevronRight} className="sidebar__chevron" alt="sidebar_chevron" />
                    </div>
                </div>

                <div className="sidebar__second__content">
                    <div className="sidebar__second__context">
                        <img src={Cube} className="sidebar__shop__icon" alt="sidebar__shop" />
                        <p className="sidebar__shop__text_i">Talent management</p>
                    </div>
                    <div className="sidebar__chevron__icon">
                        <img src={ChevronRight} className="sidebar__chevron" alt="sidebar_chevron" />
                    </div>
                </div>

                <div className="sidebar__second__content">
                    <div className="sidebar__second__context">
                        <img src={CardEdit} className="sidebar__shop__icon" alt="sidebar__shop" />
                        <p className="sidebar__shop__text_i">Spend management</p>
                    </div>
                    <div className="sidebar__chevron__icon">
                        <img src={ChevronRight} className="sidebar__chevron" alt="sidebar_chevron" />
                    </div>
                </div>

                <div className="sidebar__second__content">
                    <div className="sidebar__second__context">
                        <img src={Cards} className="sidebar__shop__icon" alt="sidebar__shop" />
                        <p className="sidebar__shop__text_i">Cards</p>
                    </div>
                </div>
                <img src={Line} alt="sidebar__dotted__line" className='sidebar__line_i' />
            </div>

            <div className="sidebar__third__content__container">
                <div className="sidebar__third__content">
                    <img src={Medal} className='sidebar__medal' alt="sidebar_medal" />
                    <p className="sidebar__shop__text_i">Leaderboard</p>
                </div>

                <div className="sidebar__third__content">
                    <img src={Security} className='sidebar__medal' alt="sidebar_medal" />
                    <p className="sidebar__shop__text_i">Profile & Settings</p>
                </div>

                <div className="sidebar__second__content">
                    <div className="sidebar__second__context">
                        <img src={Radar} className="sidebar__shop__icon" alt="sidebar__shop" />
                        <p className="sidebar__shop__text_i">Bank performance</p>
                    </div>
                    <div className="sidebar__chevron__icon">
                        <img src={ChevronRight} className="sidebar__chevron" alt="sidebar_chevron" />
                    </div>
                </div>


            </div>

        </div>

    );
}

export default Sidebar;
