import  { useState, useEffect } from 'react';
import { 
  Heart, 
  MapPin, 
  Calendar, 
  Clock, 
  Music, 
  Sparkles
} from 'lucide-react';

const WeddingInvite = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Dummy Wedding Date: 30 days from now
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A4A4A] font-serif overflow-x-hidden selection:bg-[#D4AF37] selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <header className="relative h-screen w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Background Image - REPLACE with your AI Couple Portrait */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')",
            filter: "brightness(0.6)" // Darkens image so text pops
          }}
        ></div>

        <div className="relative z-10 text-white animate-fade-in-up">
          <div className="uppercase tracking-[0.3em] text-sm md:text-base mb-4 text-[#E5D3B3]">
            We Are Getting Married
          </div>
          <h1 className="text-6xl md:text-8xl font-serif italic mb-2 tracking-tighter">
            Rohan <span className="text-[#D4AF37]">&</span> Priya
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-widest mt-4 uppercase">
            December 12, 2026
          </p>
          
 
        </div>
      </header>

      {/* --- OUR STORY (Minimalist) --- */}
      <section className="py-20 md:py-32 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-serif text-[#2C2C2C] mb-8">
            The Beginning of Forever
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sans font-light">
            "It started with a simple coffee and turned into a lifetime of memories. 
            We invite you to join us as we embark on our greatest adventure yet."
          </p>
        </div>
      </section>

      {/* --- COUNTDOWN --- */}
      <section className="py-12 bg-[#2C2C2C] text-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-serif text-[#D4AF37]">{item.value}</span>
                <span className="text-xs uppercase tracking-widest mt-2 text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EVENTS TIMELINE --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-center text-4xl font-serif mb-16 text-[#2C2C2C]">The Celebrations</h2>
          
          <div className="space-y-12">
            {/* Event 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 group">
              <div className="w-full md:w-1/2 h-64 overflow-hidden rounded-xl">
                 {/* AI Image: Sangeet/Dance */}
                <img 
                  src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=2070&auto=format&fit=crop" 
                  alt="Sangeet" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-[#D4AF37] mb-2">
                   <Music size={18} /> <span>Sangeet Night</span>
                </div>
                <h3 className="text-3xl font-serif mb-4">Musical Evening</h3>
                <div className="space-y-2 text-gray-600 font-sans">
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <Calendar size={16} /> Dec 11, 2026
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <Clock size={16} /> 7:00 PM Onwards
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <MapPin size={16} /> Grand Hyatt Ballroom
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Event 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 group">
              <div className="w-full md:w-1/2 h-64 overflow-hidden rounded-xl">
                 {/* AI Image: Ceremony/Rituals */}
                <img 
                  src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070&auto=format&fit=crop" 
                  alt="Wedding" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-right">
                <div className="flex items-center justify-center md:justify-end gap-2 text-[#D4AF37] mb-2">
                   <Heart size={18} /> <span>The Big Day</span>
                </div>
                <h3 className="text-3xl font-serif mb-4">Wedding Ceremony</h3>
                <div className="space-y-2 text-gray-600 font-sans">
                  <p className="flex items-center justify-center md:justify-end gap-2">
                    <Calendar size={16} /> Dec 12, 2026
                  </p>
                  <p className="flex items-center justify-center md:justify-end gap-2">
                    <Clock size={16} /> 10:00 AM Onwards
                  </p>
                  <p className="flex items-center justify-center md:justify-end gap-2">
                    <MapPin size={16} /> The Royal Palace Grounds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHOTO GALLERY (AI Style Layout) --- */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl font-serif mb-12 text-[#2C2C2C]">Captured Moments</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {/* Gallery Item 2 */}
            <div className="col-span-2 md:col-span-1 h-40 rounded-lg overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Rings" />
            </div>
 
             {/* Gallery Item 5 */}
             <div className="col-span-2 md:col-span-2 h-40 rounded-lg overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Dress" />
            </div>
          </div>
        </div>
      </section>


      {/* --- FOOTER --- */}
      <footer className="bg-[#2C2C2C] py-12 text-center text-white/40 font-sans text-sm">
        <p className="mb-4 font-serif text-2xl text-white/80 italic">R & P</p>
        <p>#RohanWedsPriya2026</p>
        <p className="mt-8 text-xs">
          Designed by <span className="text-[#D4AF37]">The Prateek Pixelss</span>
        </p>
      </footer>

    </div>
  );
};

export default WeddingInvite;