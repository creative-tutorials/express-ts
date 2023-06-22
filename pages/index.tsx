import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  useEffect(() => {
    setRenderCount((prev) => prev + 1);
    renderCount === 1 ? fetchCounter() : null;
    return () => {
      setRenderCount(0);
    };
  }, [renderCount]);

  async function fetchCounter() {
    axios
      .get(`http://localhost:7501/`)
      .then(function (response) {
        const data = response.data;
        console.log(data);
        setCount(data.count);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const incrementCount = async () => {
    axios
      .get(`http://localhost:7501/add`)
      .then(function (response) {
        const data = response.data;
        console.log(data);
        setCount(data.count);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <>
      <Head>
        <title>Express Typescript</title>
        <meta
          name="description"
          content="Setup your express application with typescript"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </Head>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <Link
            href="https://github.com/creative-tutorials/express-typescript.git"
            className={styles.code}
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.559 8.855c.166 1.183.789 3.207 3.087 4.079C11 13.829 11 14.534 11 15v.163c-1.44.434-2.5 1.757-2.5 3.337 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337V15c0-.466 0-1.171 2.354-2.065 2.298-.872 2.921-2.896 3.087-4.079C19.912 8.441 21 7.102 21 5.5 21 3.57 19.43 2 17.5 2S14 3.57 14 5.5c0 1.552 1.022 2.855 2.424 3.313-.146.735-.565 1.791-1.778 2.252-1.192.452-2.053.953-2.646 1.536-.593-.583-1.453-1.084-2.646-1.536-1.213-.461-1.633-1.517-1.778-2.252C8.978 8.355 10 7.052 10 5.5 10 3.57 8.43 2 6.5 2S3 3.57 3 5.5c0 1.602 1.088 2.941 2.559 3.355ZM17.5 4c.827 0 1.5.673 1.5 1.5S18.327 7 17.5 7 16 6.327 16 5.5 16.673 4 17.5 4Zm-4 14.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5 1.5.673 1.5 1.5ZM6.5 4C7.327 4 8 4.673 8 5.5S7.327 7 6.5 7 5 6.327 5 5.5 5.673 4 6.5 4Z"></path>
            </svg>
            Fork the repo
          </Link>
        </header>
        <div className={styles.center}>
          <div className={styles.image}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id={styles.express}
              onClick={() => window.open("https://expressjs.com/")}
              width="128"
              height="128"
              viewBox="0 0 256 256"
            >
              <g fill="none">
                <rect width="256" height="256" fill="#242938" rx="60" />
                <path
                  fill="#fff"
                  d="M228 182.937a12.732 12.732 0 0 1-15.791-6.005c-9.063-13.567-19.071-26.522-28.69-39.755l-4.171-5.56c-11.454 15.346-22.908 30.08-33.361 45.371a12.23 12.23 0 0 1-15.012 5.894l42.98-57.659l-39.978-52.1a13.289 13.289 0 0 1 15.847 5.56c9.285 13.568 19.572 26.523 29.802 40.257c10.287-13.623 20.462-26.634 29.97-40.09a11.952 11.952 0 0 1 14.901-5.56l-15.513 20.573c-6.95 9.174-13.789 18.404-21.017 27.356a5.558 5.558 0 0 0 0 8.285c13.289 17.626 26.466 35.307 40.033 53.433ZM28 124.5c1.168-5.56 1.89-11.621 3.503-17.292c9.619-34.195 48.818-48.43 75.785-27.245c15.791 12.4 19.739 29.97 18.961 49.764H37.286c-1.446 35.363 24.075 56.714 56.713 45.816a33.864 33.864 0 0 0 21.518-23.965c1.724-5.56 4.504-6.505 9.786-4.893a45.145 45.145 0 0 1-21.573 32.972a52.263 52.263 0 0 1-60.884-7.784a54.767 54.767 0 0 1-13.678-32.138c0-1.89-.723-3.781-1.112-5.56A860.69 860.69 0 0 1 28 124.5Zm9.397-2.391h80.456c-.501-25.632-16.681-43.814-38.254-43.98c-24.02-.334-41.201 17.458-42.258 43.869l.056.111Z"
                />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              viewBox="0 0 48 48"
            >
              <g
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
              >
                <path d="M24.0605 10L24.0239 38" />
                <path d="M10 24L38 24" />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id={styles.typescript}
              onClick={() => window.open("https://www.typescriptlang.org/")}
              width="128"
              height="128"
              viewBox="0 0 128 128"
            >
              <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
              <path
                fill="#007acc"
                d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.58 20.58 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.78 16.78 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z"
              />
            </svg>
          </div>
          <div className={styles.button} onClick={incrementCount}>
            <button>count is {count}</button>
          </div>
        </div>
      </div>
    </>
  );
}
