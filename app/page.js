import { FAQ } from "@/components/FAQ";
import { Header } from "@/components/Hearder";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Pricing/>
      <FAQ/>
    </main>
  );
}
