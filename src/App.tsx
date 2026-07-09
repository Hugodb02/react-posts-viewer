import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import type {Post} from './types'


const App = () => {

  const [posts, setPosts] = useState<Post[]>([])
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <main>
    <h1>Posts</h1>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
    </main>
    
    
  )
}

export default App