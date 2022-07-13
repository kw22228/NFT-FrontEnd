import styled from 'styled-components';

export const Section = styled.section`
    width: 100vw;
    height: 50vh;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
`;

export const SliderContainer = styled.div`
    height: 80%;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    .swiper-slide {
        background-color: #d9d9d9;
        color: black;

        padding: 6rem 0;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

// export const SliderItem = styled.div`
//     border: 2px solid gray;

//     padding: 5rem;
//     border-radius: 50%;
//     margin-right: 1rem;

//     white-space: nowrap;
//     box-sizing: content-box;
// `;
