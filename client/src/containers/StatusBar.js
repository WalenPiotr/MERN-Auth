import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const StatusBar = ({ status }) => {
    let component = <div> </div>;
    if (status.error) {
        component = <div> {status.error.message} </div>;
    } else if (status.success) {
        component = <div> {status.success.message} </div>;
    }
    return component;
};

StatusBar.propTypes = {};

function mapStateToProps(reduxState) {
    return {
        status: reduxState.status
    };
}
export default connect(mapStateToProps)(StatusBar);
