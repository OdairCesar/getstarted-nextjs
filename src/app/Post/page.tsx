import ListPost from "@/components/ListPost";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Mudando o title',
  description: "Mudando o descripiton da pagina",
  authors: [
    {
      url: "https://google.com.br",
      name: "Teste",
    }, {
      name: "Teste 02",
    }
  ],
  icons: ""
}

export default function Teste() {

  return (
    <div className="page-posts flex flex-col items-center">
      <h1 className="page-posts__title text-3xl">Posts:</h1>

      <ListPost />
    </div>
  )
}