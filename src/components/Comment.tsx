export default function Comment({ comment }: { comment: IComment }) {
  return (
    <div className="card__comment bg-slate-800 p-3 rounded-lg">
      <div className="card__comment__email flex flex-wrap gap-1">
        <span className="text-sm font-sans text-slate-400 font-bold">Usuario:</span> 
        {comment.email}
      </div>

      <div className="card__comment__name flex flex-wrap gap-1"> 
        <span className="text-sm font-sans text-slate-400 font-bold">Title:</span> 
        {comment.name}
      </div>

      <div className="card__comment__body flex flex-wrap gap-1">
        <span className="text-sm font-sans text-slate-400 font-bold">Comentario:</span>
        {comment.body}
      </div>
    </div>
  )
}