import type { Comment } from '../types'

interface CommentListProps {
  comments: Comment[]
}

const CommentList = ({ comments }: CommentListProps) => {
  if (comments.length === 0) {
    return <p>No comments found.</p>
  }

  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>{comment.body}</li>
      ))}
    </ul>
  )
}

export default CommentList