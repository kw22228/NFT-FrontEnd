import styled from 'styled-components';
import { device } from '../../../../styles/variouble';

export const SnsMenu = styled.div<{ isMobile?: boolean }>`
    display: flex;
    margin: 0 1rem;
    a {
        width: 3rem;
        height: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: all 0.3s ease;

        &:hover {
            opacity: 0.6;
        }

        svg {
            fill: ${props => props.theme.body};
        }
    }

    @media (${device.mobile}) {
        display: ${props => (props.isMobile ? 'flex' : 'none')};
    }
`;
