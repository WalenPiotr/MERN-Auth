import React from 'react';
import styled from 'styled-components';
const Box = styled.div`
    display: flex;
    justify-content: center;
`;

const Protected = ({ authenticated }) => {
    const component = authenticated ? (
        <h1> Protected content</h1>
    ) : (
        <h1> Please log in </h1>
    );

    return <Box>{component}</Box>;
};

export default Protected;
