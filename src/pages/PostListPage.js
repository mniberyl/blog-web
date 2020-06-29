import React from "react";
import Header from "../components/header/Header";
import PostList from "../components/posts/PostList";
import Paginstion from "../components/posts/Pagination";

const PostListPage = () => {
  return (
    <div>
      <Header />
      <PostList />
      <Paginstion />
    </div>
  );
};

export default PostListPage;
