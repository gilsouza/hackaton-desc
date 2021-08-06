import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family:AprovaSans;
    src:url(https://d3awytnmmfk53d.cloudfront.net/landings/static/fonts/aprova-sans/Aprova-Regular.woff2) format("woff2"),url(https://d3awytnmmfk53d.cloudfront.net/landings/static/fonts/aprova-sans/Aprova-Regular.woff) format("woff"),url(https://d3awytnmmfk53d.cloudfront.net/landings/static/fonts/aprova-sans/Aprova-Regular.otf) format("opentype"),url(https://d3awytnmmfk53d.cloudfront.net/landings/static/fonts/aprova-sans/Aprova-Regular.ttf) format("truetype");
    font-style:normal
  }

  @font-face{
    font-family:AprovaSansBold;
    src:url(https://d3awytnmmfk53d.cloudfront.net/landings/static/fonts/aprova-sans/Aprova-Bold.woff2) format("woff2"),url(https://d3awytnmmfk53d.cloudfront.net/landings/static/fonts/aprova-sans/Aprova-Bold.woff) format("woff"),url(https://d3awytnmmfk53d.cloudfront.net/landings/static/fonts/aprova-sans/Aprova-Bold.otf) format("opentype"),url(https://d3awytnmmfk53d.cloudfront.net/landings/static/fonts/aprova-sans/Aprova-Bold.ttf) format("truetype");
    font-weight:800;
    font-style:normal
  }

  @font-face{
    font-family:AprovaSansBlack;
    src:url(https://d3awytnmmfk53d.cloudfront.net/landings/static/fonts/aprova-sans/Aprova-Black.woff2) format("woff2"),url(https://d3awytnmmfk53d.cloudfront.net/landings/static/fonts/aprova-sans/Aprova-Black.woff) format("woff"),url(https://d3awytnmmfk53d.cloudfront.net/landings/static/fonts/aprova-sans/Aprova-Black.otf) format("opentype"),url(https://d3awytnmmfk53d.cloudfront.net/landings/static/fonts/aprova-sans/Aprova-Black.ttf) format("truetype");
    font-weight:900;
    font-style:normal
  }

  @font-face{
    font-family:Descomplica;
    src:url(https://d3awytnmmfk53d.cloudfront.net/landings/static/fonts/Descomplica-Medium.otf) format("opentype");
    font-weight:500;
    font-style:normal
  }

  @font-face{
    font-family:InterUI;
    src:url(https://d3awytnmmfk53d.cloudfront.net/landings/static/fonts/inter-ui/Inter-UI-Regular.woff2) format("woff2"),url(https://d3awytnmmfk53d.cloudfront.net/landings/static/fonts/inter-ui/Inter-UI-Regular.woff) format("woff");
    font-weight:400;
    font-style:normal
  }

  *{
    font-family: AprovaSans;
  }

  :root {
    --primary-color: #00E88F;
    --primary-color-dark: #00C86F;
    --secondary-color: black;
    --third-color: white;
    --background-color: #F5F5F5;
  }

`;

export { GlobalStyle };
