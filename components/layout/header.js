import Head from 'next/head'

export default function header(params) {
    
    return(
        <Head> 

            <title>My portfolio</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;1,400&family=Roboto+Mono:wght@200;300;400;500&display=swap" rel="stylesheet"></link>

        </Head>
    )

}