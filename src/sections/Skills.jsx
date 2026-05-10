import { 
  SiPython, SiPandas, SiNumpy, SiScikitlearn, 
  SiFlask, SiPlotly, SiPostgresql 
} from 'react-icons/si';
import { IoLogoTableau } from "react-icons/io5";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Languages",
      skills: [
        { name: "Python", icon: <SiPython className="text-yellow-400" />, level: "95%" },
        { name: "SQL", icon: <SiPostgresql className="text-blue-400" />, level: "85%" },
      ],
    },
    {
      title: "Data Science Stack",
      skills: [
        { name: "Pandas", icon: <SiPandas className="text-indigo-400" />, level: "90%" },
        { name: "NumPy", icon: <SiNumpy className="text-blue-500" />, level: "85%" },
        { name: "Scikit-Learn", icon: <SiScikitlearn className="text-orange-400" />, level: "80%" },
      ],
    },
    {
      title: "Visualization & Web",
      skills: [
        { name: "Tableau", icon: <IoLogoTableau className="text-blue-600" />, level: "85%" },
        { name: "Seaborn", icon: <SiPlotly className="text-green-400" />, level: "80%" },
        { name: "Flask", icon: <SiFlask className="text-white" />, level: "75%" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#0d1117] font-mono">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-2xl text-blue-400 flex items-center gap-2">
            <span className="text-green-500">import</span> skills_matrix as sm
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-[#161b22] border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 shadow-xl">
              <h3 className="text-gray-400 text-sm mb-6 uppercase tracking-widest border-b border-gray-800 pb-2">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform">
                          {skill.icon}
                        </span>
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{skill.level}</span>
                    </div>
                    {/* The "Data Bar" */}
                    <div className="w-full bg-gray-900 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-linear-to-r from-blue-600 to-blue-400 h-full rounded-full transition-all duration-1000"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Footer Note */}
        <div className="mt-12 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg text-center">
          <p className="text-sm text-gray-500 italic">
            // Note: Proficiency levels are calculated based on hours of production-level code and complexity of deployed models.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;