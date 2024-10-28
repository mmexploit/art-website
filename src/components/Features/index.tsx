import SectionTitle from "../Common/SectionTitle";
import TranslatedFeaturesData from "./features";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="We provide the best features for your career in the film industry."
            center
          />

          <TranslatedFeaturesData />
        </div>
      </section>
    </>
  );
};

export default Features;
