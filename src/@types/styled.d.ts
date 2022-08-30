import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        type: 'dark' | 'light';
        body: string;
        text: string;
        headerText: string;
        accentColor: string;
        bodyRgba: string;
        textRgba: string;
    }
}
