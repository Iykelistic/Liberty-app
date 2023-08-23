import React from 'react';
import Card from 'react-bootstrap/Card';
import BlueCard from "../assets/images/BlueCard.svg"
import { TbCurrencyNaira } from "react-icons/tb";
import DoubleRight from "../assets/images/DoubleRight.svg";

const FirstLayer = () => {
    return (
        <div>
            <div className="dashboard__content">
                <img src={BlueCard} className="dashboard__img" alt="first__card" />
                <Card className="dashboard__content__card">
                    <Card className="dashboard__content__inner__card">
                        <p className="innercard__text__savings">Total savings balance</p>
                        <div className="innercard__naira">
                            <TbCurrencyNaira className="innercard__currency" />
                            <p className="innercard__text__amount">194,000</p>
                        </div>
                    </Card>
                    <div className="outercard__content">
                        <p className="outercard__content__text">View details</p>
                        <img src={DoubleRight} className="outercard__icon" alt="right__arrow" />
                    </div>
                </Card>

                <Card className="dashboard__content__card">
                    <Card className="dashboard__content__inner__card">
                        <p className="innercard__text__savings">Total customers</p>
                        <div className="innercard__naira">
                            <TbCurrencyNaira className="innercard__currency" />
                            <p className="innercard__text__amount">919</p>
                        </div>
                    </Card>
                    <div className="outercard__content">
                        <p className="outercard__content__text">View details</p>
                        <img src={DoubleRight} className="outercard__icon" alt="right__arrow" />
                    </div>
                </Card>

                <Card className="dashboard__content__card">
                    <Card className="dashboard__content__inner__card">
                        <p className="innercard__text__savings">Total POS</p>
                        <div className="innercard__naira">
                            <p className="innercard__text__amount">0</p>
                        </div>
                    </Card>
                    <div className="outercard__content">
                        <p className="outercard__content__text">View details</p>
                        <img src={DoubleRight} className="outercard__icon" alt="right__arrow" />
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default FirstLayer;
