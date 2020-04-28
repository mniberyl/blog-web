import client from "./client";
import qs from "qs";

export const writePost = ({ title, body, tags }) =>
  client.post("/api/posts", { title, body, tags });

export const readPost = (id) => client.get(`/api/posts/${id}`);

export const listPosts = ({ username, tag }) => {
  const queryString = qs.stringify({
    username,
    tag,
    // page,
  });
  return client.get(`/api/posts?${queryString}`);
};

export const updatePost = ({ id, title, body, tags }) => {
  client.patch(`/api/posts/${id}`, { title, body, tags });
};

// export const removePost = (id) => client.delete(`/api/posts/${id}`);
