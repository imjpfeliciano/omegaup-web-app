import AboutSection from "./About";
import SponsorsSection from "./Sponsors";

const LandingPage = () => (
  <div className="flex flex-col lg:gap-4">
    <div>Carousel</div>
    <div>Rank</div>
    <div>Testimonials</div>
    <AboutSection />
    <SponsorsSection />
  </div>
);

export default LandingPage;
