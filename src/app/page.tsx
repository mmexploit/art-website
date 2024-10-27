import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import Partners from "../components/ui/Partners";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <div className=" flex flex-col gap-6 my-[6%] mx-5 md:mx-20">
        <h1 className="text-3xl md:text-4xl text-orange-500 font-bold "> Who We Are & Our Aim</h1>
        <p className="px-10 text-xl w-full md:w-[90%] text-justify"> Abiya was born from a simple belief: Talent is everywhere, but opportunity is rare. We are committed to bringing world-class training and a global stage to the artists who shape the world &rsquo; s narratives. Our team is made up of industry pioneers and passionate mentors whose commitment goes beyond teaching they&rsquo;re here to inspire and equip you for a lifelong career in film.</p>
        <div className="self-end md:w-[35%] flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-orange-500">Founder&rsquo;s Message - </h2>
          <p>“Our vision is to see the art of storytelling become the heartbeat of the world&rsquo;s culture. &rsquo; </p>
          <span className="text-orange-500 font-bold self-end">– Gezahegn</span>
        </div>
      </div>
      <Features />
      <Video />
      {/* <Brands /> */}
      <Partners />
      <AboutSectionOne />
      <AboutSectionTwo />
      
      {/* <Pricing /> */}
      
      {/* <Contact /> */}
    </>
  );
}
