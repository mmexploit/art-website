
import { Mail, Phone } from "lucide-react";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-10 lg:py-18">
        <div className="flex flex-col gap-6 mx-6 md:mx-20">
          <div className="flex items-center gap-4">
          <div className="rounded-xl p-3 bg-primary">
            <Phone/>
          </div>
          <p className="text-xl md:text-2xl  text-primary font-bold">09402376706</p>
          </div>
          <div className="flex items-center gap-4">
          <div className="rounded-xl p-3 bg-primary">
            <Mail/>
          </div>
          <p className="text-xl md:text-2xl  text-primary font-bold">girmagez3@gmail.com</p>
          </div>
        </div>
    </section>
  );
};

export default Contact;
