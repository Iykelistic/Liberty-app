import React from 'react';
import Card from 'react-bootstrap/Card';
import ArrowDown from "../assets/images/ArrowDown.svg";
import { TbCurrencyNaira } from "react-icons/tb";
import GreenDot from "../assets/images/GreenDot.svg";
import RedDot from "../assets/images/RedDot.svg";

const ThirdLayer = () => {
    return (
        <div>
            <div className="dashboard__content">
                <Card className="dashboard__third__content__card">
                    <Card className="dashboard__third__inner__card">
                        <div className="dashboard__second__inner__content">
                            <p className="total__transfer__text">Total cashout</p>

                            <div className="more__content">
                                <button className="more__btn">Today</button>
                                <img src={ArrowDown} className="more__down" alt="arrow__down" />
                            </div>
                        </div>

                        <div className="dashboard__second__context">
                            <div className="dashboard__today__content">
                                <p className="today__text">Today</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon" />
                                    <p className="today__currency__text">1,200,000</p>
                                </div>
                            </div>

                            <div className="dashboard__today__content">
                                <p className="today__text">Yesterday</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon_i" />
                                    <p className="today__currency__text">1,200,000</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Card>

                <Card className="dashboard__third__content__card">
                    <Card className="dashboard__third__inner__card">
                        <div className="dashboard__second__inner__content">
                            <p className="total__transfer__text">Transaction status</p>

                            <div className="more__content">
                                <button className="more__btn">Today</button>
                                <img src={ArrowDown} className="more__down" alt="arrow__down" />
                            </div>
                        </div>


                        <div className="dashboard__second__context">
                            <div className="dashboard__today__content">
                                <div className="dashboard__successful__content">
                                    <img src={GreenDot} className="green__icon" alt="green_icon" />
                                    <p className="today__text_i">Successful</p>
                                </div>
                                <div className="today__currency__content">
                                    <p className="today__currency__text">422</p>
                                </div>
                            </div>

                            <div className="dashboard__today__content">
                                <div className="dashboard__successful__content">
                                    <img src={RedDot} className="red__icon" alt="red_icon" />
                                    <p className="today__text_i">Failed</p>
                                </div>
                                <div className="today__currency__content">
                                    <p className="today__currency__text">18</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Card>

                <Card className="dashboard__third__content__card">
                    <Card className="dashboard__third__inner__card">
                        <div className="dashboard__second__inner__content">
                            <p className="total__transfer__text">Average transaction count</p>

                            <div className="more__content">
                                <button className="more__btn">Today</button>
                                <img src={ArrowDown} className="more__down" alt="arrow__down" />
                            </div>
                        </div>

                        <div className="dashboard__second__context average">
                            <div className="dashboard__today__content">
                                <p className="today__text">Value</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon" />
                                    <p className="today__currency__text">20,400</p>
                                </div>
                            </div>

                            <div className="dashboard__today__content">
                                <p className="today__text">Count</p>
                                <div className="today__currency__content">
                                    <p className="today__currency__text">422</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Card>

                <Card className="dashboard__third__content__card">
                    <Card className="dashboard__third__inner__card">
                        <div className="dashboard__second__inner__content">
                            <p className="total__transfer__text">Total commission</p>

                            <div className="more__content">
                                <button className="more__btn">Today</button>
                                <img src={ArrowDown} className="more__down" alt="arrow__down" />
                            </div>
                        </div>

                        <div className="dashboard__second__context">
                            <div className="dashboard__today__content">
                                <p className="today__text pos__text">POS commission</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon" />
                                    <p className="today__currency__text">81,000</p>
                                </div>
                            </div>

                            <div className="dashboard__today__content">
                                <p className="today__text lotto__text">Lotto commission</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon_i" />
                                    <p className="today__currency__text">102,000</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Card>
            </div>
        </div>
    );
}

export default ThirdLayer;
