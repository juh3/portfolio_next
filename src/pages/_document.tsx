import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html style={{scrollBehavior:'smooth'}} lang="en">
       <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap"
      rel="stylesheet"
    />
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet"/>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
