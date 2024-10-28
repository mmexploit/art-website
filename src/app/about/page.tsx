import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Empowering the film Industry of Africa is Our Proiority"
      />
      <div className=" flex flex-col gap-6 my-[6%] mx-5 md:mx-20">
        <h1 className="text-3xl md:text-4xl text-orange-500 font-bold "> Who We Are & Our Aim</h1>
        <p className="px-10 text-xl w-full md:w-[90%] text-justify"> Abiya was born from a simple belief: Talent is everywhere, but opportunity is rare. We are committed to bringing world-class training and a global stage to the artists who shape the world &rsquo; s narratives. Our team is made up of industry pioneers and passionate mentors whose commitment goes beyond teaching they&rsquo;re here to inspire and equip you for a lifelong career in film.</p>
        <div className="self-end md:w-[35%] flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-orange-500">Founder&rsquo;s Message - </h2>
          <p>“Our vision is to see the art of storytelling become the heartbeat of the world&rsquo;s culture. &rsquo; </p>
          <span className="text-orange-500 font-bold self-end">– Gezahegn</span>
        </div>
      </div>
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
