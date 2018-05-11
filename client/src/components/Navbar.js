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
`;

const LinkBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    height: 100%;
`;

const StyledLink = styled(Link)`
    font-weight: 500;
    text-decoration: none;
    color: white;
`;

const Navbar = ({ authenticated, clearStatus }) => {
    const component = authenticated ? (
        <Bar>
            <LinkBox>
                <StyledLink to="/logout" onClick={() => clearStatus()}>
                    Logout
                </StyledLink>
            </LinkBox>
        </Bar>
    ) : (
        <Bar>
            <LinkBox>
                <StyledLink to="/login" onClick={() => clearStatus()}>
                    Login
                </StyledLink>
            </LinkBox>
            <LinkBox>
                <StyledLink to="/register" onClick={() => clearStatus()}>
                    Register
                </StyledLink>
            </LinkBox>
        </Bar>
    );
    return component;
};

export default Navbar;
