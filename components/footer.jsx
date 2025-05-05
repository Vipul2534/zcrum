import { Instagram, Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Zcrum Logo */}
        <div className="flex justify-center mb-6">
          <img 
            src="/logo2.png" 
            alt="Zcrum Logo" 
            className="h-10 w-auto"
          />
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Policies Section with Two Columns */}
          <div>
            <h4 className="text-blue-400 font-semibold mb-4">Policies</h4>
            <div className="grid grid-cols-2 gap-4 text-gray-200">
              {/* Column 1 */}
              <ul className="space-y-2">
                <li>
                  <a href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-blue-400 transition-colors">Terms</a>
                </li>
              </ul>
              {/* Column 2 */}
              <ul className="space-y-2">
                <li>
                  <a href="/cookie-choices" className="hover:text-blue-400 transition-colors">Set My Cookie Choices</a>
                </li>
                <li>
                  <a href="/cookie-policy" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>

          {/* About Zcrum */}
          <div>
            <h4 className="text-blue-400 font-semibold mb-4">About Zcrum</h4>
            <p className="text-gray-400">
              Empowering teams with Zcrum, a project management app for seamless collaboration and productivity.
            </p>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-blue-400 font-semibold mb-4">Get in Touch</h4>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/zcrum" className="text-gray-200 hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/zcrum" className="text-gray-200 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/zcrum" className="text-gray-200 hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/company/zcrum" className="text-gray-200 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:support@zcrum.com" className="text-gray-200 hover:text-blue-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Zcrum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;