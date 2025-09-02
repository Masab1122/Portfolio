import React from 'react';
import { User, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-blue-700">Me</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="text-blue-700" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Who I Am</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  I'm Musab Bin Tahir, a passionate Full Stack Developer specializing in the MERN stack. 
                  With a strong foundation in both frontend and backend technologies, I create seamless 
                  web experiences from concept to deployment.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Target className="text-emerald-700" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">My Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  I strive to build robust, scalable web applications that solve real-world problems. 
                  My goal is to bridge the gap between creative design and functional code, 
                  delivering solutions that users love and businesses rely on.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-700 to-blue-800 p-8 rounded-2xl shadow-lg text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Experience</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Years of Experience</span>
                    <span className="font-bold text-xl">1+ Year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Projects Completed</span>
                    <span className="font-bold text-xl">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Technologies Mastered</span>
                    <span className="font-bold text-xl">10+</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">What I Do</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Full-stack web application development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>RESTful API design and implementation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Database design and optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Responsive UI/UX development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Modern JavaScript frameworks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;