import Post from "@/interfaces/IPost";
import { GetStaticProps, InferGetStaticPropsType, Metadata } from "next";

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

export default function Teste({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="bg-white">
      {posts?.map(elemento =>
        <div className="post" key={elemento.id}>
          <h1>{elemento.title}</h1>
          <p>{elemento.body}</p>
        </div>
      )}
    </div>
  )
}

export const getStaticProps: GetStaticProps<{
  posts: Post[]
}> = async () => {
  const response: Response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();
  return { props: { posts } };
}