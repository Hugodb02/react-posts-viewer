import { useState, useEffect } from 'react'
import type {Post} from './types'
import PostDetail from './components/PostDetail'
import SearchBox from './components/SearchBox'
import PostList from './components/PostList'
import { getPosts } from './api'


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
        const fetchedPosts = await getPosts()
        setPosts(fetchedPosts)
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
    <SearchBox searchTerm={searchTerm} onSearchChange={setSearchTerm} />
     {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        selectedPost !== null ? (
          <PostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />
        ) : (
          <PostList posts={filteredPosts} onSelectPost={setSelectedPost} />
        )
      )}
    </main>
  )
}


export default App