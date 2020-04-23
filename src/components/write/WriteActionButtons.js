import React, { useEffect } from "react";
import "./WriteActionButtons.scss";
import { useDispatch, useSelector } from "react-redux";
import { writePost, updatePost } from "../../stores/write";
import { withRouter } from "react-router-dom";

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, body, tags, post, postError, originalPostId } = useSelector(
    ({ write }) => ({
      title: write.write,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
      originalPostId: write.originalPostId,
    })
  );

  // 포스트 등록
  const onPublish = () => {
    if (originalPostId) {
      dispatch(updatePost({ title, body, tags, id: originalPostId }));
      return;
    }
    dispatch(
      writePost({
        title,
        body,
        tags,
      })
    );
  };

  // 포스트 취소
  const onCancel = () => {
    history.goBack();
  };

  // 성공 또는 실패한 경우 할 작업
  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      history.push(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  });

  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalPostId}
    />
  );
};

const WriteActionButtons = ({ onPublish, onCancel, isEdit }) => {
  return (
    <div className="responsive">
      <div className="writeaction">
        <button
          className="writeaction__button writeaction__button--publish"
          onClick={onPublish}
        >
          포스트 {isEdit ? "수정" : "등록"}
        </button>
        <button
          className="writeaction__button writeaction__button--cancel"
          onClick={onCancel}
        >
          취소
        </button>
      </div>
    </div>
  );
};

export default withRouter(WriteActionButtonsContainer);
