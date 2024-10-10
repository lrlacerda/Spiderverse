import Carousel from "@/components/Carousel";
import { IHeroData } from "@/interfaces/heroes";

interface IProps {
  params: {
    id: string;
  };
}

async function getData(): Promise<{ data: IHeroData[] }> {
  // const res = await fetch("http://localhost:3000/api/heroes");
  // const res = await fetch("https://spiderverse-iota.vercel.app/api/heroes");
  // const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Pega a URL da API da variável de ambiente
  // const res = await fetch(`${apiUrl}/heroes`);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/heroes`);

  if (!res.ok) {
    throw new Error("Falha ao buscar heróis");
  }

  return res.json();
}

export default async function Hero({ params: { id } }: IProps) {
  const res = await getData();

  return <Carousel heroes={res.data} activeId={id} />;
}
