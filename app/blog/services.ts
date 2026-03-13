import { store } from "../store";
import { GetPostRepliesResponse, GetPostsResponse } from "./interfaces";

const baseUrl =
  "https://public-api.wordpress.com/rest/v1.1/sites/missionseaturtlenest.wordpress.com";

export const getPosts = async () => {
  const res = await fetch(`${baseUrl}/posts`);
  return (await res.json()) as GetPostsResponse;
};

export const getSinglePost = async (id: number) => {
  const res = await fetch(`${baseUrl}/posts/${id}`);
  return (await res.json()) as GetPostsResponse;
};

export const getReplies = async (postId: number) => {
  const res = await fetch(`${baseUrl}/posts/${postId}/replies`);
  return (await res.json()) as GetPostRepliesResponse;
};

export const getCurrentWpcomUser = async () => {
  const res = await fetch("https://public-api.wordpress.com/rest/v1.1/me", {
    headers: {
      Authorization: `Bearer ${store.getState().wpcomToken.value}`,
    },
  });
  return await res.json();
};
