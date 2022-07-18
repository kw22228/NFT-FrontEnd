import styled from 'styled-components';

export const MainSection = styled.section`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
`;

export const Img = styled.div`
    background-color: ${props => props.theme.body};

    width: 55%;
    height: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextBox = styled.div`
    /* background-color: ${props => props.theme.body}; */
    color: ${props => props.theme.body};
    font-weight: 600;
    width: 45%;
    height: 20%;
    text-align: center;
    margin-top: 5rem;
    line-height: 1.5;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Ball = styled.div<{ bg: string }>`
    /* background-color: #d9d9d9; */
    padding: 8rem;
    border-radius: 50%;

    position: absolute;
    left: 90%;
    bottom: 55%;

    background-image: url(${props => props.bg});
    background-image: cover;
`;
