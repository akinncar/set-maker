import Head from "next/head";
import Image from "next/image";
import { useState } from 'react';
import styles from "../styles/Home.module.css";

export default function Home() {
  const [urlList, setUrlList] = useState('https://www.youtube.com/watch?v=FIuMahdQEB0');

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");

    fetch('api/videos').then(function(response) {
     response.json().then(function(json) {
        console.log({json})
      });
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Set Maker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">Set Maker!</a>
        </h1>

        <p className={styles.description}>Add a youtube URL </p>
        <form onSubmit={handleSubmit}>
          <textarea
            name=""
            id=""
            cols="90"
            rows="10"
            onChange={(event) => setUrlList(event.target.value)}
            value={urlList}
          ></textarea>
          <button>Submit</button>
        </form>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
