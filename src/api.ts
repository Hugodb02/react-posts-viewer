import axios from 'axios'
import type { Post, Comment } from './types'


const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

export const getPosts = async () => {
    const response = await api.get<Post[]>('/posts')
    return response.data
}

export const getComments = async (postId: number) => {
  const response = await api.get<Comment[]>(`/posts/${postId}/comments`)
  return response.data
}