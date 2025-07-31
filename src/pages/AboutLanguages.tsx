import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Clock, Volume2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const AboutLanguages = () => {
  const audioRef = useRef(null);

  const handlePlayAudio = (files) => {
    if (!files || files.length === 0) return;
    let current = 0;

    const playNext = () => {
      if (current >= files.length) return;
      audioRef.current.src = files[current];
      audioRef.current.play();
      current++;
      audioRef.current.onended = playNext;
    };

    playNext();
  };

  const languages = [
    {
      name: "SENĆOŦEN",
      family: "Salishan¹",
      region: "Southern Vancouver Island, Gulf Islands¹",
      speakers: "<10 fluent speakers¹",
      status: "Critically Endangered¹",
      pronunciation: "sen-CHOH-then",
      description:
        "SENĆOŦEN is the language of the WSÁNEĆ (Saanich) people. It has been spoken on southern Vancouver Island and the Gulf Islands for thousands of years. The language is known for its complex consonant clusters and verbose vocabulary describing the natural world⁹.",
      culturalSignificance:
        "SENĆOŦEN contains profound knowledge about the local ecosystem, seasonal rounds, and spiritual practices. Many place names in the Victoria area derive from SENĆOŦEN words, connecting the land to its original inhabitants⁸.",
      color: "orange",
      audioFiles: [
        "/audio/Slang/Whatisyourname.mp3",
        "/audio/Slang/Whoisyourmother.mp3",
        "/audio/Slang/Whoisyourfather.mp3"
      ]
    },
    {
      name: "Halq'eméylem",
      family: "Salishan³",
      region: "Fraser Valley, Lower Mainland³",
      speakers: "~100 fluent speakers³",
      status: "Severely Endangered³",
      pronunciation: "hull-keh-MAY-lum",
      description:
        "Halq'eméylem is spoken by the peoples of the Fraser Valley and Lower Mainland. It's one of three dialects of the Halkomelem language, distinguished by its unique sound system and vocabulary⁹.",
      culturalSignificance:
        "The language carries the oral histories, laws, and teachings of the Stó:lō people. It contains specialized vocabulary for salmon fishing, basket weaving, and traditional governance systems that have sustained communities for millennia.",
      color: "green",
      audioFiles: [
        "/audio/Hlang/GoodDay.mp3",
        "/audio/Hlang/MyMotherH.mp3",
        "/audio/Hlang/MyFather.mp3"
      ]
    }
  ];

  return (
    <PageTransition>
      <audio ref={audioRef} hidden />
      <div className="min-h-screen bg-stone-50">
        <div className="bg-gradient-to-r from-orange-600 to-green-700 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-white mb-6"
            >
              About the Languages
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-orange-100 max-w-3xl mx-auto"
            >
              Discover the rich heritage of SENĆOŦEN and Halq'eméylem, 
              two remarkable languages that have shaped the landscape of British Columbia for millennia.
            </motion.p>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Text content */}
                  <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
                    <div className="space-y-4">
                      <h2 className={`text-4xl font-bold ${language.color === 'orange' ? 'text-orange-600' : 'text-green-700'}`}>
                        {language.name}
                      </h2>
                      <div className="flex items-center space-x-2 text-stone-600">
                        <Volume2 className="h-5 w-5" />
                        <span className="italic">{language.pronunciation}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center space-x-2 mb-2">
                          <Users className="h-5 w-5 text-stone-500" />
                          <span className="font-semibold text-stone-700">Speakers</span>
                        </div>
                        <p className="text-stone-600">{language.speakers}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center space-x-2 mb-2">
                          <MapPin className="h-5 w-5 text-stone-500" />
                          <span className="font-semibold text-stone-700">Region</span>
                        </div>
                        <p className="text-stone-600">{language.region}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center space-x-2 mb-2">
                          <Clock className="h-5 w-5 text-stone-500" />
                          <span className="font-semibold text-stone-700">Status</span>
                        </div>
                        <p className="text-red-600 font-medium">{language.status}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <span className="font-semibold text-stone-700">Family</span>
                        <p className="text-stone-600">{language.family}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-stone-700 leading-relaxed">{language.description}</p>
                      <div className={`p-6 rounded-lg ${language.color === 'orange' ? 'bg-orange-50 border-l-4 border-orange-400' : 'bg-green-50 border-l-4 border-green-400'}`}>
                        <h4 className="font-semibold text-stone-800 mb-2">Cultural Significance</h4>
                        <p className="text-stone-700">{language.culturalSignificance}</p>
                      </div>
                    </div>
                  </div>

                  {/* Sample words and audio button */}
                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className={`bg-gradient-to-br ${language.color === 'orange' ? 'from-orange-100 to-orange-200' : 'from-green-100 to-green-200'} rounded-2xl p-8 shadow-lg`}>
                      <div className="bg-white rounded-xl p-6 mb-6">
                        <h4 className="font-bold text-stone-800 mb-4">Sample Words & Phrases²</h4>
                        <div className="space-y-3">
                          {language.name === 'SENĆOŦEN' ? (
                            <>
                              <div className="flex justify-between items-center py-2 border-b border-stone-200">
                                <span className="font-medium text-orange-600">SÁN ȻENs SNÁ?</span>
                                <span className="text-stone-600">What Is Your Name?</span>
                              </div>
                              <div className="flex justify-between items-center py-2 border-b border-stone-200">
                                <span className="font-medium text-orange-600">SSÁN ŦEN TÁN?</span>
                                <span className="text-stone-600">Who Is Your Mother?</span>
                              </div>
                              <div className="flex justify-between items-center py-2">
                                <span className="font-medium text-orange-600">SÁN TŦEN MÁN?</span>
                                <span className="text-stone-600">Who Is Your Father</span>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex justify-between items-center py-2 border-b border-stone-200">
                                <span className="font-medium text-green-700">éy swáyel</span>
                                <span className="text-stone-600">Good Day</span>
                              </div>
                              <div className="flex justify-between items-center py-2 border-b border-stone-200">
                                <span className="font-medium text-green-700">tewát tha' tá:l?</span>
                                <span className="text-stone-600">Who Is Your Mother?</span>
                              </div>
                              <div className="flex justify-between items-center py-2">
                                <span className="font-medium text-green-700">tewet ta' má:l?</span>
                                <span className="text-stone-600">Who Is Your Father?</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="text-center">
                        <button
                          onClick={() => handlePlayAudio(language.audioFiles)}
                          className={`bg-white ${language.color === 'orange' ? 'text-orange-600 hover:bg-orange-50' : 'text-green-700 hover:bg-green-50'} px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-sm`}
                        >
                          Listen to Audio Examples
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutLanguages;
