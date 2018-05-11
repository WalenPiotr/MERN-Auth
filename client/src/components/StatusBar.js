import React from 'react';

const StatusBar = ({ status }) => {
    let component = <div> </div>;
    if (status.error) {
        component = <div> {status.error.message} </div>;
    } else if (status.success) {
        component = <div> {status.success.message} </div>;
    }
    return component;
};

export default StatusBar;
