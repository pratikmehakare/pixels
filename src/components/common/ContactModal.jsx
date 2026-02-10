import React from 'react';
import { X, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
    return null;
  }

  return (
    // Overlay
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={onClose}>
      
      {/* Modal Content (Stop click propagation so clicking inside doesn't close it) */}
      <div 
        className="bg-zinc-900 border border-zinc-800 w-full max-w-md rounded-2xl p-6 relative shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-white mb-2">Get in Touch</h2>
        <p className="text-gray-400 text-sm mb-8">
          Ready to start your project? We are just a message away.
        </p>

        {/* Contact Details */}
        <div className="space-y-6 mb-8">
            {/* Phone */}
            <a href="tel:+917798056411" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                    <Phone size={20} />
                </div>
                <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Call Us</div>
                    <div className="text-white font-medium group-hover:text-purple-400 transition-colors">+91 7798056411</div>
                </div>
            </a>

            {/* Email */}
            <a href="mailto:theprateekpixels@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <Mail size={20} />
                </div>
                <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email Us</div>
                    <div className="text-white font-medium group-hover:text-blue-400 transition-colors">theprateekpixels@gmail.com</div>
                </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-pink-400">
                    <MapPin size={20} />
                </div>
                <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Location</div>
                    <div className="text-white font-medium">Arvi, Dist. Wardha, Maharashtra, India</div>
                </div>
            </div>
        </div>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/917798056411"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
        >
          <MessageCircle size={20} />
          Chat on WhatsApp
        </a>

      </div>
    </div>
  );
};

export default ContactModal;