const Skillss = () => {
  const categories = [
    {
      title: "Programming & Backend",
      skills: ["Python", "SQL (PostgreSQL)", "Flask", "REST APIs", "FastAPI"]
    },
    {
      title: "Data Analysis & ML",
      skills: ["Pandas", "NumPy", "Scikit-Learn", "Predictive Modeling", "Feature Engineering", "Data Cleaning"]
    },
    {
      title: "Visualization & BI",
      skills: ["Tableau", "Seaborn", "Matplotlib", "Power BI", "Exploratory Data Analysis (EDA)"]
    },
    {
      title: "Tools & Environments",
      skills: ["Git/GitHub", "Jupyter Notebooks", "IBM Cloud", "VS Code", "Linux/Bash"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-transparent font-mono">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl text-white mb-12 flex items-center gap-2">
          <span className="text-blue-400">#</span> system_capabilities.json
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-[#161b22]/80 backdrop-blur-sm border border-gray-800 p-6 rounded-lg hover:border-blue-500/50 transition-colors group">
              <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
                <span className="text-gray-600 text-xs">0{idx + 1}.</span> {cat.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-gray-900 text-gray-300 text-sm rounded-md border border-gray-700 group-hover:border-gray-600 transition-all hover:text-white hover:bg-blue-900/20 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skillss;