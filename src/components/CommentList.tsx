import React from 'react'
import type { Comment } from '../types'

interface CommentListProps {
  comments: Comment[]
}

const CommentList = ({ comments }: CommentListProps) => {
  return (
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
  )
}

export default CommentList