export interface GetPostsResponse {
  found?: number;
  posts?: Post[];
}

export interface Post {
  ID?: number;
  author?: Author;
  date?: string;
  modified?: string;
  title?: string;
  URL?: string;
  short_url?: string;
  content?: string;
  excerpt?: string;
  slug?: string;
  guid?: string;
  status?: string;
  type?: string;
  featured_image?: string;
}

interface Author {
  login?: string;
  email?: string | boolean;
  name?: string;
  first_name?: string;
  last_name?: string;
  nice_name?: string;
  URL?: string;
  avatar_URL?: string;
  profile_URL?: string;
}

export interface GetPostRepliesResponse {
  found?: number;
  comments?: Comment[];
}

interface Comment {
  ID?: number;
  date?: string;
  content?: string;
  author?: Author;
}
