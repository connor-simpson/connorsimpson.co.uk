import { GlobalStyle } from "../design/globalStyle"

const Portfolio = ({ Component, pageProps }) => {
  return <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
}

export default Portfolio
