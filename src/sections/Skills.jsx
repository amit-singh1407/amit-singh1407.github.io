import { 
  SiPython, SiPandas, SiNumpy, SiScikitlearn, 
  SiFlask, SiPlotly, SiPostgresql, 
  SiMongodb,
  SiFastapi,
  SiHtml5,
  SiCss,
  SiMysql
} from 'react-icons/si';
import { IoLogoTableau, IoBarChart } from "react-icons/io5";
import { FcScatterPlot } from "react-icons/fc";
import { FaGitAlt , FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";


const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <SiPython className="text-yellow-400" />},
        { name: "SQL", icon: <SiPostgresql className="text-blue-400" />},
      ],
    },
    {
      title: "Web & Backend Development",
      skills: [
        { name: "Flask", icon: <SiFlask className="text-yellow-400" />},
        { name: "FastAPI", icon: <SiFastapi className="text-blue-400" />},
        { name: "HTML", icon: <SiHtml5 className="text-blue-400" />},
        { name: "CSS", icon: <SiCss className="text-blue-400" />},
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-indigo-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      ],
    },
    {
      title: "AI/Machine Learning",
      skills: [
        { name: "Pandas", icon: <SiPandas className="text-blue-600" />},
        { name: "Numpy", icon: <SiNumpy className="text-green-400" />},
        { name: "Scikit-learn", icon: <SiScikitlearn className="text-white" />},
        { name: "ML Ops", icon: <SiFlask className="text-white" />},
      ],
    },
    {
      title: "Data Visualization",
      skills: [
        { name: "Matplotlib", icon: <SiPlotly className="text-blue-600" />},
        { name: "Seaborn", icon: <FcScatterPlot className="text-green-400" />},
        { name: "Power BI", icon: <IoBarChart className="text-yellow-300" />},
        { name: "Tableau", icon: <IoLogoTableau className="text-purple-200" />},
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
        { name: "Github", icon: <FaGithub className="text-gray-400" /> },
        { name: "VS Code", icon: <VscVscode className="text-blue-600" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 font-mono">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-2xl text-blue-400 flex items-center gap-2">
            <span className="text-green-500">import</span>skills_matrix as sm
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="theme-bg-card border theme-border rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 shadow-xl">
              <h3 className="theme-text-muted text-sm mb-6 uppercase tracking-widest border-b theme-border-subtle pb-2">
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
                        <span className="theme-text-primary font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs theme-text-muted">{skill.level}</span>
                    </div>
                    {/* The "Data Bar" */}
                    <div className="w-full theme-bg-tag rounded-full h-1.5 overflow-hidden">
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
          <p className="text-sm theme-text-muted italic">
            // Note: Proficiency levels are calculated based on hours of production-level code and complexity of deployed models.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;