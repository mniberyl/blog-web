import React from "react";
import Header from "../components/header/Header";
import EditorBox from "../components/write/EditorBox";
import TagBox from "../components/write/TagBox";
import WriteActionButtons from "../components/write/WriteActionButtons";

const WritePage = () => {
  return (
    <div>
      <Header />
      <EditorBox />
      <TagBox />
      <WriteActionButtons />
    </div>
  );
};

export default WritePage;
