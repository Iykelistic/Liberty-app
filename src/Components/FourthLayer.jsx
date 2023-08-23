import React from 'react';
import Card from 'react-bootstrap/Card';
import ArrowDown from "../assets/images/ArrowDown.svg";
import { TbCurrencyNaira } from "react-icons/tb";
import BlueDot from "../assets/images/BlueDot.svg";
import YellowDot from "../assets/images/YellowDot.svg";
import WhiteDot from "../assets/images/WhiteDot.svg";
import PieChart from "../assets/images/PieChart.svg";

const FourthLayer = () => {
    return (
        <div>
            <div className="dashboard__content__i">
                <Card className="dashboard__second__content__card fourth__card">
                    <Card className="dashboard__second__inner__card">
                        <div className="dashboard__second__inner__content">
                            <p className="total__transfer__text">Average commission per transaction</p>

                            <div className="more__content">
                                <button className="more__btn">Today</button>
                                <img src={ArrowDown} className="more__down" alt="arrow__down" />
                            </div>
                        </div>

                        <div className="dashboard__second__context fourth__section">
                            <div className="dashboard__today__content">
                                <p className="today__text  pos__text">POS commission</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon" />
                                    <p className="today__currency__text">800</p>
                                </div>
                            </div>

                            <div className="dashboard__today__content">
                                <p className="today__text lotto__text">Lotto commission</p>
                                <div className="today__currency__content">
                                    <TbCurrencyNaira className="currency__icon_i" />
                                    <p className="today__currency__text">200</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Card>

                <Card className="dashboard__fourth__content__card">
                    <div className="dashboard__fourth__content">
                        <p className='transaction__comp'>Transaction Comparative</p>

                        <div className="transaction__money">
                            <img src={BlueDot} className="bluedot" alt="blue__icon" />
                            <p className='sendmoney__text'>Send money</p>
                        </div>

                        <div className="transaction__cash">
                            <TbCurrencyNaira className="transaction__currency" />
                            <p className="transaction__cash__text">105,000,000</p>
                        </div>

                        <div className="transaction__cashout">
                            <div className="transaction__cashout__content">
                                <img src={YellowDot} className="yellowDot" alt="yellow__icon" />
                                <p className="cashout__text">Cashout</p>
                            </div>

                            <div className="transaction__cashout__content_i">
                                <img src={WhiteDot} className="yellowDot" alt="yellow__icon" />
                                <p className="cashout__text">Utilities and Bills</p>
                            </div>
                        </div>

                        <div className="transaction__cashout">
                            <div className="transaction__cashout__content">
                                <TbCurrencyNaira className="transaction__currency" />
                                <p className="transaction__cash__text">12,000,000</p>
                            </div>

                            <div className="transaction__cashout__content_i currency__i">
                                <TbCurrencyNaira className="transaction__currency" />
                                <p className="transaction__cash__text">4,200,000</p>
                            </div>
                        </div>
                    </div>
                    <img src={PieChart} className="piechart" alt="piechart__icon" />
                </Card>
            </div>
        </div>
    );
}

export default FourthLayer;
