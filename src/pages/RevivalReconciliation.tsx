import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, GraduationCap, Home, Heart, TreePine } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const RevivalReconciliation = () => {
  const initiatives = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Language Immersion Programs",
      description: "Full immersion daycare and elementary programs where children learn Indigenous languages as their first language.",
      impact: "2417+ children currently enrolled"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Elder-Youth Partnerships",
      description: "Connecting fluent Elders and speakers with young learners to ensure traditional knowledge and language are passed down.",
      impact: "10s of active partnerships"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Digital Resources",
      description: "Apps like FirstVoices and Youtube have been critical towards learning and archiving",
      impact: "countless apps spreading reviatization."
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Community Language Nests",
      description: "Programs and places where families and individuals can practice and learn Indigenous languages.",
      impact: "157+ active language nests"
    }
  ];

  const reconciliationPrinciples = [
    {
      title: "Truth",
      description: "Acknowledging the historical impacts of colonization on Indigenous languages and communities.",
      color: "orange"
    },
    {
      title: "Healing",
      description: "Supporting communities in reclaiming their linguistic heritage as part of cultural healing.",
      color: "green"
    },
    {
      title: "Education",
      description: "Ensuring all Canadians understand the importance of Indigenous languages to our shared heritage.",
      color: "stone"
    },
    {
      title: "Action",
      description: "Moving beyond words to concrete support for language revitalization efforts.",
      color: "orange"
    }
  ];

  return (
    <>
      <div className="bg-stone-800">
        <PageTransition>
          <div className="min-h-screen bg-stone-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-700 to-orange-600 py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl font-bold text-white mb-6"
                >
                  Revival & Reconciliation
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-green-100 max-w-4xl mx-auto"
                >
                  Language revitalization is at the heart of reconciliation. When Indigenous languages thrive, 
                  entire communities heal, cultures flourish, and Canada becomes stronger.
                </motion.p>
              </div>
            </div>

            {/* Current Initiatives */}
            <section className="py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl font-bold text-stone-800 mb-6">Current Revival Initiatives⁵</h2>
                  <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                    Communities across British Columbia are leading innovative programs to revitalize 
                    SENĆOŦEN and Halq'eméylem languages.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  {initiatives.map((initiative, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="text-green-600 mb-4">{initiative.icon}</div>
                      <h3 className="text-2xl font-bold text-stone-800 mb-4">{initiative.title}</h3>
                      <p className="text-stone-600 mb-4 leading-relaxed">{initiative.description}</p>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <span className="text-green-700 font-semibold">Impact: </span>
                        <span className="text-green-600">{initiative.impact}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Personal Reflection */}
            <section className="py-20 bg-orange-100">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold text-orange-800">My Reflection</h2>
                  <p className="text-lg text-stone-700 leading-relaxed">
                    Learning about Indigenous language has changed how I view reconcilliation. It's not just about preserving words, but preserving culture and identity. Every act of languag learning is a step forward in reconcillation. Only by reviatlizing Indigneous language can we truly heal and move forward.
                  </p>
                </motion.div>
              </div>
            </section>

            {/* Success Stories */}
            <section className="py-20 bg-gradient-to-r from-stone-100 to-orange-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl font-bold text-stone-800 mb-6">Stories of Hope</h2>
                  <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                    Every learner, every conversation, every word spoken is a victory in the journey 
                    of language revitalization.
                  </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="bg-white p-8 rounded-xl shadow-lg"
                  >
                    <div className="flex items-start space-x-4">
                      <Heart className="h-8 w-8 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-stone-800 mb-3">Two Generations Learning Together</h3>
                        <p className="text-stone-600 leading-relaxed">
                          "I am learning SENĆOŦEN alongside my children, and I know there will be a time when they will surpass me in fluency. Using the language with my daughters has become a daily thing.."
                        </p>
                        <p className="text-stone-500 text-sm mt-3">— Anonymous SX̱EDŦELISIYE¹⁰</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="bg-white p-8 rounded-xl shadow-lg"
                  >
                    <div className="flex items-start space-x-4">
                      <TreePine className="h-8 w-8 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-stone-800 mb-3">Children Leading the Way</h3>
                        <p className="text-stone-600 leading-relaxed">
  "I have been working at our SENĆOŦEN Survival School in Kindergarten for over six years, 
  and now in a K/1 class for the past two years... [which now] houses 94 students."
</p>

                        <p className="text-stone-500 text-sm mt-3">— SX̱EDŦELISIYE , Language Educator¹⁰</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Reconciliation Framework */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl font-bold text-stone-800 mb-6">Reconciliation Through Language</h2>
                  <p className="text-xl text-stone-600 max-w-4xl mx-auto">
                    True reconciliation requires more than acknowledgment—it demands action. Language revitalization 
                    is one of the most meaningful ways to support Indigenous communities in reclaiming their heritage. Per the 94 Calls To Action, we must act.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {reconciliationPrinciples.map((principle, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-6 rounded-xl text-center ${
                        principle.color === 'orange' ? 'bg-orange-50 border-t-4 border-orange-400' :
                        principle.color === 'green' ? 'bg-green-50 border-t-4 border-green-400' :
                        'bg-stone-100 border-t-4 border-stone-400'
                      }`}
                    >
                      <h3 className={`text-2xl font-bold mb-4 ${
                        principle.color === 'orange' ? 'text-orange-600' :
                        principle.color === 'green' ? 'text-green-700' :
                        'text-stone-700'
                      }`}>
                        {principle.title}
                      </h3>
                      <p className="text-stone-600">{principle.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </PageTransition>
      </div>

       {/* Call to Action */}
        <section className="py-20 bg-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-white">How You Can Support Language Revival</h2>
              <p className="text-xl text-stone-300 max-w-4xl mx-auto">
                Whether you're Indigenous or non-Indigenous, there are meaningful ways to support 
                language revitalization efforts in British Columbia.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-orange-600 p-6 rounded-lg">
                  <h3 className="text-white font-bold text-lg mb-2">Learn</h3>
                  <p className="text-orange-100">Take language classes, use our flashcard app, or attend cultural events.</p>
                </div>
                <div className="bg-green-600 p-6 rounded-lg">
                  <h3 className="text-white font-bold text-lg mb-2">Donate</h3>
                  <p className="text-green-100">Support Indigenous language programs financially.</p>
                </div>
                <div className="bg-stone-600 p-6 rounded-lg">
                  <h3 className="text-white font-bold text-lg mb-2">Advocate</h3>
                  <p className="text-stone-100">Speak up for Indigenous language rights in your community.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
    </>
  );
};

export default RevivalReconciliation;
