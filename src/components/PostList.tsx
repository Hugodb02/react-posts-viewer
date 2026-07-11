import React from 'react'
import type { Post } from '../types'

interface PostListProps {
  posts: Post[]
  onSelectPost: (post: Post) => void
}

const PostList = ({ posts, onSelectPost }: PostListProps) => {
  return (
      <ul>
        {posts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          posts.map(post => (
            <li key={post.id}>
              {post.title}
              <button onClick={() => onSelectPost(post)}>View</button>
            </li>
          ))
        )}

      </ul>
  )
}

export default PostList