import Head from "next/head";
import CommentModal from "../components/CommentModal";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function Home({ newsResult, randomUsersResult }) {
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
        <Widgets
          articles={newsResult.articles}
          randomUsers={randomUsersResult.results}
        />
        <CommentModal />
      </main>
    </div>
  );
}

//https://saurav.tech/NewsAPI/top-headlines/category/business/us.json

export async function getServerSideProps() {
  //Whats Happening
  const newsResult = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  ).then((res) => res.json());

  // Who to follow section
  const randomUsersResult = await fetch(
    "https://randomuser.me/api/?results=50&inc=name,login,picture"
  ).then((res) => res.json());

  return {
    props: {
      newsResult,
      randomUsersResult,
    },
  };
}
