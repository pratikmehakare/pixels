import React, { useState } from 'react';
import { Film } from 'lucide-react';

import Event3 from '../assets/video/Event_3.mp4';
import Event4 from '../assets/video/Event_4.mp4';
import Event5 from '../assets/video/Event_5.mp4';

import Reel2 from '../assets/video/Reel_2.mp4';
import InvitationCard1 from '../assets/video/InvitationCrad_1.mp4';
import PreWedShoot1 from '../assets/video/PreWedShoot_1.mp4';
import PreWedShoot2 from '../assets/video/PreWedShoot_2.mp4';
import PreWedShoot3 from '../assets/video/PreWedShoot_3.mp4';


const Gallery = () => {
  const [filter, setFilter] = useState('All');

  // --- STEP 2: DEFINE YOUR VIDEO LIST ---
  const videos = [
       { 
      id: 9, 
      src: PreWedShoot2, 
      title: "Sairat Cenematic Shoot", 
      category: "PreWedShoot" 
    },
            { 
      id: 3, 
      src: Event3,
      title: "Birthday", 
      category: "Event" 
    },
        { 
      id: 7, 
      src: Reel2,
      title: "Nature", 
      category: "Reel" 
    },



    { 
      id: 4, 
      src: Event4, 
      title: "Home Opening Ceremony", 
      category: "Event" 
    },
        { 
      id: 5, 
      src: Event5,
      title: "Birthday", 
      category: "Event" 
    },


    { 
      id: 8, 
      src: PreWedShoot1, 
      title: "Cenematic Shoot", 
      category: "PreWedShoot" 
    },
     
        { 
      id: 10, 
      src: PreWedShoot3, 
      title: "Teaser", 
      category: "PreWedShoot" 
    },
        { 
      id: 11, 
      src: InvitationCard1, 
      title: "Wedding Invitation", 
      category: "Invitaion" 
    },

  ];

  // Filter Logic
  const filteredVideos = filter === 'All' 
    ? videos 
    : videos.filter(video => video.category === filter);

  const categories = ['All','Invitaion', 'PreWedShoot','Wedding', 'Commercial', 'Reel', 'Event'];

  return (
    <div className="min-h-screen bg-black text-white font-sans pt-24 pb-20 selection:bg-purple-500 selection:text-white">
      
      {/* Header */}
      <div className="container mx-auto px-6 mb-12 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs mb-6 uppercase tracking-wider">
          <Film size={12} />
          <span>Our Portfolio</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Captured <span className="text-purple-500">Moments</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of our finest visual stories.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="container mx-auto px-6 mb-12 flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all border ${
              filter === cat
                ? 'bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-900/50'
                : 'bg-zinc-900 border-zinc-800 text-gray-400 hover:border-purple-500/50 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div key={video.id} className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-purple-500/50 transition-all">
              
              {/* Video Player */}
              <div className="relative w-full aspect-video bg-black">
                <video 
                  src={video.src} 
                  controls 
                  className="w-full h-full object-cover"
                  poster="" // You can add a thumbnail image here if you have one
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
                  {video.category}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {video.title}
                </h3>
              </div>

            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p>No videos found in this category.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Gallery;