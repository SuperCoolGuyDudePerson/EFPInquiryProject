import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-stone-300 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3">
          <p className="text-sm text-stone-400">
           I would like to gratefully acknowledge that this website was created on the traditional and ancestral lands of the Coast Salish People – speciically, the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish) and səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh) First Nations.


          </p>
         <p className="flex items-center justify-center space-x-1 text-xs text-stone-500 font-bold">
          <span>With respect,</span>
          <Heart className="h-4 w-4 text-red-500 fill-current" />
          <span>Kenny</span>
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
