'use client'

import { useEffect, useState } from "react"
import axios from "axios"

import IPost from "@/interfaces/IPost"
import Post from "./Post"


export default function ListPost() {
  const [posts, setPosts] = useState<IPost[]>([])

  async function getPosts() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    const posts: IPost[] = await response.data
    setPosts(posts)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="list-post container flex flex-col gap-2">
      {posts.map((post, index) => index <= 12 
        ? <Post post={post} key={post.id} /> 
        : ''
      )}
    </div>
  )
}