'use client'

import { useEffect, useState } from "react";
import axios from "axios";

import Comment from "@/components/Comment";

export default function ListComment({ id }: { id: number }) {
  const [comments, setComments] = useState<IComment[]>([])

  async function getComments(id: number) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    const comments: IComment[] = response.data
    setComments(comments)
  }

  useEffect(() => {
    getComments(id)
  }, [])

  return (
    <div className="list-comment flex flex-col gap-2">
      {comments?.map(comment =>
        <Comment comment={comment} key={comment.id} />
      )}
    </div>
  )
}