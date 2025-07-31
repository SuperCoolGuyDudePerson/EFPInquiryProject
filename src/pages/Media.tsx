import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Film } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Media = () => {
  const [activeTab, setActiveTab] = useState('videos');

  const mediaItems = {
    videos: [
      {
        id: 1,
        title: "Finding Our Talk – SENĆOŦEN Language",
        description: "A short documentary by W̱SÁNEĆ Leadership Council about SENĆOŦEN immersion and language reclamation.",
        thumbnail: "https://img.youtube.com/vi/Onh9lZwkvto/hqdefault.jpg",
        duration: "24:42",
        type: "Documentary",
        url: "https://www.youtube.com/watch?v=Onh9lZwkvto"
      },
      {
        id: 2,
        title: "Learning SENĆOŦEN Through Our Worldview",
        description: "Fueled by community voice, this video shows how worldview-based learning supports SENĆOŦEN revitalization.",
        thumbnail: "https://img.youtube.com/vi/TknGRZeD6O4/hqdefault.jpg",
        duration: "55:07",
        type: "Educational",
        url: "https://www.youtube.com/watch?v=TknGRZeD6O4"
      },
      {
        id: 3,
        title: "Halq’eméylem Language Learning Journey",
        description: "Elder Christine Point (Tselxát) reflects on teaching and preserving Halq’eméylem in her community.",
        thumbnail: "https://img.youtube.com/vi/zgLmtwMrtpg/hqdefault.jpg",
        duration: "13:10",
        type: "Cultural",
        url: "https://www.youtube.com/watch?v=zgLmtwMrtpg"
      },
      {
        id: 4,
        title: "Stó:lō Language Almost Extinct, Says Elder",
        description: "Elder Elizabeth Phillips speaks on being among the last fluent Halq’eméylem speakers and why it's urgent to act.",
        thumbnail: "https://img.youtube.com/vi/pty6Ib-INTo/hqdefault.jpg",
        duration: "1:47",
        type: "Interview",
        url: "https://www.youtube.com/watch?v=pty6Ib-INTo"
      }
    ]
  };

  const tabs = [
    {
      id: 'videos',
      label: 'Videos',
      icon: <Film className="h-5 w-5" />,
      count: mediaItems.videos.length
    }
  ];

  const handleShare = async (video: { title: string; url: string }) => {
    const shareData = {
      title: video.title,
      text: `Watch this video: ${video.title}`,
      url: video.url
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.warn("Share cancelled or failed:", error);
        alert("Sharing was cancelled or failed.");
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(video.url);
        alert(`Link copied to clipboard:\n${video.url}`);
      } catch (err) {
        console.error("Clipboard copy failed:", err);
        prompt("Copy this link manually:", video.url);
      }
    } else {
      prompt("Copy this link:", video.url);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-stone-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-700 to-orange-600 py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-white mb-6"
            >
              Media Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-green-100 max-w-3xl mx-auto"
            >
              Explore videos showcasing the beauty and importance of SENĆOŦEN and Halq’eméylem.
            </motion.p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Tabs */}
          <div className="flex justify-center mb-12 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold mx-2 mb-2 ${
                  activeTab === tab.id
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-white text-stone-700 hover:bg-stone-100 shadow-sm'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    activeTab === tab.id ? 'bg-orange-500' : 'bg-stone-200'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Videos */}
          {activeTab === 'videos' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {mediaItems.videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => window.open(video.url, '_blank')}
                        className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-colors duration-200"
                      >
                        <Play className="h-8 w-8 text-white" />
                      </button>
                    </div>
                    <div className="absolute top-4 left-4 bg-orange-600 text-white px-2 py-1 rounded text-sm font-medium">
                      {video.type}
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-stone-800 mb-2">{video.title}</h3>
                    <p className="text-stone-600 mb-4">{video.description}</p>
                    <div className="flex space-x-3">
                      <button
                        onClick={() => window.open(video.url, '_blank')}
                        className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        <Play className="h-4 w-4" />
                        <span>Watch</span>
                      </button>
                      <button
                        onClick={() => handleShare(video)}
                        className="flex items-center space-x-2 bg-stone-200 hover:bg-stone-300 text-stone-700 px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-green-700">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-6">
              <h2 className="text-4xl font-bold text-white">Language is Story</h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                In every clip and every word, SENĆOŦEN and Halq’eméylem carry the spirit and heritage of their people.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Media;
