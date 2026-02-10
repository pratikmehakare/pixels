import React, { useState } from "react";
import {
  Camera,
  Scissors,
  Film,
  Rocket,
  BarChart,
  Heart,
  Mail,
  Phone,
  Instagram,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";
// 1. Import the ContactModal
import ContactModal from "../components/common/ContactModal";

const Home = () => {
  // 2. Add state to control the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white">
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs mb-8 uppercase tracking-wider">
            <Rocket size={12} />
            <span>Helping Brands Grow</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Visual Stories That <br />
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Make An Impact
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            From high-end shoots to strategic digital branding. We craft visuals
            that don't just look good—they sell.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* 3. Updated "Start a Project" Button to trigger Modal */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Start a Project <Rocket size={18} />
            </button>
            
            <Link
              to="/"
              className="px-8 py-4 border border-gray-700 text-white font-medium rounded-full hover:bg-gray-900 transition-all flex items-center justify-center"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[128px]"></div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Expertise
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine creative artistry with strategic marketing to deliver
              complete visual solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 transition-all group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                <Camera size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Shoots</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                High-quality photography for products, fashion, and corporate
                needs. We capture details that define your brand.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-pink-500/50 transition-all group">
              <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
                <Film size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Video Production</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Cinematic Reels, Ads, and Brand Videos. From scripting to
                post-production, we handle the entire pipeline.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <Scissors size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Creative Editing</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Sharp cuts, seamless transitions, and color grading that sets
                the mood. We turn raw footage into masterpieces.
              </p>
            </div>

            {/* Service 4 */}
            <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 transition-all group">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                <BarChart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Digital Marketing</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Content strategy and branding that drives engagement. We help
                you reach the right audience.
              </p>
            </div>

            {/* Special Service: Invitation Websites */}
            <Link to="/digital-invite-service">
              <div
                id="invitations"
                className="md:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 relative overflow-hidden group"
              >
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="w-14 h-14 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 flex-shrink-0">
                    <Heart size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      Digital Invitation Websites
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 max-w-md">
                      Modern, interactive websites for your Wedding or Special
                      Events. Share your story, gather rsvps, and impress guests
                      with a custom link.
                    </p>
                    <span className="text-red-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Samples <Play size={12} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="py-20 border-y border-zinc-800 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                55+
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Projects Done
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                21+
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Happy Customers
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                4K
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Video Quality
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-zinc-900 rounded-3xl p-8 md:p-16 text-center border border-zinc-800">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to elevate your brand?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Whether it's a shoot, a brand video, or a wedding website—let's
              create something extraordinary together.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
              <a
                href="mailto:theprateekpixels@gmail.com"
                className="flex items-center gap-3 px-6 py-4 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors w-full md:w-auto justify-center"
              >
                <Mail className="text-purple-400" size={20} />
                <span className="text-white">theprateekpixels@gmail.com</span>
              </a>

              <a
                href="tel:+917798056411"
                className="flex items-center gap-3 px-6 py-4 bg-white text-black rounded-xl hover:bg-gray-200 transition-colors w-full md:w-auto justify-center font-bold"
              >
                <Phone className="text-black" size={20} />
                <span>+91 7798056411</span>
              </a>
            </div>

            <div className="flex justify-center gap-6 text-gray-400">
              <a
                href="https://www.instagram.com/prateekpixelss?igsh=MTV1ZGIxN2lqeXJ6"
                className="hover:text-pink-500 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Render the Contact Modal at the end */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;