import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Volume2, CheckCircle, XCircle, Trophy, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const flashcards = [
  {
    id: 1,
    indigenous: "éy swáyel",
    english: "Good Day",
    pronunciation: "ay SWAH-yul",
    language: "Halq'eméylem",
    category: "Category1",
    audioPath: "/audio/Hlang/Hi.mp3"
  },
  {
    id: 2,
    indigenous: "alíliyem",
    english: "Laughter",
    pronunciation: "ah-LEE-lee-yem",
    language: "Halq'eméylem",
    category: "Category2",
    audioPath: "/audio/Hlang/Laughter.mp3"
  },
  {
    id: 3,
    indigenous: "alhteláwtxw",
    english: "Restaurant",
    pronunciation: "alh-teh-LAU-tukh",
    language: "Halq'eméylem",
    category: "Category5",
    audioPath: "/audio/Hlang/Restaurant.mp3"
  },
  {
    id: 4,
    indigenous: "álex",
    english: "Sibling",
    pronunciation: "AH-lekh",
    language: "Halq'eméylem",
    category: "Category1",
    audioPath: "/audio/Hlang/Sibling.mp3"
  },
  {
    id: 5,
    indigenous: "á'a",
    english: "Yes",
    pronunciation: "AH-ah",
    language: "Halq'eméylem",
    category: "Category2",
    audioPath: "/audio/Hlang/Yes.mp3"
  },
  {
    id: 6,
    indigenous: "tewet ta' má:l?",
    english: "Who is your father?",
    pronunciation: "teh-wet tah MAHL",
    language: "Halq'eméylem",
    category: "Category3",
    audioPath: "/audio/Hlang/Father.mp3"
  },
  {
    id: 7,
    indigenous: "tewát tha' tá:l?",
    english: "Who is your mother?",
    pronunciation: "teh-waht thah TAHL",
    language: "Halq'eméylem",
    category: "Category4",
    audioPath: "/audio/Hlang/Mother.mp3"
  },
  {
    id: 8,
    indigenous: "Á,PEL",
    english: "Apple",
    pronunciation: "AH-pel",
    language: "SENĆOŦEN",
    category: "Category3",
    audioPath: "/audio/Slang/Apple.mp3"
  },
  {
    id: 9,
    indigenous: "COM,PUTS",
    english: "Boot",
    pronunciation: "kom-puts",
    language: "SENĆOŦEN",
    category: "Category4",
    audioPath: "/audio/Slang/Boots.mp3"
  },
  {
    id: 10,
    indigenous: "CLIPS",
    english: "Grapes",
    pronunciation: "kleeps",
    language: "SENĆOŦEN",
    category: "Category5",
    audioPath: "/audio/Slang/Grapes.mp3"
  },
  {
    id: 11,
    indigenous: "Á,LEṈ",
    english: "House",
    pronunciation: "AH-len",
    language: "SENĆOŦEN",
    category: "Category1",
    audioPath: "/audio/Slang/Home.mp3"
  },
  {
    id: 12,
    indigenous: "SÁN ȻENs SNÁ?",
    english: "What is your name?",
    pronunciation: "saan chens snaah",
    language: "SENĆOŦEN",
    category: "Category1",
    audioPath: "/audio/Slang/Name.mp3"
  },
  {
    id: 13,
    indigenous: "SÁN TŦEN MÁN?",
    english: "Who is your father?",
    pronunciation: "saan tuh-then maan",
    language: "SENĆOŦEN",
    category: "Category2",
    audioPath: "/audio/Slang/Father.mp3"
  },
  {
    id: 14,
    indigenous: "SÁN ŦEN TÁN?",
    english: "Who is your mother?",
    pronunciation: "saan then taan",
    language: "SENĆOŦEN",
    category: "Category3",
    audioPath: "/audio/Slang/Mother.mp3"
  }
];

