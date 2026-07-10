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
import Footer from "./components/Footer";
import CategoriesPreview from "./components/CategoriesPreview";
import HowToOrder from "./components/HowToOrder";
export default function Home() {
  return (
    <div className="min-h-screen selection:bg-brand-pink selection:text-brand-pink-dark">
      <Navbar />
      <main>
        <Hero />
         <CategoriesPreview />
        <Benefits />
        <Gallery />
        <HowToOrder />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
