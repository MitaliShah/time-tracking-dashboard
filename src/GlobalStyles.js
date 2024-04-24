import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
    box-sizing: border-box;
    }
    * {
    margin: 0;
    }
    body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    }
    img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    }
    input, button, textarea, select {
    font: inherit;
    }
    p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    }
    #root, #__next {
    isolation: isolate;
    }

    body {
        font-family: "Rubik", sans-serif;
        font-optical-sizing: auto;
        font-size: 18px;
        font-weight: 300;
        font-style: normal;
        background-color: hsl(0, 0%, 0%);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    :root{
        /* Primary */
        --blue: hsl(246, 80%, 60%);
        --work-light-red: hsl(15, 100%, 70%);
        --play-soft-blue: hsl(195, 74%, 62%);
        --study-light-red: hsl(348, 100%, 68%);
        --exercise-lime-green: hsl(145, 58%, 55%);
        --social-violet: hsl(264, 64%, 52%);
        --self-care-soft-orange: hsl(43, 84%, 65%);

        /* Neutral*/

        --very-dark-blue: hsl(226, 43%, 10%);
        --dark-blue: hsl(235, 46%, 20%);
        --desaturated-blue: hsl(235, 45%, 61%);
        --pale-blue: hsl(236, 100%, 87%);
        --white: hsl(0,100%, 100%);
    }
`;

export default GlobalStyles;
