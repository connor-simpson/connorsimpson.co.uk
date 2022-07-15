import { GlobalStyle } from "../design/globalStyle"
import 'bootstrap-icons/font/bootstrap-icons.css'
import { AppProps } from "../node_modules/next/app"

const Portfolio = ({ Component, pageProps }: AppProps) => {
  return <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
}

export default Portfolio
