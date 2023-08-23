import React from 'react';
import Card from 'react-bootstrap/Card';
import ArrowDown from "../assets/images/ArrowDown.svg";
import { TbCurrencyNaira } from "react-icons/tb";

const SecondLayer = () => {
    return (
        <div>
            <div className="dashboard__content">
                <Card className="dashboard__second__content__card">
                    <Card className="dashboard__second__inner__card">
                        <div className="dashboard__second__inner__content">
                            <p className="total__transfer__text">Total transfer</p>

                            <div className="more__content">
                                <button className="more__btn">More</button>
                                <img src={ArrowDown} className="more__down" alt="arrow__down" />
                            </div>
                        </div>

                        <div className="dashboard__second__context">
                            <div className="dashboard__today__content">
                                <p className="today__text">Today</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon" />
                                    <p className="today__currency__text">500</p>
                                </div>
                            </div>

                            <div className="dashboard__today__content">
                                <p className="today__text">Yesterday</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon_i" />
                                    <p className="today__currency__text">200</p>
                                </div>
                            </div>
                        </div>

                        <div className="dashboard__second__context">
                            <div className="dashboard__today__content">
                                <p className="today__text">This week</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon" />
                                    <p className="today__currency__text">500</p>
                                </div>
                            </div>

                            <div className="dashboard__today__content">
                                <p className="today__text">Last week</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon_i" />
                                    <p className="today__currency__text">200</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Card>

                <Card className="dashboard__second__content__card">
                    <Card className="dashboard__second__inner__card">
                        <div className="dashboard__second__inner__content">
                            <p className="total__transfer__text">Total inflow</p>

                            <div className="more__content">
                                <button className="more__btn">More</button>
                                <img src={ArrowDown} className="more__down" alt="arrow__down" />
                            </div>
                        </div>

                        <div className="dashboard__second__context">
                            <div className="dashboard__today__content">
                                <p className="today__text">Today</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon" />
                                    <p className="today__currency__text">2,000,000</p>
                                </div>
                            </div>

                            <div className="dashboard__today__content">
                                <p className="today__text">Yesterday</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon_i" />
                                    <p className="today__currency__text">5,000,000</p>
                                </div>
                            </div>
                        </div>

                        <div className="dashboard__second__context">
                            <div className="dashboard__today__content">
                                <p className="today__text">This week</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon" />
                                    <p className="today__currency__text">5,000,000</p>
                                </div>
                            </div>

                            <div className="dashboard__today__content">
                                <p className="today__text">Last week</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon_i" />
                                    <p className="today__currency__text">5,000,000</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Card>

                <Card className="dashboard__second__content__card">
                    <Card className="dashboard__second__inner__card">
                        <div className="dashboard__second__inner__content">
                            <p className="total__transfer__text">Total transactions</p>

                            <div className="more__content">
                                <button className="more__btn">More</button>
                                <img src={ArrowDown} className="more__down" alt="arrow__down" />
                            </div>
                        </div>

                        <div className="dashboard__second__context">
                            <div className="dashboard__today__content">
                                <p className="today__text">Today</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon" />
                                    <p className="today__currency__text">2,000,000</p>
                                </div>
                            </div>

                            <div className="dashboard__today__content">
                                <p className="today__text">Yesterday</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon_i" />
                                    <p className="today__currency__text">5,000,000</p>
                                </div>
                            </div>
                        </div>

                        <div className="dashboard__second__context">
                            <div className="dashboard__today__content">
                                <p className="today__text">This week</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon" />
                                    <p className="today__currency__text">5,000,000</p>
                                </div>
                            </div>

                            <div className="dashboard__today__content">
                                <p className="today__text">Last week</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon_i" />
                                    <p className="today__currency__text">5,000,000</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Card>

                <Card className="dashboard__second__content__card">
                    <Card className="dashboard__second__inner__card">
                        <div className="dashboard__second__inner__content">
                            <p className="total__transfer__text">Transaction count</p>

                            <div className="more__content">
                                <button className="more__btn">More</button>
                                <img src={ArrowDown} className="more__down" alt="arrow__down" />
                            </div>
                        </div>

                        <div className="dashboard__second__context">
                            <div className="dashboard__today__content">
                                <p className="today__text">Today</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon" />
                                    <p className="today__currency__text">2,000,000</p>
                                </div>
                            </div>

                            <div className="dashboard__today__content">
                                <p className="today__text">Yesterday</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon_i" />
                                    <p className="today__currency__text">5,000,000</p>
                                </div>
                            </div>
                        </div>

                        <div className="dashboard__second__context">
                            <div className="dashboard__today__content">
                                <p className="today__text">This week</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon" />
                                    <p className="today__currency__text">5,000,000</p>
                                </div>
                            </div>

                            <div className="dashboard__today__content">
                                <p className="today__text">Last week</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon_i" />
                                    <p className="today__currency__text">5,000,000</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Card>
            </div>
        </div>
    );
}

export default SecondLayer;
