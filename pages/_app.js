import { GlobalStyle } from "../design/globalStyle"
import 'bootstrap-icons/font/bootstrap-icons.css'

const Portfolio = ({ Component, pageProps }) => {
  return <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
}

export default Portfolio
