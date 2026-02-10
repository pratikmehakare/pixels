import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  Film, 
  MonitorPlay, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Users,
  PenTool,
  Rocket,
  Heart,
  Smartphone,
  Globe,
  MapPin
} from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white pt-24">
      
      {/* --- HERO SECTION --- */}
      <div className="relative py-20 bg-zinc-950 border-b border-zinc-900">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs mb-8 uppercase tracking-wider">
            <Zap size={12} />
            <span>End-to-End Production</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Creative <span className="text-purple-500">Solutions</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            We don't just hold a camera. We build visual assets that elevate your brand, 
            increase engagement, and drive sales.
          </p>
        </div>
      </div>

      {/* --- DETAILED SERVICE CATEGORIES --- */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* 1. Video Production (Text Left) */}
          <div className="space-y-6">
            <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400">
              <Film size={28} />
            </div>
            <h2 className="text-3xl font-bold">Video Production</h2>
            <p className="text-gray-400 leading-relaxed">
              From high-energy Instagram Reels to polished Corporate Films. We handle 
              scripting, shooting, lighting, and direction to ensure your message hits the mark.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-purple-500"/> Instagram Reels & TikToks</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-purple-500"/> Commercial Ads (TVC/Digital)</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-purple-500"/> Corporate Interviews</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-purple-500"/> Event Highlight Films</li>
            </ul>
          </div>

           {/* 1. Video Production (Image Right) */}
           <div className="h-80 rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?q=80&w=2574&auto=format&fit=crop" alt="Video Production" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-black/50 px-2 py-1 rounded">Cinematography</span>
              </div>
           </div>

          {/* 2. Photography (Image Left) */}
           <div className="h-80 rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden relative group order-4 md:order-3">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2528&auto=format&fit=crop" alt="Photography" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-black/50 px-2 py-1 rounded">Photography</span>
              </div>
           </div>

          {/* 2. Photography (Text Right) */}
          <div className="space-y-6 order-3 md:order-4">
            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
              <Camera size={28} />
            </div>
            <h2 className="text-3xl font-bold">Professional Photography</h2>
            <p className="text-gray-400 leading-relaxed">
              We capture moments that speak. Whether it's product details for your e-commerce 
              site or candid emotions at a wedding, our lenses miss nothing.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-blue-500"/> Product & E-commerce</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-blue-500"/> Fashion & Portfolio</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-blue-500"/> Food & Architecture</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-blue-500"/> Wedding & Pre-wedding</li>
            </ul>
          </div>

          {/* 3. Digital Invitation Websites (Text Left) - NEW ADDITION */}
          <div className="space-y-6 order-5 md:order-5">
            <div className="w-14 h-14 bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-400">
              <Heart size={28} />
            </div>
            <h2 className="text-3xl font-bold">Digital Invitation Websites</h2>
            <p className="text-gray-400 leading-relaxed">
              Say goodbye to boring PDFs. We create interactive, mobile-perfect websites 
              for your special events. Share your story, venue location, and gallery with a single link.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-pink-500"/> Personalized Link</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-pink-500"/> Google Maps Integration</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-pink-500"/> Video Management System</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-pink-500"/> Photo Gallery & Countdown</li>
            </ul>
            <Link to="/digital-invite-service" className="inline-flex items-center gap-2 text-pink-400 font-bold hover:text-pink-300 transition-colors mt-4">
              View Invite Packages <ArrowRight size={16} />
            </Link>
          </div>

          {/* 3. Digital Invitation (Image Right) - NEW ADDITION */}
          <div className="h-80 rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden relative group order-6 md:order-6">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              {/* Wedding/Phone Placeholder Image */}
              <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" alt="Digital Invitations" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-xs font-bold uppercase tracking-wider text-pink-400 bg-black/50 px-2 py-1 rounded">Web Design</span>
              </div>
           </div>

        </div>
      </section>

      {/* --- POPULAR SERVICES GRID --- */}
      <section className="py-20 bg-zinc-900/50 border-y border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Popular Services</h2>
            <p className="text-gray-400">Our most requested creative solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="p-8 rounded-3xl bg-black border border-zinc-800 hover:border-purple-500 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <MonitorPlay size={100} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Social Media Reels</h3>
              <p className="text-purple-400 text-sm font-bold mb-6">FOR CONTENT CREATORS</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle size={16} className="text-purple-500 mt-1 shrink-0"/> 
                  <span>Trending Audio Selection</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle size={16} className="text-purple-500 mt-1 shrink-0"/> 
                  <span>Fast-Paced Edits</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle size={16} className="text-purple-500 mt-1 shrink-0"/> 
                  <span>Motion Graphics & Text</span>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-zinc-900 to-black border border-zinc-700 hover:border-blue-500 transition-all group relative overflow-hidden transform md:-translate-y-4 shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap size={100} />
              </div>
              <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded">TOP CHOICE</div>
              
              <h3 className="text-2xl font-bold mb-2">Brand Commercials</h3>
              <p className="text-blue-400 text-sm font-bold mb-6">FOR BUSINESSES</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle size={16} className="text-blue-500 mt-1 shrink-0"/> 
                  <span>Product Highlights</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle size={16} className="text-blue-500 mt-1 shrink-0"/> 
                  <span>Corporate Identity Films</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle size={16} className="text-blue-500 mt-1 shrink-0"/> 
                  <span>Ad Scripting & Storyboarding</span>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="p-8 rounded-3xl bg-black border border-zinc-800 hover:border-pink-500 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Smartphone size={100} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Event Invites</h3>
              <p className="text-pink-400 text-sm font-bold mb-6">FOR WEDDINGS & EVENTS</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <Globe size={16} className="text-pink-500 mt-1 shrink-0"/> 
                  <span>Personalized Website Link</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <MapPin size={16} className="text-pink-500 mt-1 shrink-0"/> 
                  <span>Google Maps Integration</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle size={16} className="text-pink-500 mt-1 shrink-0"/> 
                  <span>Gallery & Sharing Features</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Our Workflow</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-800 -z-10 transform -translate-y-1/2"></div>
            
            {[
              { icon: <Users />, title: "Discovery", desc: "We discuss your vision and goals." },
              { icon: <Clock />, title: "Production", desc: "Shooting with top-tier gear." },
              { icon: <PenTool />, title: "Editing", desc: "Magic happens in the lab." },
              { icon: <Rocket />, title: "Launch", desc: "Final delivery ready for upload." },
            ].map((step, index) => (
              <div key={index} className="bg-black p-6 rounded-2xl border border-zinc-800 w-64 text-center">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white mx-auto mb-4 border border-zinc-700">
                  {step.icon}
                </div>
                <h4 className="font-bold text-lg">{step.title}</h4>
                <p className="text-gray-500 text-sm mt-2">{step.desc}</p>
              </div>
            ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 bg-zinc-950 text-center">
        <div className="container mx-auto px-6">
           <h2 className="text-4xl font-bold mb-6">Have a custom requirement?</h2>
           <p className="text-gray-400 mb-8">We are ready to bring your vision to life.</p>
           <a 
              href="https://wa.me/917798056411" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all"
            >
              Chat on WhatsApp <ArrowRight size={18} />
           </a>
        </div>
      </section>

    </div>
  );
};

export default Services;