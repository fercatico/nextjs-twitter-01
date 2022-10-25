import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function Home({ newsResult }) {
  return (
    <div>
      <Head>
        <title>Twitter Clome</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen mx-auto">
        <Sidebar />
        <Feed />
        <Widgets articles={newsResult.articles} />
      </main>
    </div>
  );
}

//https://saurav.tech/NewsAPI/top-headlines/category/business/us.json

export async function getServerSideProps() {
  const newsResult = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  ).then((res) => res.json());
  return {
    props: {
      newsResult,
    },
  };
}
