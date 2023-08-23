import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import MobileDashboard from './MobileDashboard';

const MainDashboard = () => {
    return (
        <>
            <div className="maindashboard__container">
                <Sidebar />
                <Dashboard />
            </div>
            <MobileDashboard />
        </>
    );
}

export default MainDashboard;
