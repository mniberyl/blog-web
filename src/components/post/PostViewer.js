import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./PostViewer.scss";
import { useSelector, useDispatch } from "react-redux";
import { readPost, unloadPost } from "../../stores/post";
import { withRouter } from "react-router-dom";
import { setOriginalPost } from "../../stores/write";
import { removePost } from "../../api/posts";
import PostActionButtons from "./PostActionButtons";


const PostViewerContainer = ({ match, history }) => {
  // 처음 마운트될 때 포스트 읽기 readPost API 요청
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { post, error, loading, user } = useSelector(({ post, loading, user }) => ({
    post: post.post,
    error: post.error,
    loading: loading["post/READ_POST"],
    user: user.user
  }));

  useEffect(() => {
    dispatch(readPost(postId));
    // 언마운트될 떄 리덕스에서 포스트 데이터 없애기 -> [UNLOAD_POST]: () => initialState
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    history.push('/write')
  }

  const onRemove = async () => {
    try {
      await removePost(postId);
      history.push('/');
    } catch (e) {
      console.log(e)
    }
  }

  const ownPost = (user && user._id) === (post && post.user._id)

  return <PostViewer post={post} loading={loading} error={error} actionButtons={ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />} />;
};


const PostViewer = ({ post, error, loading, actionButtons }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <div className="postviewer">존재하지 않는 포스트입니다.</div>;
    }
    return <div className="postviewer">오류 발생!</div>;
  }

  if (loading || !post) {
    return null;
  }

  const { title, body, publishedDate, tags, user } = post;

  return (
    <div className="postviewer">
      <div className="postviewer__title">{title}</div>
      <div className="postviewer__head">
        <div className="postviewer__head-username">
          Written by:&nbsp;
          <div className="postviewer__head-username-id">@{user.username}</div>
        </div>
        <div className="postviewer__head-date">
          {new Date(publishedDate).toLocaleDateString()}
        </div>
      </div>
      <div className="postviewer__tags">
        {tags.map((tag) => (
          <Link to={`/?tag=${tag}`} key={tag}>
            #{tag}
          </Link>
        ))}
      </div>
      <div
        className="postviewer__contents"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {actionButtons}
    </div>
  );
};

export default withRouter(PostViewerContainer);
