import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
   :root {
      --background-color: #111;
      --text-color: #fff;
   }

   * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
   }

   a {
   text-decoration: none;
   }

   /* user-agent font-size is 16px */

   @media(max-width: 1080px) {
      :root {
         font-size: 93.75%; /* 15px */
      }
   }

   @media(max-width: 970px) {
      :root {
         font-size: 87.5%; /* 14px */
      }
   }

   @media(max-width:700px) {
      :root {
         font-size: 75%; /* 12px */
      }
   }

   @media(max-width: 590px) {
      :root {
         font-size: 62.25%; /* 10px */
      }
   }

   body {
      background-color: var(--background-color);
      color: var(--text-color);
      font-family: Roboto, sans-serif;
   }
`
