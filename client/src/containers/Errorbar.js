import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Errorbar = ({ error }) => {
    return <div> {error} </div>;
};

Errorbar.propTypes = {};

function mapStateToProps(reduxState) {
    return {
        error: error
    };
}
export default connect(mapStateToProps)(Errorbar);
