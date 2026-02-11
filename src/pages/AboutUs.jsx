import React, { useState } from "react";
import {
  Camera,
  Video,
  Award,
  Code,
  Instagram,
  ArrowRight,
  Languages, // Imported icon for language switch
} from "lucide-react";
import Profile from "../assets/profile2.jpeg";
import ContactModal from "../components/common/ContactModal";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lang, setLang] = useState("en"); // State for Language ('en' or 'hi')

  // --- TRANSLATION DATA ---
  const content = {
    en: {
      since: "Since 2020",
      titleStart: "Who We",
      titleEnd: "Are",
      description: "We are a team of visual storytellers, editors, and tech enthusiasts dedicated to turning your moments into cinematic masterpieces.",
      name: "Prateek Anjangaonkar",
      role: "Founder & Creative Director",
      visionaryTitle: "The Visionary",
      visionaryQuote: "\"I believe that every brand and every couple has a unique story that deserves to be told with cinematic brilliance.\"",
      bio1: "With a strong technical foundation in ",
      bio1Bold: "Computer Science (B.Sc)",
      bio1End: ", Prateek bridges the gap between technology and art. He doesn't just shoot; he understands the digital ecosystem.",
      bio2: "His journey began in the editing room, mastering the rhythm of cuts and color for ",
      bio2Bold: "over 6 years",
      bio2End: ". This post-production expertise naturally evolved into a passion for cinematography, leading to ",
      bio2Bold2: "4 years",
      bio2End2: " of professional shooting experience.",
      statEdit: "Editing Experience",
      statShoot: "Shooting Experience",
      education: "B.Sc. Computer Science Graduate",
      whyTitle: "Why We Are Different",
      reason1Title: "Technical Precision",
      reason1Desc: "Our CS background means we understand the tech behind the art—from codecs to camera sensors.",
      reason2Title: "Story First Approach",
      reason2Desc: "We don't just capture footage; we weave narratives that evoke emotion and drive action.",
      reason3Title: "End-to-End Control",
      reason3Desc: "From the first click of the shutter to the final export render, we handle everything in-house.",
      ctaTitle: "Let's Create Magic",
      ctaBtn: "Contact The Team"
    },
    hi: {
      since: "2020 से",
      titleStart: "हम कौन",
      titleEnd: "हैं",
      description: "हम विजुअल स्टोरीटेलर्स, संपादकों और तकनीकी उत्साही लोगों की एक टीम हैं जो आपके पलों को सिनेमाई उत्कृष्ट कृतियों में बदलने के लिए समर्पित हैं।",
      name: "प्रतीक अंजनगांवकर",
      role: "संस्थापक और रचनात्मक निदेशक",
      visionaryTitle: "एक नई सोच",
      visionaryQuote: "\"मेरा मानना है कि हर ब्रांड और हर जोड़े की एक अनूठी कहानी होती है जिसे सिनेमाई चमक के साथ सुनाया जाना चाहिए।\"",
      bio1: "मजबूत तकनीकी नींव और ",
      bio1Bold: "कंप्यूटर साइंस (B.Sc)",
      bio1End: " के साथ, प्रतीक तकनीक और कला के बीच की खाई को पाटते हैं। वह सिर्फ शूट नहीं करते; वह डिजिटल दुनिया को समझते हैं।",
      bio2: "उनकी यात्रा एडिटिंग रूम में शुरू हुई, जहां उन्होंने ",
      bio2Bold: "6 साल से अधिक",
      bio2End: " समय तक कट्स और रंगों की लय में महारत हासिल की। यह विशेषज्ञता स्वाभाविक रूप से सिनेमैटोग्राफी के जुनून में बदल गई, जिससे उन्हें ",
      bio2Bold2: "4 साल",
      bio2End2: " का शूटिंग अनुभव मिला।",
      statEdit: "एडिटिंग का अनुभव",
      statShoot: "शूटिंग का अनुभव",
      education: "B.Sc. कंप्यूटर साइंस ग्रेजुएट",
      whyTitle: "हम अलग क्यों हैं",
      reason1Title: "तकनीकी सटीकता",
      reason1Desc: "हमारी CS पृष्ठभूमि का मतलब है कि हम कला के पीछे की तकनीक को समझते हैं - कोडेक्स से लेकर कैमरा सेंसर तक।",
      reason2Title: "कहानी सबसे पहले",
      reason2Desc: "हम सिर्फ फुटेज कैप्चर नहीं करते; हम ऐसी कहानियां बुनते हैं जो भावनाएं जगाती हैं।",
      reason3Title: "पूरा नियंत्रण",
      reason3Desc: "शटर के पहले क्लिक से लेकर अंतिम रेंडर तक, हम सब कुछ अपनी देखरेख (In-House) में करते हैं।",
      ctaTitle: "आइए जादू बिखेरें",
      ctaBtn: "टीम से संपर्क करें"
    }
  };

  const t = content[lang]; // Current translation object

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white pt-24">
      
      {/* --- HERO SECTION --- */}
      <div className="relative py-20 bg-zinc-950 border-b border-zinc-900">
        
        {/* LANGUAGE SWITCHER (Top Right) */}
        <div className="absolute top-4 right-6 z-20">
            <button 
                onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 hover:border-purple-500 hover:text-purple-400 transition-all text-sm font-bold"
            >
                <Languages size={16} />
                {lang === 'en' ? 'हिंदी में पढ़ें' : 'Read in English'}
            </button>
        </div>

        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs mb-8 uppercase tracking-wider">
            <Award size={12} />
            <span>{t.since}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {t.titleStart} <span className="text-purple-500">{t.titleEnd}</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            {t.description}
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
              {/* Owner Image */}
              <img
                src={Profile}
                alt="Prateek - Founder"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />

              {/* Overlay Name Tag */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-8">
                <h3 className="text-3xl font-bold text-white">
                  {t.name}
                </h3>
                <p className="text-purple-400 font-medium">
                  {t.role}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Bio & Stats */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">{t.visionaryTitle}</h2>
              <p className="text-gray-400 leading-relaxed text-lg italic">
                {t.visionaryQuote}
              </p>
            </div>

            <div className="prose text-gray-400">
              <p>
                {t.bio1}
                <strong>{t.bio1Bold}</strong>
                {t.bio1End}
              </p>
              <p className="mt-4">
                {t.bio2}
                <strong>{t.bio2Bold}</strong>
                {t.bio2End}
                <strong>{t.bio2Bold2}</strong>
                {t.bio2End2}
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
                  {t.statEdit}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                <div className="text-blue-400 mb-2">
                  <Camera size={24} />
                </div>
                <div className="text-2xl font-bold text-white">4+ Years</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  {t.statShoot}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {/* Education Badge */}
              <div className="flex items-center gap-3 text-sm text-gray-300 bg-zinc-900/50 w-fit px-4 py-2 rounded-full border border-zinc-800">
                <Code size={16} className="text-green-500" />
                <span>{t.education}</span>
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
          <h2 className="text-3xl font-bold mb-12">{t.whyTitle}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{t.reason1Title}</h3>
              <p className="text-gray-400 text-sm">
                {t.reason1Desc}
              </p>
            </div>
            <div className="p-6 border-x border-zinc-800">
              <h3 className="text-xl font-bold mb-3">{t.reason2Title}</h3>
              <p className="text-gray-400 text-sm">
                {t.reason2Desc}
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{t.reason3Title}</h3>
              <p className="text-gray-400 text-sm">
                {t.reason3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">{t.ctaTitle}</h2>
        
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all cursor-pointer"
        >
          {t.ctaBtn} <ArrowRight size={18} />
        </button>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default About;