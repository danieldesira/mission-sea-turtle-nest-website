import { GetPostsResponse, Post } from "./interfaces";

const baseUrl =
  "https://public-api.wordpress.com/rest/v1.1/sites/missionseaturtlenest.wordpress.com";

export const getPosts = async () => {
  const res = await fetch(`${baseUrl}/posts`);
  return (await res.json()) as GetPostsResponse;
};

export const getSinglePost = async (id: number) => {
  const res = await fetch(`${baseUrl}/posts/${id}`);
  return (await res.json()) as Post;
};
