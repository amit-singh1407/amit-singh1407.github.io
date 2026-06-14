import { HiOutlineBadgeCheck } from 'react-icons/hi';

const Certifications = () => {
  const certs = [
    { name: "Power BI Course", issuer: "Intellipaat", date: "June 2025", tags: ["Visualization", "BI"], viewLink: "https://drive.google.com/file/d/1upp0bKDOBOaJSUgqGOgd_ifZaIHgjB3L/view?usp=sharing" },
    { name: "SQL Course", issuer: "Intellipaat", date: "June 2025", tags: ["Database", "Queries"], viewLink: "https://drive.google.com/file/d/1EkO6eMShLPO7Zbgq2vDWB07tR14FyBIb/view?usp=sharing" },
    { name: "Introduction to Cloud", issuer: "IBM SkillsBuild", date: "April 2024", tags: ["Cloud", "IBM Cloud"], viewLink: "https://drive.google.com/file/d/1mqkrYHshs1K4xsT8pVZNXXx7vpRpmI-H/view?usp=sharing" },
    { name: "Python for Data Science", issuer: "Digipodium", date: "March 2024", tags: ["Python", "DS"], viewLink: "https://drive.google.com/file/d/1e8zUDyL89PVR82ibjr-Y0FAASiw5Jtwp/view?usp=sharing" },
    { name: "Predictive Modeling Fundamentals I", issuer: "Cognitive Class", date: "Nov 2023", tags: ["ML", "Analytics"], viewLink: "https://drive.google.com/file/d/1VmxJTYDjT8TN_p56Rg8ovR4cDrpPZ6pr/view?usp=sharing" },
    { name: "Introduction to Data Concepts", issuer: "IBM SkillsBuild", date: "April 2023", tags: ["Big Data", "Analysis"], viewLink: "https://drive.google.com/file/d/1fZ46mxSuYsnnpWr_yPZUV2OxsAfDi-Sd/view?usp=sharing" },
  ];

  return (
    <section id="certifications" className="py-20 theme-bg-primary font-mono border-t theme-border-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl theme-text-primary mb-12 flex items-center">
          <span className="text-green-500 mr-2">ls</span> /certificates/verified
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <div key={idx} className="theme-bg-card-alt border theme-border p-5 rounded-lg hover:theme-bg-card transition-all group relative overflow-hidden">
              {/* Verification Stamp Background */}
              <HiOutlineBadgeCheck className="absolute -right-4 -bottom-4 text-8xl text-blue-500/5 group-hover:text-blue-500/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-md text-blue-400">
                    <HiOutlineBadgeCheck className="text-xl" />
                  </div>
                  <span className="text-[10px] theme-text-muted">{cert.date}</span>
                </div>
                
                <h3 className="theme-text-secondary font-bold mb-1 leading-tight group-hover:theme-text-primary">{cert.name}</h3>
                <p className="theme-text-muted text-sm mb-4">{cert.issuer}</p>
                
                <div className="flex flex-wrap gap-2">
                  {cert.tags.map(tag => (
                    <span key={tag} className="text-[9px] theme-bg-tag theme-text-muted px-2 py-0.5 rounded border theme-border">
                      #{tag}
                    </span>
                  ))}
                </div>
                <a href={cert.viewLink} target="_blank" className="mt-4 inline-block text-xs theme-text-secondary hover:text-blue-500 transition-colors font-medium" rel="noopener noreferrer">
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;