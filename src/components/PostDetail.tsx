import type { Post, Comment } from "../types";
import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { getComments } from "../api";

interface PostDetailProps {
  post: Post;
  onClose: () => void;
}

const PostDetail = ({ post, onClose }: PostDetailProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedComments = await getComments(post.id);
        setComments(fetchedComments);
      } catch (error) {
        setError("Error fetching comments");
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [post.id]);

  return (
    <div>
      <button onClick={onClose}>Close</button>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>Comments</h3>
      {loading && <p>Loading comments...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <CommentList comments={comments} />}
    </div>
  );
};

export default PostDetail;
