import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 8px;
`;

const ErrorBar = styled(Bar)`
    background-color: rgba(250, 0, 0, 0.2);
`;

const SuccessBar = styled(Bar)`
    background-color: rgba(0, 250, 0, 0.2);
`;

const StatusBar = ({ status }) => {
    let component = <Bar> </Bar>;
    console.log(status);
    if (status.error && status.error.message) {
        component = <ErrorBar> {status.error.message} </ErrorBar>;
    } else if (status.success && status.success.message) {
        component = <SuccessBar> {status.success.message} </SuccessBar>;
    }
    return component;
};

export default StatusBar;
