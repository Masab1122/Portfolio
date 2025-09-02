import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="text-emerald-400" size={24} />
            <span className="text-2xl font-bold">Musab Bin Tahir</span>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Full Stack Developer passionate about creating exceptional web experiences with modern technologies.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart className="text-red-500 fill-current" size={16} />
            <span>using React.js & Tailwind CSS</span>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-500">
              © 2025 Musab Bin Tahir. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;