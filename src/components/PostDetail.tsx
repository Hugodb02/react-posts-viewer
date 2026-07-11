import type { Post, Comment} from '../types'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface PostDetailProps {
post : Post
onClose: () => void
}


const PostDetail = ({ post, onClose }: PostDetailProps) => {

  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await axios.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        setComments(response.data)
      }
      catch (error) {
        setError('Error fetching comments')
        console.error('Error fetching comments:', error)
      }
      finally {
        setLoading(false)
      }
    }

    fetchComments()
  }, [post.id])
  

  return (
    <div>
      <button onClick={onClose}>Close</button>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>Comments</h3>
      {loading && <p>Loading comments...</p>}
      {error && <p>{error}</p>}
      {!loading &&  !error && (
      comments.length === 0 ? (
        <p>No comments found.</p>
      ) : (
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              {comment.body}
            </li>
          ))}
        </ul>
      )
      )}
    </div>
  )
}

export default PostDetail