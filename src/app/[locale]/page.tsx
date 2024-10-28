import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Metadata } from "next";
import Partners from "@/components/ui/Partners";
import Aim from "@/components/aim";

export const metadata: Metadata = {
  title: "Abiya & Co.",
  description:
    "Abiya & Co. is a film school that offers world-class training and a global stage to the artists who shape the world's narratives.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Aim />
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
