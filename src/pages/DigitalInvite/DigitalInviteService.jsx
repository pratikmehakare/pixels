import React from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Share2,
  MapPin,
  Image,
  Gift,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const DigitalInviteService = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white pb-20">
      {/* --- HERO SECTION --- */}
      <div className="relative pt-32 pb-20 text-center px-6 border-b border-zinc-800 bg-zinc-950">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs mb-8 uppercase tracking-wider">
          <Globe size={12} />
          <span>Go Paperless • Go Digital</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Your Event. <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Your Personal Website.
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Forget image attachments. Share your love story, event details, and
          gallery with a single, elegant web link that works on every device.
        </p>

        {/* DEMO BUTTON */}
        <Link
          to="/digital-invite-service/wedding-invite"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105"
        >
          View Live Demo Theme <ArrowRight size={18} />
        </Link>
      </div>

      {/* --- HOW IT WORKS --- */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400 mx-auto mb-6">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Choose Your Style</h3>
            <p className="text-gray-400 text-sm">
              Select from our plan or fully custom design
              that matches your vibe.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
            <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center text-pink-400 mx-auto mb-6">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Send Us Details</h3>
            <p className="text-gray-400 text-sm">
              Provide your photos, event dates, venue locations, and story. We
              build everything for you.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 mx-auto mb-6">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Get Your Link</h3>
            <p className="text-gray-400 text-sm">
              Receive your unique URL (e.g., rohanweds.com or
              prateekpixels.com/rohan) to share on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Everything You Need
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <FeatureCard
              icon={<MapPin />}
              title="Google Maps"
              desc="One-click navigation for guests."
            />
            <FeatureCard
              icon={<Share2 />}
              title="Easy Sharing"
              desc="Share via WhatsApp instantly."
            />
            <FeatureCard
              icon={<Image />}
              title="Photo Gallery"
              desc="Showcase your pre-wedding shoot."
            />

            <FeatureCard
              icon={<Globe />}
              title="Validity"
              desc="Website will stays live for month"
            />
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Simple Pricing</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Standard Plan (Fixed Price) */}
          <div className="w-full p-10 rounded-3xl bg-zinc-900 border border-purple-500/50 shadow-2xl shadow-purple-900/20 text-center relative overflow-hidden flex flex-col">
            {/* "Offer" Badge */}
            <div className="absolute top-5 right-5 bg-purple-600/20 text-purple-300 text-xs font-bold px-3 py-1 rounded-full border border-purple-500/50">
              LIMITED OFFER
            </div>

            <h3 className="text-2xl font-bold mb-2">Digital Invite</h3>

            {/* Price Display */}
            <div className="flex items-end justify-center gap-2 mb-6">
              <span className="text-5xl font-bold text-purple-400">₹499</span>
              <span className="text-gray-500 line-through text-lg mb-2">
                ₹999
              </span>
            </div>

            <p className="text-gray-400 mb-8 text-sm px-4">
              Get a premium, shareable invite website link without breaking the
              budget.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-10 text-gray-300 text-left mx-auto max-w-xs flex-grow">
              <li className="flex items-center gap-3">
                <CheckCircle
                  size={20}
                  className="text-green-500 flex-shrink-0"
                />
                <span>Mobile-Perfect Design</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle
                  size={20}
                  className="text-green-500 flex-shrink-0"
                />
                <span>Event Dates & Google Map Location</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle
                  size={20}
                  className="text-green-500 flex-shrink-0"
                />
                <span>Website stays live for 1 month</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle
                  size={20}
                  className="text-green-500 flex-shrink-0"
                />
                <span>Easy WhatsApp Sharing</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Custom Plan (Dynamic Pricing) */}
          <div className="w-full p-10 rounded-3xl bg-zinc-900 border border-blue-500/50 shadow-2xl shadow-blue-900/20 text-center relative overflow-hidden flex flex-col">
            <div className="absolute top-5 right-5 bg-blue-600/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/50">
              PREMIUM
            </div>

            <h3 className="text-2xl font-bold mb-2">Fully Customized</h3>

            {/* Dynamic Price Display */}
            <div className="flex items-end justify-center gap-2 mb-6">
              <span className="text-4xl font-bold text-blue-400">Dynamic</span>
            </div>

            <p className="text-gray-400 mb-8 text-sm px-4">
              Need specific features, videos. Let's build
              exactly what you want.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-10 text-gray-300 text-left mx-auto max-w-xs flex-grow">
              <li className="flex items-center gap-3">
                <CheckCircle
                  size={20}
                  className="text-blue-500 flex-shrink-0"
                />
                <span>Mobile-Perfect Design</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle
                  size={20}
                  className="text-blue-500 flex-shrink-0"
                />
                <span>Event Dates & Google Map Location</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle
                  size={20}
                  className="text-blue-500 flex-shrink-0"
                />
                <span>Website stays live for 1 month</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle
                  size={20}
                  className="text-blue-500 flex-shrink-0"
                />
                <span>Easy WhatsApp Sharing</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle
                  size={20}
                  className="text-blue-500 flex-shrink-0"
                />
                <span>Customization according to your need</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="text-center py-10">
        <p className="text-gray-500 mb-6">
          Have questions? Call us at{" "}
          <span className="text-white">+91 7798056411</span>
        </p>
      </section>
    </div>
  );
};

// Sub-components for cleaner code
const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-6 bg-black rounded-xl border border-zinc-800 text-center">
    <div className="text-purple-400 mb-4 flex justify-center">{icon}</div>
    <h4 className="font-bold mb-2">{title}</h4>
    <p className="text-gray-500 text-xs">{desc}</p>
  </div>
);

const PricingCard = ({ title, price, features }) => (
  <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <div className="text-4xl font-bold mb-6">{price}</div>
    <ul className="space-y-4 mb-8 text-gray-400 text-sm">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-2">
          <CheckCircle size={16} className="text-gray-600" /> {f}
        </li>
      ))}
    </ul>
    <button className="w-full py-3 rounded-xl border border-zinc-700 hover:bg-zinc-800 font-bold transition-colors">
      Choose {title}
    </button>
  </div>
);

export default DigitalInviteService;
