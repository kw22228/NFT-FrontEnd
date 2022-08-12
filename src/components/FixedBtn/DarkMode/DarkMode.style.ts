import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Container = styled(motion.div)`
    position: absolute;
    bottom: 90px;
    right: 0;
`;

export const Lottie = styled.div`
    width: 3.5rem;
    height: 3.5rem;

    border-radius: 50%;
    overflow: hidden;

    cursor: pointer;
`;
