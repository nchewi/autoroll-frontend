import About from "@/components/About";
import BlogPage from "@/components/BlogPage";
import EmailSection from "@/components/EmailSection";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <div className="pt-20"><HeroSection/></div>
    <Features/>
    <About/>
    <EmailSection/>
   </>
  );
}
