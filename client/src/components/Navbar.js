import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Bar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    background-color: rgba(10, 40, 220, 0.8);
    border-radius: 0 0 8px 8px;
`;

const Navigation = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-left: 10px;
`;
const Authentication = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
`;

const LinkBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0 10px;
`;

const StyledLink = styled(Link)`
    font-weight: 500;
    text-decoration: none;
    color: white;
`;

const Navbar = ({ authenticated, clearStatus }) => {
    const authComponents = authenticated ? (
        <Authentication>
            <LinkBox>
                <StyledLink to="/logout" onClick={() => clearStatus()}>
                    Logout
                </StyledLink>
            </LinkBox>
        </Authentication>
    ) : (
        <Authentication>
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
        </Authentication>
    );

    const navigationComponents = (
        <Navigation>
            <LinkBox>
                <StyledLink to="/" onClick={() => clearStatus()}>
                    Home
                </StyledLink>
            </LinkBox>
            <LinkBox>
                <StyledLink to="/protected" onClick={() => clearStatus()}>
                    Protected
                </StyledLink>
            </LinkBox>
        </Navigation>
    );

    return (
        <Bar>
            {navigationComponents}
            {authComponents}
        </Bar>
    );
};

export default Navbar;
