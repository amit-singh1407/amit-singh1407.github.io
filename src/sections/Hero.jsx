import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        
        {/* Terminal Window Frame */}
        <div className="bg-[#161b22] rounded-t-lg border border-gray-700 flex items-center p-3 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>

          <span className="ml-4 text-gray-500 font-mono text-sm">
            bash — 80x24
          </span>
        </div>

        {/* Terminal Body */}
        <div className="bg-black/50 border border-t-0 border-gray-700 rounded-b-lg p-6 md:p-10 font-mono shadow-2xl">
          
          {/* Command Line */}
          <div className="mb-4">
            <span className="text-green-500">➜</span>
            <span className="text-blue-400 ml-2">~</span>
            <span className="text-white ml-2">whoami</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Hi, I'm <span className="text-blue-400">Amit Kumar Singh</span>
          </h1>

          {/* Typewriter Effect */}
          <div className="text-xl md:text-2xl text-gray-300 flex flex-wrap gap-2">
            <span>Specializing in</span>

            <span className="text-yellow-400">
              <Typewriter
                options={{
                  strings: [
                    'Python Developer',
                    'Data Visualization',
                    'Predictive Modeling',
                    'Big Data Engineering',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </div>

          {/* About Section */}
          <div className="mt-10 space-y-2 text-gray-500 text-sm md:text-base">
            <p># Aspiring Data Science Engineer</p>

            <p># Proficient in Python, Scikit-learn & Flask</p>

            {/* Resume Link */}
            <p>
              <span className="text-green-500">➜</span>

              <span className="text-blue-400 ml-2">view</span>

              <a
                href="https://drive.google.com/uc?export=download&id=11styWrVOl39lNqbVVgDXnaZNvpqe0EVL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white ml-2 underline decoration-blue-500 cursor-pointer hover:text-blue-400 transition-colors"
                download
              >resume.pdf
              </a>
            </p>
          </div>

          {/* Pulsing Cursor */}
          <div className="mt-4 flex items-center">
            <span className="text-green-500">➜</span>

            <div className="w-2.5 h-5 bg-gray-400 ml-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;