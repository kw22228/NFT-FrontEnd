import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Logo = styled.div`
    background-color: ${props => props.theme.body};
    padding: 1.5rem 4rem;
    border-radius: 15px;

    cursor: pointer;
`;

export const LogoLink = styled(Link)``;
