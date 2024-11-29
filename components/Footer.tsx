'use client';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-orange-500 py-10 px-4 fade-in">
      <div className="container mx-auto text-white">
        <div className="flex flex-col items-center md:flex-row justify-between">
          {/* Left Section: Social Links */}
          <div className="mb-6 md:mb-0 text-center">
            <h2 className="text-2xl font-bold">Follow Me</h2>
            <div className="mt-4 flex gap-6 justify-center">
              <a href="https://www.instagram.com/mudassir.chandio/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                Instagram
              </a>
              <a href="https://github.com/Mudasic1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/muhammad-mudasir-chandio-5487b42ba/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Section: Contact Info */}
          <div className='text-center'>
            <h2 className="text-2xl font-bold">Contact Me</h2>
            <p className="mt-4">Email: <a href="mailto:chandiommudasir084@gmail.com" className="text-white hover:text-gray-200">chandiommudasir084@gmail.com</a></p>
            <p className="mt-2">Phone: <span className="text-white">+923279385722</span></p>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-10 text-center text-sm">
          <p>&copy; 2024 Mudasir C. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
