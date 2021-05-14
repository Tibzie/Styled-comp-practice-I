import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
    * {
        /* color: green; */
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        color: #383838;
    }
`



export default GlobalStyle;