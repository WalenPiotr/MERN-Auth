import React from 'react';
import { connect } from 'react-redux';
import StatusBar from '../components/StatusBar';
function mapStateToProps(reduxState) {
    return {
        status: reduxState.status
    };
}
export default connect(mapStateToProps)(({ status }) => (
    <StatusBar status={status} />
));
