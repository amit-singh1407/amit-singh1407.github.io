import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  const socialLinks = [
    { name: 'GitHub', icon: <FiGithub />, url: 'https://github.com/yourbrother', color: 'hover:text-white' },
    { name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/in/yourbrother', color: 'hover:text-blue-500' },
    { name: 'Email', icon: <FiMail />, url: 'mailto:hello@example.com', color: 'hover:text-red-400' },
    { name: 'Instagram', icon: <FaSquareInstagram />, url: 'https://instagram.com/yourbrother', color: 'hover:text-pink-500' },
    { name: 'Location', icon: <IoLocationOutline />, url: 'https://www.google.com/maps/place/Your+City', color: 'hover:text-green-400' },
    { name: 'Phone', icon: <IoCallOutline />, url: 'tel:+1234567890', color: 'hover:text-yellow-400' },
  ];

  return (
    <section id="contact" className="py-20 bg-[#0d1117] font-mono">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Contact Header */}
        <div className="inline-block mb-8">
          <h2 className="text-xl text-green-500 flex items-center gap-2">
            <span className="text-gray-500">➜</span> echo $CONTACT_INFO
          </h2>
        </div>

        {/* The "Config" Box */}
        <div className="bg-[#161b22] border border-gray-800 rounded-xl p-8 shadow-2xl relative overflow-hidden">
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

          <p className="text-gray-400 mb-10 text-lg">
            I'm currently open to new opportunities and collaborations in 
            <span className="text-blue-400"> Data Engineering</span> and 
            <span className="text-green-400"> Machine Learning</span>.
          </p>

          <div className="flex justify-center gap-8 md:gap-12">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-2 text-gray-500 transition-all duration-300 transform hover:-translate-y-2 ${link.color}`}
              >
                <span className="text-3xl">{link.icon}</span>
                <span className="text-[10px] uppercase tracking-widest">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Final Footer */}
        <div className="mt-20 pt-8 border-t border-gray-900 text-gray-600 text-xs">
          <p>
            /* <br />
            &nbsp;* Built with React, Tailwind v4 & Coffee <br />
            &nbsp;* Designed for Data Science Engineers <br />
            &nbsp;* © {new Date().getFullYear()} Your Brother's Name <br />
            &nbsp;*/
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;