import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Camera,
  Video,
  Award,
  Code,
  Instagram,
  ArrowRight,
} from "lucide-react";
import Profile from "../assets/profile2.jpeg";
// 1. Import ContactModal
import ContactModal from "../components/common/ContactModal";

const About = () => {
  // 2. Add state for modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white pt-24">
      {/* --- HERO SECTION --- */}
      <div className="relative py-20 bg-zinc-950 border-b border-zinc-900">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs mb-8 uppercase tracking-wider">
            <Award size={12} />
            <span>Since 2020</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Who We <span className="text-purple-500">Are</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            We are a team of visual storytellers, editors, and tech enthusiasts
            dedicated to turning your moments into cinematic masterpieces.
          </p>
        </div>
      </div>

      {/* --- OWNER PROFILE SECTION --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden border border-zinc-800">
              {/* DUMMY OWNER IMAGE - Replace with real photo */}
              <img
                src={Profile}
                alt="Prateek - Founder"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />

              {/* Overlay Name Tag */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-8">
                <h3 className="text-3xl font-bold text-white">
                  Prateek Anjangaonkar
                </h3>
                <p className="text-purple-400 font-medium">
                  Founder & Creative Director
                </p>
              </div>
            </div>
          </div>

          {/* Right: Bio & Stats */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">The Visionary</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                "I believe that every brand and every couple has a unique story
                that deserves to be told with cinematic brilliance."
              </p>
            </div>

            <div className="prose text-gray-400">
              <p>
                With a strong technical foundation in{" "}
                <strong>Computer Science (B.Sc)</strong>, Prateek bridges the
                gap between technology and art. He doesn't just shoot; he
                understands the digital ecosystem.
              </p>
              <p className="mt-4">
                His journey began in the editing room, mastering the rhythm of
                cuts and color for <strong>over 6 years</strong>. This
                post-production expertise naturally evolved into a passion for
                cinematography, leading to <strong>4 years</strong> of
                professional shooting experience. This dual perspective ensures
                that every shot is captured with the final edit in mind.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                <div className="text-purple-400 mb-2">
                  <Video size={24} />
                </div>
                <div className="text-2xl font-bold text-white">6+ Years</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Editing Experience
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                <div className="text-blue-400 mb-2">
                  <Camera size={24} />
                </div>
                <div className="text-2xl font-bold text-white">4+ Years</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Shooting Experience
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {/* Education Badge */}
              <div className="flex items-center gap-3 text-sm text-gray-300 bg-zinc-900/50 w-fit px-4 py-2 rounded-full border border-zinc-800">
                <Code size={16} className="text-green-500" />
                <span>B.Sc. Computer Science Graduate</span>
              </div>
              <a
                href="https://www.instagram.com/prateeek.x?igsh=bXg0d21hZDFhdWs2"
                className="p-3 bg-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-20 bg-zinc-900/50 border-y border-zinc-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Why We Are Different</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Technical Precision</h3>
              <p className="text-gray-400 text-sm">
                Our CS background means we understand the tech behind the
                art—from codecs to camera sensors.
              </p>
            </div>
            <div className="p-6 border-x border-zinc-800">
              <h3 className="text-xl font-bold mb-3">Story First Approach</h3>
              <p className="text-gray-400 text-sm">
                We don't just capture footage; we weave narratives that evoke
                emotion and drive action.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">End-to-End Control</h3>
              <p className="text-gray-400 text-sm">
                From the first click of the shutter to the final export render,
                we handle everything in-house.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Create Magic</h2>
        
        {/* 3. Updated Button to trigger Modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all cursor-pointer"
        >
          Contact The Team <ArrowRight size={18} />
        </button>
      </section>

      {/* 4. Render the Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default About;