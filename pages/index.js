import React from "react";
import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";

import Header from "./components/header";
import Content from "./components/content";

export default function Home() {
  let title = "ともすた";
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  console.log(fetcher);
  const { data, error } = useSWR("/api/message", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Content>
      <Head>
        <title>{title}</title>
      </Head>
      <Header title={title} />
      <p>{data.message}</p>
      <div>
        <Link href="/about">About</Link>
      </div>
      <style jsx>
        {`
          h1 {
            color: white;
          }
        `}
      </style>
    </Content>
  );
}
