import Hero from "./_components/Hero";
import Menu from "../components/menu/index";
import Comments from './_components/Comments';
export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Menu />
      <Comments />
    </main>
  );
}
