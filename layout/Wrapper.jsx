import React from 'react'
import Head from 'next/head'
const Wrapper = ({ pageTitle, children }) => {

    return <>
        <Head>
            <title>Connor Simpson</title>
        </Head>
        {children}
    </>

}
export default Wrapper