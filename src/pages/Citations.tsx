import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Download, School as Scholar } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Citations = () => {
const sources = [
  {
    category: "Academic Articles",
    items: [
      {
        authors: "Britannica",
        year: "n.d.",
        title: "Salishan languages",
        publisher: "Encyclopædia Britannica",
        location: "https://www.britannica.com/topic/Salishan-languages",
        type: "Online Resource",
        description: "General overview of the Salishan language family, including SENĆOŦEN and Halq’eméylem."
      },
      {
        authors: "Thom, B.",
        year: "2005",
        title: "Coast Salish senses of place, dwelling, meaning, power, property and territory in the Coast Salish world",
        publisher: "ResearchGate",
        location: "https://www.researchgate.net/publication/41615918",
        type: "Journal Article",
        description: "Explores Indigenous perspectives on land, language, and power among Coast Salish peoples."
      }
    ]
  },
  {
    category: "Government & Official Reports",
    items: [
      {
        authors: "Truth and Reconciliation Commission of Canada",
        year: "2015",
        title: "Calls to Action",
        publisher: "National Centre for Truth and Reconciliation",
        location: "https://nctr.ca/records/reports/",
        type: "Report",
        description: "Recommends concrete actions for reconciliation, including Indigenous language revitalization."
      },
      {
        authors: "Government of Canada",
        year: "2021",
        title: "UNDRIP Implementation Act",
        publisher: "Department of Justice Canada",
        location: "https://www.justice.gc.ca/eng/declaration/index.html",
        type: "Legislation",
        description: "Outlines Canada's commitment to the United Nations Declaration on the Rights of Indigenous Peoples."
      },
      {
        authors: "First Peoples’ Cultural Council",
        year: "2023",
        title: "Report on the Status of B.C. First Nations Languages",
        publisher: "FPCC",
        location: "https://fpcc.ca/wp-content/uploads/2023/02/FPCC-LanguageReport-23.02.14-FINAL.pdf",
        type: "Report",
        description: "A 2023 update on the vitality of First Nations languages in British Columbia."
      },
      {
        authors: "First Peoples’ Cultural Council",
        year: "2013",
        title: "Language Revitalization Planning Toolkit",
        publisher: "FPCC",
        location: "https://fpcc.ca/resource/language-revitalization-planning-toolkit/",
        type: "Educational Resource",
        description: "Toolkit designed to support Indigenous communities in planning language revival strategies."
      }
    ]
  },
  {
    category: "Community & Educational Resources",
    items: [
      {
        authors: "University of the Fraser Valley",
        year: "n.d.",
        title: "Halq’eméylem Booklet",
        publisher: "University of the Fraser Valley",
        location: "https://www.ufv.ca/media/assets/mathematics/halq-booklet-j.pdf",
        type: "Educational Resource",
        description: "Introductory learning resource for Halq’eméylem with cultural context and pronunciation."
      }
    ]
  },
  {
    category: "Digital & Multimedia Resources",
    items: [
      {
        authors: "FirstVoices",
        year: "n.d.",
        title: "SENĆOŦEN Language Portal",
        publisher: "First Peoples’ Cultural Council",
        location: "https://www.firstvoices.com/explore/FV/sections/Data/SENCOTEN/SENCOTEN/SENCOTEN",
        type: "Online Platform",
        description: "Interactive platform for exploring SENĆOŦEN words, audio, and games."
      },
      {
        authors: "FirstVoices",
        year: "n.d.",
        title: "Halq’eméylem Language Portal",
        publisher: "First Peoples’ Cultural Council",
        location: "https://www.firstvoices.com/explore/FV/sections/Data/Halkomelem/Halqemeylem/Halqemeylem",
        type: "Online Platform",
        description: "Digital resource for learning and exploring Halq’eméylem language content."
      },
      {
        authors: "YouTube: SENĆOŦEN Language Channel",
        year: "n.d.",
        title: "SENĆOŦEN Videos",
        publisher: "YouTube",
        location: "https://www.youtube.com/@sencoenvideos4821/videos",
        type: "Multimedia",
        description: "Video-based language instruction and storytelling in SENĆOŦEN."
      },
      {
        authors: "Lisa Helps",
        year: "2022",
        title: "SENĆOŦEN: Language Revitalization in Action",
        publisher: "YouTube",
        location: "https://www.youtube.com/watch?v=FJoKS9YyU5w",
        type: "Multimedia",
        description: "Video highlighting efforts in SENĆOŦEN language immersion and classroom use."
      },
      {
        authors: "W̱SÁNEĆ Leadership Council",
        year: "2022",
        title: "Finding Our Talk – SENĆOŦEN Language",
        publisher: "YouTube",
        location: "https://www.youtube.com/watch?v=Onh9lZwkvto",
        type: "Multimedia",
        description: "A short documentary showcasing the revitalization of SENĆOŦEN through immersion education."
      },
      {
        authors: "SENĆOŦEN Language Department",
        year: "2024",
        title: "Learning SENĆOŦEN Through Our Worldview",
        publisher: "YouTube",
        location: "https://www.youtube.com/watch?v=TknGRZeD6O4",
        type: "Multimedia",
        description: "Video showing how worldview and culture are woven into SENĆOŦEN language revitalization."
      },
      {
        authors: "The Reach Gallery Museum",
        year: "2021",
        title: "Halq’eméylem Language Learning Journey – Christine Point (Tselxát)",
        publisher: "YouTube",
        location: "https://www.youtube.com/watch?v=zgLmtwMrtpg",
        type: "Multimedia",
        description: "Elder Christine Point shares her journey in preserving and teaching Halq’eméylem."
      },
      {
        authors: "CBC News",
        year: "2016",
        title: "Stó:lō Language Almost Extinct, Says Elder Elizabeth Phillips",
        publisher: "YouTube",
        location: "https://www.youtube.com/watch?v=pty6Ib-INTo",
        type: "Multimedia",
        description: "Interview with Elder Elizabeth Phillips, one of the last fluent speakers of Halq’eméylem."
      },
      {
        authors: "Vancouver Island University",
        year: "2019",
        title: "SENĆOŦEN Greeting Example",
        publisher: "YouTube",
        location: "https://www.youtube.com/watch?v=NRj2x1op3Us",
        type: "Multimedia",
        description: "Short clip demonstrating pronunciation and cultural greeting usage in SENĆOŦEN."
      }
    ]
  }
];


  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Book': return 'bg-orange-100 text-orange-700';
      case 'Journal Article': return 'bg-green-100 text-green-700';
      case 'Report': return 'bg-blue-100 text-blue-700';
      case 'Online Resource': return 'bg-purple-100 text-purple-700';
      case 'Educational Resource': return 'bg-yellow-100 text-yellow-700';
      case 'Dictionary': return 'bg-pink-100 text-pink-700';
      case 'Oral History Collection': return 'bg-indigo-100 text-indigo-700';
      case 'Legislation': return 'bg-red-100 text-red-700';
      case 'Online Platform': return 'bg-teal-100 text-teal-700';
      case 'Multimedia': return 'bg-indigo-100 text-indigo-700';
      default: return 'bg-stone-100 text-stone-700';
    }
  };

