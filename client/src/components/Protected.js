import React from 'react';

const Protected = ({ authenticated }) => {
    const component = authenticated ? (
        <div> Protected content</div>
    ) : (
        <div> Please log in </div>
    );

    return component;
};

export default Protected;
