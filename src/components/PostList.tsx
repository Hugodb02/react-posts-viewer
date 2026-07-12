import type { Post } from "../types";

interface PostListProps {
  posts: Post[];
  onSelectPost: (post: Post) => void;
}

const PostList = ({ posts, onSelectPost }: PostListProps) => {
  if (posts.length === 0) {
    return <p>No posts found.</p>;
  }
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.title}

          <button onClick={() => onSelectPost(post)}>View</button>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
