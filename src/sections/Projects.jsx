import { FiGithub, FiExternalLink } from 'react-icons/fi';
import zomatoImg from '../assets/zomato-data-analysis.png';
import wasteImg from '../assets/waste-classification.png';
import airbnbImg from '../assets/Airbnb.png';
import coffeeImg from '../assets/coffee.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Zomato Data Analysis",
      description: "Comprehensive analysis of Zomato restaurant data to derive business insights and patterns. Includes customer behavior analysis, price optimization recommendations, and market trend predictions.",
      tech: ["Python | Pandas | Matplotlib | Seaborn"],
      metric: "92% Accuracy",
      image: zomatoImg,
      githubLink: "https://github.com/amit-singh1407/zomato-analytics-dashboard.git",
      liveLink : "https://amit-singh1407.github.io/zomato-analytics-dashboard/"
    },
    {
      id: 2,
      title: "Waste Management System",
      description: "AI-powered Smart Waste Classification System that automatically detects and sorts waste into biodegradable, recyclable, and non-recyclable categories using computer vision and machine learning.",
      tech: ["Python | OpenCV | gradio | ultralytics/yolov8 | pillow"],
      metric: "Improved Efficiency by 80%",
      image: wasteImg,

      githubLink: "https://github.com/amit-singh1407/waste_classification",
      liveLink:  "https://amit1407-waste-classification.hf.space/" 
    },
    {
      id: 3,
      title: "Airbnb Data Analysis",
      description: "A full-stack Airbnb Analytics Dashboard built using React.js, Tailwind CSS, Recharts, Flask, Pandas, and NumPy. The project analyzes real Airbnb dataset records and presents interactive charts, pricing insights, room-type distributions, neighborhood trends, and availability analytics through a modern responsive dashboard UI with REST API integration.",
      tech: [
        "Frontend: React | Tailwind CSS | Axios\n" +
        "Backend: Flask | Pandas | NumPy | REST API\n" +
        "Data Viz: Recharts"
      ],
      metric: "92% Accuracy",
      image: airbnbImg,

      githubLink: "https://github.com/amit-singh1407/Airbnb-Analytics-Dashboard",
      liveLink : "https://amit-singh1407.github.io/Airbnb-Analytics-Dashboard/"
    },
    {
      id: 4,
      title: "Coffee Shop Data Analysis",
      description: "A full-stack Coffee Shop Analytics Dashboard built using React.js, Tailwind CSS, Recharts, Flask, Pandas, and NumPy. The project analyzes real Coffee Shop dataset records and presents interactive charts, pricing insights, menu-item performance, customer behavior, and sales trends through a modern responsive dashboard UI with REST API integration.",
      tech: [
        "Frontend: React | Tailwind CSS | Axios\n" +
        "Backend: Flask | Pandas | NumPy | REST API\n" +
        "Data Viz: Recharts"
      ],
      metric: "92% Accuracy",
      image: coffeeImg,

      githubLink: "https://github.com/amit-singh1407/Coffee-Shop-Sales-Intelligence-Dashboard.git",
      liveLink : "https://amit-singh1407.github.io/Coffee-Shop-Sales-Intelligence-Dashboard/"
    }
  ];

  return (
    <section id="projects" className="py-20 theme-bg-primary font-mono">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-xl sm:text-2xl theme-text-primary mb-12 flex items-center">
          <span className="text-blue-400 mr-2">class</span> PortfolioProjects:
        </h2>

        <div className="space-y-16">
          {projects.map((proj) => (
            <div key={proj.id} className="group relative">
              {/* Notebook Sidebar Line */}
              <div className="absolute left-5 top-0 bottom-0 hidden sm:block w-1 theme-bg-tag group-hover:bg-blue-500 transition-colors"></div>

              {/* Input Cell (The Tech) */}
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-2">
                <span className="text-blue-500 font-bold whitespace-nowrap text-sm">In [{proj.id}]:</span>
                <div className="flex-1 min-w-0 theme-bg-card border theme-border rounded-lg p-4">
                  <h3 className="text-xl font-bold theme-text-primary mb-2 underline decoration-blue-500/30">
                    {proj.title}
                  </h3>
                  <pre className="text-xs md:text-sm text-green-400 overflow-x-auto whitespace-pre-wrap wrap-break-words">
                    <code>{proj.tech}</code>
                  </pre>
                  <p className="theme-text-secondary mt-4 text-sm leading-relaxed wrap-break-words">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Output Cell (The Result) */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <span className="text-red-400 font-bold whitespace-nowrap text-sm">Out [{proj.id}]:</span>
                <div className="flex-1 min-w-0">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 theme-bg-card-alt border theme-border rounded-lg overflow-hidden p-2">
                      <img 
                        src={proj.image} 
                        alt={proj.title} 
                        className="w-full rounded border theme-border grayscale hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="p-4 flex flex-col justify-between">
                        <div>
                          <span className="text-xs uppercase tracking-widest theme-text-muted">Key Metric</span>
                          <div className="text-2xl font-bold text-blue-400">{proj.metric}</div>
                        </div>
                        <div className="flex gap-4 mt-6">
                          <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs theme-text-secondary hover:theme-text-primary transition-colors">
                            <FiGithub /> Source Code
                          </a>
                          <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs theme-text-secondary hover:theme-text-primary transition-colors">
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
