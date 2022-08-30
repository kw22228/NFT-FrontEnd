import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import VITRO_CORE from '../assets/fonts/vitroCore.woff2';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'VITRO CORE OTF';
        src: url(${VITRO_CORE}) format('woff2');
        unicode-range: U+AC00-D7A3;
    }

    ${normalize};

    *, *::before, *::after{
        margin:0;
        padding:0;
        
    }
    *:focus{
        outline:0;
    }
    html{
        overflow-x: hidden;
        overflow: hidden;
    }
    body{
        width: 100vw;
        overflow-x: hidden;
        overflow: hidden;
        
        /* background: linear-gradient(#016737, #002514); */
        font-family: 'Mochiy Pop One', 'VITRO CORE OTF', sans-serif;
        font-weight: 600;
        background-color: #63BFA6;
        /* font-family: 'VITRO CORE OTF'; */

    }
    main{
        overflow-x: hidden;
        overflow: hidden;

        /* background: ${props =>
            props.theme.type === 'dark'
                ? 'linear-gradient(#016737, #002514)'
                : 'linear-gradient(#8ed054, #a1d820)'}; */

    }
    h1, h2, h3, h4, h5, h6{
        margin: 0;
        padding: 0;
    }
    a{
        color: inherit;
        text-decoration: none;
    }

    //hide scroll bar
    ::-webkit-scrollbar {
        width: 0px; 
    }
    
    // locomotive scroll no flickering
    .has-scroll-smooth {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    
`;

export default GlobalStyle;
