import { Html, Head, NextScript, Main } from 'next/document'

const _document = () => (
  <Html>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Open+Sans:wght@300;400;500;600;700;800&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default _document
