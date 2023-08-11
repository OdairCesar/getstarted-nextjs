import { useEffect, useState } from "react";
import ListComment from "./ListComment";
import IUser from "@/interfaces/IUser";
import axios from "axios";

export default function User({ id }: { id: number }) {
  const [user, setUser] = useState<IUser>({
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  })
  

  const getUser = async (id: number) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user: IUser = await response.data
    setUser(user)
  }

  useEffect(() => {
    getUser(id)
  })

  return (
    <>
      {user ? (
        <div className="card-post p-3 rounded-lg bg-slate-950 flex flex-col gap-1">
          <h2 className="card-post__title text-xl font-medium">{user.name}</h2>
          <p className="card-post__body">{user.email}</p>
        </div>
      ) : ''}
    </>
  )
}