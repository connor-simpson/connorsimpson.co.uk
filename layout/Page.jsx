import Head from "next/head"
import styled from "styled-components"

const Page = ({children}) => {

    return <> 
        <Head>
            <title>Connor Simpson</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Flamenco:wght@300;400&display=swap" rel="stylesheet" />
        </Head>
        {children}
    </>

}

export default Page