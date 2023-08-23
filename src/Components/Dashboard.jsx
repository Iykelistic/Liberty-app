import React from 'react';
import Header from './Header';
import FirstLayer from './FirstLayer';
import SecondLayer from './SecondLayer';
import ThirdLayer from './ThirdLayer';
import FourthLayer from './FourthLayer';


const Dashboard = () => {
    return (
        <div className="dashboard__container">
            <Header />
            <FirstLayer />
            <SecondLayer />
            <ThirdLayer />
            <FourthLayer />
        </div>
    );
}

export default Dashboard;
