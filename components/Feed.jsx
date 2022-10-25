import { SparklesIcon } from "@heroicons/react/24/outline";
import React from "react";
import Input from "./Input";
import Post from "./Post";

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Miguel Fernandez",
      username: "fercatico",
      userImg:
        "https://miguelfernandezcampos.netlify.app/static/media/profile-me.eb956e776aecf778c968.jpg",
      img: "https://images.unsplash.com/photo-1666009812623-31fb98d10579?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
      text: "nice view!",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Miguel Fernandez",
      username: "fercatico",
      userImg:
        "https://miguelfernandezcampos.netlify.app/static/media/profile-me.eb956e776aecf778c968.jpg",
      img: "https://images.unsplash.com/photo-1666107677986-c264fc8f908e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      text: "Wow!",
      timestamp: "2 days ago",
    },
  ];

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
