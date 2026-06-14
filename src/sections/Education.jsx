const Education = () => {
  const education = [
    {
      degree: "MCA in Data Science & AI",
      institution: "Babu Banarasi Das University",
      period: "2025 — 2027 (Expected)",
      status: "Executing...",
      details: "Advanced studies in Neural Networks, Big Data Analytics, and AI Ethics."
    },
    {
      degree: "BCA in Data Science & AI",
      institution: "Babu Banarasi Das University",
      period: "2021 — 2024",
      status: "Completed",
      details: "Foundation in Statistics, Data Structures, and Machine Learning basics."
    }
  ];

  return (
    <section id="education" className="py-20 theme-bg-primary font-mono">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-xl md:text-2xl theme-text-primary mb-10 md:mb-12 flex flex-wrap items-center">
          <span className="text-blue-400 mr-2">def</span> get_education_history()
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--border-color)] before:to-transparent">
          {education.map((edu, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border theme-border theme-bg-card text-blue-400 group-hover:border-blue-500 transition-all z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {edu.status === "Completed" ? "✓" : "⚡"}
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-3.5rem)] md:w-[45%] theme-bg-card p-4 md:p-6 rounded-xl border theme-border shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <time className="text-xs text-blue-400 font-bold uppercase w-full sm:w-auto">{edu.period}</time>
                  <span className={`text-[10px] px-2 py-0.5 rounded border whitespace-nowrap ${edu.status === 'Completed' ? 'border-green-500/50 text-green-500' : 'border-yellow-500/50 text-yellow-500'}`}>
                    {edu.status}
                  </span>
                </div>
                <h3 className="theme-text-primary font-bold text-base md:text-lg leading-tight mt-1">{edu.degree}</h3>
                <p className="theme-text-secondary text-sm mt-1">{edu.institution}</p>
                <p className="theme-text-muted text-xs mt-3 italic">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;