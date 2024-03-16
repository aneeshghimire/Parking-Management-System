import Image from "next/image";
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import { Poppins } from "next/font/google";

const poppins= Poppins({ subsets: ["latin"], weight:["400","500","600","700","800"] });

export default function Home() {
  return (
   <div className={poppins.className}>
        <Navigation/>
        <Hero/>
   </div>
  );
}
