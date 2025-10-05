import Hero from "@/modules/home/Hero";
import LatestBlog from "@/modules/home/LatestBlog";
import LatestProject from "@/modules/home/LatestProject";
import Skills from "@/modules/home/Skills";

export default function Home() {
  return (
    <div className="w-full h-full flex-1 grow-1">
      <Hero />
      <Skills />
      <LatestProject />
      <LatestBlog />
    </div>
  );
}
