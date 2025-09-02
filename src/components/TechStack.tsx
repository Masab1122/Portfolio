import React from 'react';
import { techStack } from '../data/techStack';

const TechStack: React.FC = () => {
  const groupedTech = techStack.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, typeof techStack>);

  const categoryTitles = {
    frontend: 'Frontend Technologies',
    backend: 'Backend Technologies',
    database: 'Database Technologies',
    tools: 'Tools & Others'
  };

  const categoryColors = {
    frontend: 'from-blue-500 to-blue-600',
    backend: 'from-emerald-500 to-emerald-600',
    database: 'from-amber-500 to-amber-600',
    tools: 'from-purple-500 to-purple-600'
  };

  const renderProficiencyBar = (proficiency: number) => (
    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
      <div 
        className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${proficiency * 20}%` }}
      ></div>
    </div>
  );

  return (
    <section id="tech-stack" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tech <span className="text-blue-700">Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My journey with modern web technologies, from frontend frameworks to backend services
          </p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {Object.entries(groupedTech).map(([category, techs]) => (
              <div key={category} className="space-y-4">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} bg-clip-text text-transparent mb-6`}>
                  {categoryTitles[category as keyof typeof categoryTitles]}
                </h3>
                
                <div className="space-y-4">
                  {techs.map((tech, index) => (
                    <div 
                      key={tech.name}
                      className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{tech.icon}</span>
                          <span className="font-semibold text-gray-800 text-lg">{tech.name}</span>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                          {tech.proficiency}/5
                        </span>
                      </div>
                      {renderProficiencyBar(tech.proficiency)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-700 to-emerald-600 p-8 rounded-2xl shadow-xl text-white">
              <h3 className="text-3xl font-bold mb-4">MERN Stack Specialist</h3>
              <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Specialized in MongoDB, Express.js, React.js, and Node.js ecosystem. 
                I create end-to-end solutions that are both performant and maintainable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;