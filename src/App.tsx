import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import type {Post} from './types'


const App = () => {

  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
      } catch (error) {
        setError('Error fetching posts')
        console.error('Error fetching posts:', error)
      }finally {
      setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <main>
    <h1>Posts</h1>
     {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}


export default App