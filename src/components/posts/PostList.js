import React, { useEffect } from "react";
import "./PostList.scss";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../../stores/posts";
import qs from "qs";

const PostListContainer = ({ match, location }) => {
  const dispatch = useDispatch();
  const { posts, error, loading } = useSelector(({ posts, loading, user }) => ({
    posts: posts.posts,
    error: posts.error,
    loading: loading["posts/LIST_POSTS"],
    user: user.user,
  }));

  /*
  url 파라미터를 사용할 때는 match 객체 안에 params 값 참조
  쿼리는 location 객체에 들어 있는 search 값으로 조회
  쿼리를 사용할 때는 문자열을 객체로 파싱하는 과정에서 숫자를 받아 와야 하면 parseInt 함수를 통해 숫자로 변환
*/
  useEffect(() => {
    const { username } = match.params;
    const { tag, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listPosts({ username, tag, page }));
  }, [dispatch, location.search, match.params]);

  return <PostList error={error} loading={loading} posts={posts} />;
};

const PostItem = ({ post }) => {
  const { user, _id, title, body, /* tags */ publishedDate } = post;
  return (
    <div className="postlist__list">
      <div className="postlist__list-title">
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </div>
      <div className="postlist__list-head">
        <div className="postlist__list-head-username">
          Written by&nbsp;
          <div
            className="postlist__list-head-username-id"
            username={user.username}
          >
            @{user.username}
          </div>
        </div>
        <div className="postlist__list-head-date">
          {new Date(publishedDate).toLocaleDateString()}
        </div>
      </div>
      {/* <div className="postlist__list-tags" tags={tags}>
        {tags.map((tag) => (
          <Link to={`/?tag=${tag}`} key={tag}>
            #{tag}
          </Link>
        ))}
      </div> */}
      <div className="postlist__list-contents">{body}</div>
    </div>
  );
};

const PostList = ({ error, posts, loading }) => {
  if (error) {
    return <div className="postlist">에러가 발생했습니다.</div>;
  }

  return (
    <div className="postlist">
      <div className="postlist__newpost">
        <Link to="/write">Write new post</Link>
      </div>
      {!loading && posts && (
        <div className="postlist__wrap">
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default withRouter(PostListContainer);
