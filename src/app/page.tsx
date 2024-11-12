import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Hero2 />
      <Pricing />
    </div>
  );
}
