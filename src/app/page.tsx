import "./editorial.css";
import { About, Hero, Marquee, Services, Work } from "@/components/home/sections";
import { FAQ } from "@/components/home/FAQ";
import { Contact } from "@/components/home/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Marquee />
      <Work />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}
