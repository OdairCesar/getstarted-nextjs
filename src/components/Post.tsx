import ListComment from "./ListComment";
import IPost from "@/interfaces/IPost";
import User from "./User";

export default function Post({ post }: { post: IPost }) {
  return (
    <>
      {post ? (
        <div className="card-post p-3 rounded-lg bg-slate-950 flex flex-col gap-1">
          <User id={post.userId} />
          
          <h2 className="card-post__title text-xl font-medium">{post.title}</h2>
          <p className="card-post__body">{post.body}</p>

          <div className="card-post__comment">
            <h2 className="card-post__comment__title">Comentarios:</h2>

            <ListComment id={post.id} />
          </div>
        </div>
      ) : ''}
    </>
  )
}
