import React from 'react';
import { connect } from 'react-redux';

const Status = ({ status }) => {
    let component = <div> </div>;
    if (status.error) {
        component = <div> {status.error.message} </div>;
    } else if (status.success) {
        component = <div> {status.success.message} </div>;
    }
    return component;
};

function mapStateToProps(reduxState) {
    return {
        status: reduxState.status
    };
}
export default connect(mapStateToProps)(Status);
