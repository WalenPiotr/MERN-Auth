import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Bar = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 50px;
    background-color: rgba(10, 40, 220, 0.8);
    border-radius: 0 0 8px 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 2px;
`;

const LinkBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    height: 100%;
`;

const StyledLink = styled(Link)`
    font-weight: 500;
    text-decoration: none;
    color: white;
`;

const Navbar = ({ authenticated }) => {
    const component = authenticated ? (
        <Bar>
            <LinkBox>
                <StyledLink to="/logout"> Logout </StyledLink>
            </LinkBox>
        </Bar>
    ) : (
        <Bar>
            <LinkBox>
                <StyledLink to="/login">Login</StyledLink>
            </LinkBox>
            <LinkBox>
                <StyledLink to="/register">Register</StyledLink>
            </LinkBox>
        </Bar>
    );
    return component;
};

export default Navbar;
