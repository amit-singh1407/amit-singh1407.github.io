import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  const socialLinks = [
    { name: 'GitHub', icon: <FiGithub />, url: 'https://github.com/amit-singh1407', color: 'hover:text-white' },
    { name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/amitsingh1407/', color: 'hover:text-blue-500' },
    { name: 'Email', icon: <FiMail />, url: 'mailto:kumaramit.14singh@gmail.com', color: 'hover:text-red-400' },
    { name: 'Location', icon: <IoLocationOutline />, url: 'https://maps.app.goo.gl/cTJmaP6gpBMpuw7W6, Lucknow India', color: 'hover:text-green-400' },
    { name: 'Phone', icon: <IoCallOutline />, url: 'tel:9129187074', color: 'hover:text-yellow-400' },
  ];
  return (
    <section id="contact" className="py-20 theme-bg-primary font-mono">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Contact Header */}
        <div className="inline-block mb-8">
          <h2 className="text-xl text-green-500 flex items-center gap-2">
            <span className="text-gray-500">➜</span> echo $CONTACT_INFO
          </h2>
        </div>

        {/* The "Config" Box */}
        <div className="theme-bg-card border theme-border rounded-xl p-8 shadow-2xl relative overflow-hidden">
          {/* Decorative Code background */}
          <div className="absolute top-0 right-0 p-4 opacity-5 select-none pointer-events-none">
            <pre className="text-xs text-left">
              {`{
  "status": "available",
  "location": "remote",
  "role": "Data Engineer"
}`}
            </pre>
          </div>

          <p className="theme-text-secondary mb-10 text-lg">
            I'm currently open to new opportunities and collaborations in 
            <span className="text-blue-400"> Data Engineering</span> and 
            <span className="text-green-400"> Machine Learning</span>.
          </p>

          <div className="flex justify-center gap-4 md:gap-14">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-2 theme-text-muted transition-all duration-300 transform hover:-translate-y-2 ${link.color}`}
              >
                <span className="text-lg sm:text-3xl">{link.icon}</span>
                <span className="text-[10px] uppercase tracking-widest">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Final Footer */}
        <div className="mt-20 pt-8 border-t theme-border-subtle theme-text-dimmed text-xs">
          <p>
            /* <br />
            &nbsp;* Built with React, Tailwind v4 & Coffee <br />
            &nbsp;* Designed for Data Science Engineers <br />
            &nbsp;* © {new Date().getFullYear()} Amit Singh <br />
            &nbsp;*/
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;