import { HiOutlineDatabase, HiOutlineChip, HiOutlineChartBar } from 'react-icons/hi';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0d1117] text-gray-300 font-mono">
      <div className="max-w-6xl mx-auto px-6 ">
        {/* Section Header */}
        <div className="mb-12 border-l-4 border-blue-500 pl-4">
          <h2 className="text-3xl font-bold text-white uppercase tracking-widest">
            cat about_me.md
          </h2>
          <p className="text-gray-500 mt-2">Reading file contents...</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Side: Visual/Image */}
          <div className="md:col-span-5 relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-green-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-square bg-[#161b22] border border-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/amit-singh.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed">
            <p>
              I am an <span className="text-white font-bold">Aspiring Data Science Engineer</span> who thrives at the intersection of mathematical theory and practical code. I don't just build models; I build pipelines that turn noisy data into high-fidelity business signals.
            </p>

            <p>
              My journey started with a fascination for <span className="text-green-400">Python</span> and grew into an obsession with how algorithms can predict human behavior and optimize systems. 
            </p>

            {/* Quick Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-[#161b22] border border-gray-800 rounded-lg hover:border-blue-500/50 transition-colors">
                <HiOutlineDatabase className="text-blue-400 text-2xl mb-2" />
                <h3 className="text-sm font-bold text-white">Data Engineering</h3>
                <p className="text-xs text-gray-500">ETL, Pandas, SQL</p>
              </div>
              <div className="p-4 bg-[#161b22] border border-gray-800 rounded-lg hover:border-green-500/50 transition-colors">
                <HiOutlineChip className="text-green-400 text-2xl mb-2" />
                <h3 className="text-sm font-bold text-white">Modeling</h3>
                <p className="text-xs text-gray-500">Scikit-learn, ML Ops</p>
              </div>
              <div className="p-4 bg-[#161b22] border border-gray-800 rounded-lg hover:border-yellow-500/50 transition-colors">
                <HiOutlineChartBar className="text-yellow-400 text-2xl mb-2" />
                <h3 className="text-sm font-bold text-white">Visualization</h3>
                <p className="text-xs text-gray-500">Tableau, Seaborn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;