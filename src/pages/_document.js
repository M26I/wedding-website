import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <meta property="og:title" content="Our wedding website - Marija & Liam" />
        <meta property="og:description" content="Please join us as we celebrate beginning our new adventure" />
      <meta property="og:image" content="https://ivanisevic-wallace-wedding.netlify.app/_next/image?url=%2Fcollage4.webp&w=1920&q=75" />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="315" />
      <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
