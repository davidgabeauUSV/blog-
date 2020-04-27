import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
      return (
        <html lang="en">
          <Head>
              <meta
                name="description"
                content="this could be cool"
              />
              <meta charSet="utf-8"/>
              <meta name="robots" />
              <meta name="viewport" content="width=device-width" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.js"
          />
          <link
           rel="stylesheet"
           href="https://fonts.googleapis.com/css?family=Bangers&display=swap"
           />
          </Head>

          <body>

            <Main />
            <NextScript />
          </body>
          <style global jsx>{`
            body {
              font-family: "Bangers" , cursive;
            }
            `}</style>
        </html>
      )
    }
}
