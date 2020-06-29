import React, { useCallback, useEffect, useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initialize } from "../../stores/write";
import "./EditorBox.scss";

const EditorBoxContainer = () => {
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));

  // 나중에 Editor에서 사용할 useEffect가 컴포넌트가 화면에 나타났을 때 딱 한 번만 실행되기 때문
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );

  // 언마운트될 때 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return <EditorBox onChangeField={onChangeField} title={title} body={body} />;
};

const EditorBox = ({ title, onChangeField }) => {
  const editorRef = useRef();

  const onChangeBody = (e) => {
    const tuiinstance = editorRef.current.getInstance().getMarkdown();
    onChangeField({ key: "body", value: tuiinstance });
  };

  const onChangeTitle = (e) => {
    onChangeField({ key: "title", value: e.target.value });
  };

  return (
    <div className="editorblock">
      <div className="editorblock__title">
        <input
          placeholder="제목을 입력하세요."
          onChange={onChangeTitle}
          value={title}
        />
      </div>
      <div className="editor">
        <Editor
          previewStyle="vertical"
          height="500px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          onChange={onChangeBody}
          ref={editorRef}
        />
      </div>
    </div>
  );
};

export default EditorBoxContainer;
