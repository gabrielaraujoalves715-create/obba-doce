/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-brand-pink selection:text-brand-pink-dark">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Gallery />
        <Testimonials />
        <CTA />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