// Utility: Shuffle array
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const FlashcardGame = () => {
  const [shuffledCards, setShuffledCards] = useState(shuffleArray(flashcards));
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [showResult, setShowResult] = useState(false);

  const filteredCards =
    selectedLanguage === 'all'
      ? shuffledCards
      : shuffledCards.filter((card) => card.language === selectedLanguage);

  const currentCard = filteredCards[currentCardIndex];

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleNext = () => {
    setIsFlipped(false);
    if (currentCardIndex < filteredCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const handleCorrect = () => {
    setCorrectAnswers(correctAnswers + 1);
    handleNext();
  };

  const handleWrong = () => {
    setWrongAnswers(wrongAnswers + 1);
    handleNext();
  };

  const resetGame = () => {
    setShuffledCards(shuffleArray(flashcards));
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setShowResult(false);
  };

const playAudio = (path) => {
  const base = import.meta.env.BASE_URL;
  const fullPath = `${base}${path.replace(/^\/+/, '')}`; // removes leading slash
  const audio = new Audio(fullPath);
  audio.play().catch(console.error);
};

  
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-stone-50 to-green-50 pb-16">
        <div className="bg-gradient-to-r from-orange-600 to-green-700 py-16 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Interactive Language Learning</h1>
          <p className="text-xl text-orange-100">
           Practice SENĆOŦEN and Halq'eméylem words through interactive flashcards².
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <label className="text-stone-700 font-medium">Language:</label>
              <select
                value={selectedLanguage}
                onChange={(e) => {
                  setSelectedLanguage(e.target.value);
                  resetGame();
                }}
                className="bg-stone-100 border border-stone-300 rounded-lg px-4 py-2"
              >
                <option value="all">All Languages</option>
                <option value="SENĆOŦEN">SENĆOŦEN</option>
                <option value="Halq'eméylem">Halq'eméylem</option>
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-stone-600">
                Card {currentCardIndex + 1} of {filteredCards.length}
              </div>
              <button
                onClick={resetGame}
                className="flex items-center space-x-2 bg-stone-200 hover:bg-stone-300 text-stone-700 px-4 py-2 rounded-lg"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {showResult ? (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-stone-800 mb-4">Great Job!</h2>
              <p className="text-xl text-stone-600 mb-6">
                You completed {filteredCards.length} flashcards
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-8">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{correctAnswers}</div>
                  <div className="text-green-700">Correct</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{wrongAnswers}</div>
                  <div className="text-red-700">Wrong</div>
                </div>
              </div>
              <button
                onClick={resetGame}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold"
              >
                Play Again
              </button>
            </div>
          ) : (
            <div className="relative w-full h-96 perspective">
              <div
                onClick={handleFlip}
                className={`relative w-full h-full transition-transform duration-700 ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute w-full h-full backface-hidden">
                  <div className={`w-full h-full rounded-xl shadow-xl p-8 flex flex-col justify-center items-center text-center text-white ${
                    currentCard?.language === 'SENĆOŦEN'
                      ? 'bg-gradient-to-br from-orange-500 to-orange-600'
                      : 'bg-gradient-to-br from-green-600 to-green-700'
                  }`}>
                    <span className="mb-4 text-sm font-medium px-3 py-1 rounded-full">
                      {currentCard?.language}
                    </span>
                    <div className="text-5xl font-bold mb-4">{currentCard?.indigenous}</div>
                    <div className="text-xl opacity-90 mb-6">/{currentCard?.pronunciation}/</div>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playAudio(currentCard?.audioPath);
                        }}
                        className="bg-white/20 hover:bg-white/30 p-3 rounded-full"
                      >
                        <Volume2 className="h-6 w-6" />
                      </button>
                      <div className="text-sm opacity-75">Tap to reveal meaning</div>
                    </div>
                  </div>
                </div>

                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                  <div className="w-full h-full rounded-xl shadow-xl p-8 border-2 border-stone-200 flex flex-col justify-center items-center text-center bg-white">
                    <span className="mb-4 text-sm font-medium px-3 py-1 rounded-full bg-stone-200 text-stone-700">
                      {currentCard?.category}
                    </span>
                    <div className="text-5xl font-bold text-stone-800 mb-4">{currentCard?.english}</div>
                    <div className="text-2xl text-stone-600 mb-6">{currentCard?.indigenous}</div>
                    <div className="text-lg text-stone-500 mb-8">/{currentCard?.pronunciation}/</div>
                    <div className="flex space-x-4">
                      <button onClick={(e) => { e.stopPropagation(); handleWrong(); }} className="flex items-center space-x-2 bg-red-100 hover:bg-red-200 text-red-700 px-6 py-3 rounded-lg">
                        <XCircle className="h-5 w-5" />
                        <span>Hard</span>
                      </button>
                      <button onClick={(e) => { e.stopPropagation(); handleCorrect(); }} className="flex items-center space-x-2 bg-green-100 hover:bg-green-200 text-green-700 px-6 py-3 rounded-lg">
                        <CheckCircle className="h-5 w-5" />
                        <span>Easy</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!showResult && (
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={handlePrevious}
                disabled={currentCardIndex === 0}
                className="bg-stone-200 hover:bg-stone-300 disabled:opacity-50 disabled:cursor-not-allowed text-stone-700 px-6 py-3 rounded-lg font-semibold"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold"
              >
                <span>Next</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        <style jsx>{`
          .perspective {
            perspective: 1000px;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
        `}</style>
      </div>
    </PageTransition>
  );
};

export default FlashcardGame;
