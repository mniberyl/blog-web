import React from "react";
import { Link } from "react-router-dom";

import "./PostViewer.scss";

const PostViewer = ({ post, error, loading, user }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <div className="postviewer">존재하지 않는 포스트입니다.</div>;
    }
    return <div className="postviewer">오류 발생!</div>;
  }

  if (loading || !post) {
    return null;
  }

  const { title, body, publishedDate, tags } = post;

  return (
    <div className="responsive">
      <div className="postviewer">
        <div className="postviewer__head">
          <div className="postviewer__head-title">{title}</div>
          <div className="postviewer__head-username">{user.username}</div>
          <div className="postviewer__head-date">
            {new Date(publishedDate).toLocaleDateString()}
          </div>
        </div>
        <div
          className="postviewer__contents"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        <div className="postviewer__tags" tags={tags}>
          {tags.map((tag) => (
            <Link to={`/?tag=${tag}`} key={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostViewer;
