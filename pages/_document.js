import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <link href="https://fonts.googleapis.com/css?family=Muli:400,500,600,700&display=swap" rel="stylesheet" type="text/css" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}