return (
  <PageTransition>
    <div className="min-h-screen bg-stone-50">
      <div className="bg-gradient-to-r from-stone-800 to-stone-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Citations & Sources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-stone-300 max-w-4xl mx-auto"
          >
            This website draws from extensive research, community knowledge, and official resources. Below are some resources for additional learning alongside sources this website takes from.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {sources.map((category, categoryIndex) => (
          <motion.section
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-stone-800 mb-8 flex items-center">
              <BookOpen className="h-8 w-8 text-orange-600 mr-3" />
              {category.category}
            </h2>
            <div className="space-y-6">
              {category.items.map((source, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-stone-800 mb-2">{source.title}</h3>
                          <p className="text-stone-600 font-medium">{source.authors} ({source.year})</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(source.type)}`}>
                          {source.type}
                        </span>
                      </div>
                      <div className="text-stone-600 mb-3">
                        <span className="font-medium">{source.publisher}</span>
                        {source.location && <span>, {source.location}</span>}
                      </div>
                      <p className="text-stone-700 leading-relaxed">{source.description}</p>
                    </div>
                    <div className="flex space-x-3 lg:ml-6">
                      {source.location?.startsWith('http') ? (
                        <a
                          href={source.location}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-orange-100 hover:bg-orange-200 text-orange-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Visit</span>
                        </a>
                      ) : (
                        <button className="flex items-center space-x-2 bg-stone-100 hover:bg-stone-200 text-stone-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                          <Download className="h-4 w-4" />
                          <span>Reference</span>
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* Acknowledgments */}
<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="mt-16 bg-white rounded-xl shadow-lg p-8"
>
  <h2 className="text-3xl font-bold text-stone-800 mb-6">Works Cited</h2>
  <div className="space-y-4 text-stone-600 leading-relaxed text-base">

    <p>“Endangered Languages in Canada.” <em>SAN Endangered Languages Project</em>, https://www.sanelp.ca/endangered-languages. Accessed 31 July 2025.¹</p>

    <p>First Peoples' Cultural Council. <em>FirstVoices</em>, https://www.firstvoices.com.²</p>

    <p>“Halq'eméylem.” <em>SAN Endangered Languages Project</em>, https://www.sanelp.ca/endangered-languages/halqemeylem. Accessed 31 July 2025.³</p>

    <p>“Salishan Languages.” <em>Encyclopedia Britannica</em>, 13 May 2013, https://www.britannica.com/topic/Salishan-languages. Accessed 31 July 2025.⁴</p>

    <p>Thom, Brian. “Coast Salish Senses of Place: Dwelling, Meaning, Power, Property, and Territory in the Coast Salish World.” <em>ResearchGate</em>, https://www.researchgate.net/publication/41615918.⁵</p>

    <p>First Peoples' Cultural Council. <em>Indigenous Languages in B.C.: A Statistical Report</em>. FPCC, 14 Feb. 2023, https://fpcc.ca/wp-content/uploads/2023/02/FPCC-LanguageReport-23.02.14-FINAL.pdf.⁶</p>

    <p>Walters, SX̱EDŦELISIYE. “Our Children Are Our Hope and Future: Reflections of a WSÁNEĆ Language Apprentice Turned Language Immersion Teacher.” <em>Terralingua</em>, https://terralingua.org/stories/our-children-are-our-hope-and-future-reflections-of-a-wsanec-language-apprentice-turned-language-immersion-teacher.¹⁰</p>

    <p>“SENĆOŦEN.” <em>First Peoples’ Map of B.C.</em>, https://maps.fpcc.ca/languages/sencoten. Accessed 31 July 2025.⁸</p>

    <p>“Halkomelem.” <em>First Peoples’ Map of B.C.</em>, https://maps.fpcc.ca/languages/halkomelem. Accessed 31 July 2025.⁹</p>

    <p className="text-xs italic text-stone-500 mt-4 font-bold">
      Superscript numbers correspond to references cited throughout the site and may appear out of numerical order to match MLA alphabetization.
    </p>

  </div>
</motion.section>




      </div>
    </div>
  </PageTransition>
);
};

export default Citations;