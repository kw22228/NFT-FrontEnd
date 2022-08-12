import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize};
    
    *, *::before, *::after{
        margin:0;
        padding:0;
        
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

        font-family: 'Mochiy Pop One', sans-serif;

    }
    main{
        overflow-x: hidden;
        overflow: hidden;

        background: ${props =>
            props.theme.type === 'dark'
                ? 'linear-gradient(#016737, #002514)'
                : 'linear-gradient(#82BB00, #6CA33D)'};

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
