import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import LogInPage from "./pages/LogInPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import PostViewerPage from "./pages/PostViewerPage";
import PostListPage from "./pages/PostListPage";

const App = () => {
  return (
    <>
      <title>Beryl Blog</title>
      <div className="responsive">
        <Route component={PostListPage} path={["/@:username", "/"]} exact />
        <Route component={LogInPage} path="/login" />
        <Route component={RegisterPage} path="/register" />
        <Route component={WritePage} path="/write" />
        <Route component={PostViewerPage} path="/@:username/:postId" />
      </div>
    </>
  );
};

export default App;
