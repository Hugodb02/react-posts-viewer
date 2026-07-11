import { useState, useEffect } from 'react'
import axios from 'axios'
import type {Post} from './types'
import PostDetail from './components/PostDetail'


const App = () => {

  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  const filteredPosts : Post[] = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  )
  
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      setError(null)
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
        selectedPost !== null ? (
          <PostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />
        ) : filteredPosts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          <ul>
            {filteredPosts.map(post => (
              <li key={post.id}>
                {post.title}
                  <button onClick={() => setSelectedPost(post)}>View</button>
              </li>
            ))}
          </ul>
        )
      )}
    </main>
  )
}


export default App