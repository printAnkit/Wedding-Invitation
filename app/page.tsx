import { EnvelopeIntro } from "./components/EnvelopeIntro";
import { Hero } from "./components/Hero";
import { FunctionDetails } from "./components/FunctionDetails";
import { VenueDetails } from "./components/VenueDetails";
import { RsvpForm } from "./components/RsvpForm";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <EnvelopeIntro />
      <Hero />
      <FunctionDetails />
      <VenueDetails />
      <RsvpForm />
      <Footer />
    </div>
  );
}
