import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <>
    <Html lang="en">
      <Head>
        <title>KUBI DAO</title>
        <meta name="description" content="The official DAO of the KU Blockchain Institute" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="KUBI DAO" />
        <meta property="og:description" content="The KUBI DAO: a decentralized autonomous organization founded at the University of Kansas" />
        <meta property="og:url" content="https://dao.kublockchain.com/" />
      </Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
        rel="stylesheet"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    </>
  );
}
