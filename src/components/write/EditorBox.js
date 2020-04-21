import React from "react";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

const EditorBox = () => {
  return (
    <div className="editorblock">
      <div className="editorblock__title">
        <input placeholder="제목을 입력하세요." />
      </div>
      <div className="editor">
        <Editor
          initialValue="hello react editor world!"
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
        />
      </div>
    </div>
  );
};

export default EditorBox;
