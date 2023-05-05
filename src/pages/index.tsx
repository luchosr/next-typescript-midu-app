import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import App from "./App";
import TollgateStatus from "./TollgateStatus";
import GridTest from "./GridTest";
import UI04 from "./UI04";
import { UI25 } from "./UI25";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <App /> */}
        {/* <TollgateStatus /> */}
        {/* <GridTest /> */}
        {/* <UI04 /> */}
        <UI25 />
      </main>
    </>
  );
}
