import { FiGithub, FiExternalLink } from 'react-icons/fi';
import zomatoImg from '../assets/zomato-data-analysis.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Zomato Data Analysis",
      description: "Comprehensive analysis of Zomato restaurant data to derive business insights and patterns. Includes customer behavior analysis, price optimization recommendations, and market trend predictions.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      metric: "92% Accuracy",
      image: zomatoImg,
      githubLink: "#",
      liveLink : "#"
    },
    {
      id: 2,
      title: "Inventory Flask API",
      description: "Restful API for real-time inventory tracking. Integrated with a PostgreSQL database to manage supply chain data.",
      tech: ["Flask", "PostgreSQL", "psycopg2"],
      metric: "Latency < 50ms",
      image: "https://placehold.co/600x400/161b22/white?text=API+Documentation+UI",
      githubLink: "#",
      liveLink : "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#0d1117] font-mono">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl text-white mb-12 flex items-center">
          <span className="text-blue-400 mr-2">class</span> PortfolioProjects:
        </h2>

        <div className="space-y-16">
          {projects.map((proj) => (
            <div key={proj.id} className="group relative">
              {/* Notebook Sidebar Line */}
              <div className="absolute left-[-20px] top-0 bottom-0 w-1 bg-gray-800 group-hover:bg-blue-500 transition-colors"></div>

              {/* Input Cell (The Tech) */}
              <div className="flex items-start gap-4 mb-2">
                <span className="text-blue-500 font-bold whitespace-nowrap text-sm">In [{proj.id}]:</span>
                <div className="flex-1 bg-[#161b22] border border-gray-800 rounded-lg p-4">
                  <h3 className="text-xl font-bold text-white mb-2 underline decoration-blue-500/30">
                    {proj.title}
                  </h3>
                  <pre className="text-xs md:text-sm text-green-400 overflow-x-auto">
                    <code>{proj.tech}</code>
                  </pre>
                  <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Output Cell (The Result) */}
              <div className="flex items-start gap-4">
                <span className="text-red-400 font-bold whitespace-nowrap text-sm">Out [{proj.id}]:</span>
                <div className="flex-1">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-black/30 border border-gray-800 rounded-lg overflow-hidden p-2">
                      <img 
                        src={proj.image} 
                        alt={proj.title} 
                        className="rounded border border-gray-800 grayscale hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="p-4 flex flex-col justify-between">
                        <div>
                          <span className="text-xs uppercase tracking-widest text-gray-500">Key Metric</span>
                          <div className="text-2xl font-bold text-blue-400">{proj.metric}</div>
                        </div>
                        <div className="flex gap-4 mt-6">
                          <a href={proj.link} className="flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors">
                            <FiGithub /> Source Code
                          </a>
                          <a href={proj.link} className="flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors">
                            <FiExternalLink /> Live Demo
                          </a>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;