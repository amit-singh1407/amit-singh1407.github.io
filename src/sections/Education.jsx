const Education = () => {
  const education = [
    {
      degree: "MCA in Data Science & AI",
      institution: "Babu Banarasi Das Unversity",
      period: "2025 — 2027 (Expected)",
      status: "Executing...",
      details: "Advanced studies in Neural Networks, Big Data Analytics, and AI Ethics."
    },
    {
      degree: "BCA in Data Science & AI",
      institution: "Your University Name",
      period: "2021 — 2024",
      status: "Completed",
      details: "Foundation in Statistics, Data Structures, and Machine Learning basics."
    }
  ];

  return (
    <section id="education" className="py-20 bg-[#0d1117] font-mono">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl text-white mb-12 flex items-center">
          <span className="text-blue-400 mr-2">def</span> get_education_history()
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
          {education.map((edu, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-[#161b22] text-blue-400 group-hover:border-blue-500 transition-all z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {edu.status === "Completed" ? "✓" : "⚡"}
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] bg-[#161b22] p-6 rounded-xl border border-gray-800 shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <time className="text-xs text-blue-400 font-bold uppercase">{edu.period}</time>
                  <span className={`text-[10px] px-2 py-0.5 rounded border ${edu.status === 'Completed' ? 'border-green-500/50 text-green-500' : 'border-yellow-500/50 text-yellow-500'}`}>
                    {edu.status}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg leading-tight">{edu.degree}</h3>
                <p className="text-gray-400 text-sm mt-1">{edu.institution}</p>
                <p className="text-gray-500 text-xs mt-4 italic">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;