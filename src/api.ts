import type { Post, Comment } from "./types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${BASE_URL}/posts`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Posts not found (404)");
    }
    throw new Error(`Failed to fetch posts (status ${response.status})`);
  }

  return response.json();
};

export const getComments = async (postId: number): Promise<Comment[]> => {
  const response = await fetch(`${BASE_URL}/posts/${postId}/comments`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Comments for post ${postId} not found (404)`);
    }
    throw new Error(`Failed to fetch comments (status ${response.status})`);
  }

  return response.json();
};
