import {
  Navigation,
  Hero,
  About,
  Menu,
  Gallery,
  Reservation,
  Footer,
} from "@/components/sections";
import { ScrollProgressBar } from "@/components/ui";

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reservation />
      <Footer />
    </>
  );
}
