import React from "react";
import "./Pagination.scss";
import qs from "qs";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";


const PaginationContainer = ({ location, match }) => {
  const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading["posts/LIST_POSTS"],
  }));

  // 포스트 데이터가 없거나 로딩 중이면 아무것도 보여주지 않음
  if (!posts || loading) return null;

  const { username } = match.params;

  // page가 없으면 기본값으로 1 사용
  const { tag, page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      tag={tag}
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
};



const Pagination = ({ tag, username, page, lastPage }) => {
  const buildLink = ({ username, tag, page }) => {
    const query = qs.stringify({ tag, page });
    return username ? `/@${username}?${query}` : `/?${query}`;
  };

  return (
    <div className="pagination">
      <Link
        disabled={page === 1}
        to={
          page === 1 ? "" : buildLink({ username, tag, page: page - 1 })
        }
      >
        이전
      </Link>
      <div>{page}</div>
      <Link
        disabled={page === lastPage}
        to={
          page === lastPage
            ? ""
            : buildLink({ username, tag, page: page + 1 })
        }
      >
        다음
      </Link>
    </div>
  );
};

export default withRouter(PaginationContainer);
