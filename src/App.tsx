import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import type {Post} from './types'


const App = () => {

  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState<string>('')

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  )
  
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
    <input
      type="text"
      placeholder="Search posts..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
     {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        filteredPosts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
        <ul>
          {filteredPosts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>)
      )}
    </main>
  )
}


export default App