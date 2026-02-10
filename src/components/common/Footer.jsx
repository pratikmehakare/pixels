import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Youtube, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Heart,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-zinc-900 pt-16 pb-8 font-sans">
      <div className="container mx-auto px-6">
        
        {/* --- Top Section: 4 Columns --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              The Prateek Pixelss
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting visual stories that make an impact. From cinematic wedding films to high-conversion brand ads.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram size={20} />} href="https://www.instagram.com/prateekpixelss?igsh=MTV1ZGIxN2lqeXJ6" />

            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <FooterLink to="/services">Photography & Shoots</FooterLink>
              <FooterLink to="/services">Video Editing & Color Grading</FooterLink>
              <FooterLink to="/services">Brand Reels & Ads</FooterLink>
              <FooterLink to="/digital-invite-service">Digital Wedding Invites</FooterLink>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <FooterLink to="/">Home</FooterLink>
              {/* <FooterLink to="/gallery">Portfolio Gallery</FooterLink> */}
              <FooterLink to="/digital-invite-service">Invitaion</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Get in Touch</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-purple-500 mt-1 flex-shrink-0" />
                <span>Arvi, Dist. Wardha, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-purple-500 flex-shrink-0" />
                <a href="tel:+917798056411" className="hover:text-white transition-colors">+91 7798056411</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-purple-500 flex-shrink-0" />
                <a href="mailto:theprateekpixels@gmail.com" className="hover:text-white transition-colors">theprateekpixels@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* --- Bottom Section: Copyright & Developer --- */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          
          <p>© {new Date().getFullYear()} The Prateek Pixelss. All rights reserved.</p>
          
          <div className="flex items-center gap-1">
            <span>Designed & Developed by</span>
            <span className="text-purple-400 font-medium flex items-center gap-1">
              Pratik Mehakare
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

// Helper Components for cleaner code
const SocialIcon = ({ icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all transform hover:-translate-y-1"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to} className="flex items-center gap-2 hover:text-purple-400 transition-colors group">
      <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
      {children}
    </Link>
  </li>
);

export default Footer;