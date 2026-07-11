import React from 'react'
import type { Post } from '../types'

interface PostDetailProps {
post : Post
onClose: () => void
}

const PostDetail = ({ post, onClose }: PostDetailProps) => {

  return (
    <div>
      <button onClick={onClose}>Close</button>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default PostDetail