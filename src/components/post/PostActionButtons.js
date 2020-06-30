import React, { useState } from "react";
import "./PostActionButtons.scss";
import AskRemoveDialog from './AskRemoveDialog';

const PostActionButtons = ({ onEdit, onRemove }) => {
  const [dialog, setDialog] = useState(false);

  const onRemoveClick = () => {
    setDialog(true);
  }

  const onConfirm = () => {
    setDialog(false);
    onRemove();
  }

  const onCancle = () => {
    setDialog(false);
  }

  return (
    <>
      <div className="post_action">
        <button className="post_action__btns post_action__btns--edit" onClick={onEdit}>수정</button>
        <button className="post_action__btns post_action__btns--remove" onClick={onRemoveClick}>삭제</button>
      </div>
      <AskRemoveDialog visible={dialog} onConfirm={onConfirm} onCancle={onCancle} />
    </>
  )
}

export default PostActionButtons;
