import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Home = () => {
  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Two Living Languages",
      description: "Uncover the rich history and stories of SENĆOŦEN and Halq'eméylem."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Reconcillation Through Action",
      description: "Support truth and reconcillation by participating in the educational revival of Indigenous identity."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Learn & Honour",
      description: "Practice words and pronunciation through are interactive learning tool."
    },
  ];

  return (
    <PageTransition>
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-orange-100 via-stone-100 to-green-100 min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/20 to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h1 className="text-5xl md:text-6xl font-bold text-stone-800 leading-tight">
                  Reviving
                  <span className="text-orange-600 block">Indigenous</span>
                  <span className="text-green-700">Languages</span>
                </h1>
                
                <p className="text-xl text-stone-600 leading-relaxed">
                  Explore the revival and history of SENĆOŦEN and Halq’eméylem, two endangered Indigenous languages of British Columbia.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/about"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200"
                  >
                    <span>Learn About the Languages</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  
                  <Link
                    to="/learn"
                    className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors duration-200"
                  >
                    Start Learning
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-stone-200">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-stone-800">Language Statistics</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                        <span className="font-semibold text-stone-700">SENĆOŦEN Speakers</span>
                        <span className="text-orange-600 font-bold">{'>10 fluent¹'}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                        <span className="font-semibold text-stone-700">Halq'eméylem Speakers</span>
                        <span className="text-green-600 font-bold"> ~250 fluent³</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-stone-100 rounded-lg">
                        <span className="font-semibold text-stone-700">Combined Revitalization Programs</span>
                        <span className="text-stone-600 font-bold">~30+ active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-stone-800 mb-4">
                Preserving Heritage Through Language
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Language is the vessel of culture, history, and identity. This project will highlight that to preserve these endangered languages. Through the learning of these language, we have a chance to carry them into the future, while taking a meaningful step towards reconcillation.
              
                
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-stone-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-orange-600 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-stone-800 mb-3">{feature.title}</h3>
                  <p className="text-stone-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-green-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-white">
                Every Voice Matters in Language Revival
              </h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                Join in on missions to preserve, revitalize, and celebrate Indigenous languages. Only by working together can we ensure these languages continue to flourish.
              </p>
              <Link
                to="/revival"
                className="inline-flex items-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-stone-100 transition-colors duration-200"
              >
                <span>Learn About Revival Efforts</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;