import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyle from './styles/global';
import { lightTheme } from './styles/theme';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    // <React.StrictMode>
    <RecoilRoot>
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </RecoilRoot>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
