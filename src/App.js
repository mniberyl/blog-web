import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import LogInPage from "./pages/LogInPage";
import RegisterPage from "./pages/RegisterPage";
import PostViewerPage from "./pages/PostViewerPage";
import WritePage from "./pages/WritePage";
const App = () => {
  return (
    <>
      <title>Beryl Blog</title>
      <Route component={LogInPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={PostViewerPage} path="/post" />
      <Route component={WritePage} path="/write" />
    </>
  );
};

export default App;
