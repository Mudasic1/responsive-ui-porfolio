'use client';

import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page bg-gray-100 min-h-screen py-10 px-4" id="Contact">
      <div className="container mx-auto max-w-5xl">
        {/* Title Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="text-orange-500">Contact</span> Me
        </h1>

        {/* Contact Form */}
        <div className="contact-form bg-white shadow-lg rounded-lg p-8 fade-in">
          <p className="text-gray-700 text-center mb-6">
            Feel free to reach out to me using the form below or via email at{' '}
            <a href="mailto:chandiommudasir084@gmail.com" className="text-orange-500 hover:text-orange-700 font-medium">
              chandiommudasir084@gmail.com
            </a>.
          </p>

          <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Name */}
            <div className="col-span-1 sm:col-span-2">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Email */}
            <div className="col-span-1 sm:col-span-2">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Subject */}
            <div className="col-span-1 sm:col-span-2">
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter the subject"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Message */}
            <div className="col-span-1 sm:col-span-2">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 sm:col-span-2 text-center">
              <button
                type="submit"
                className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
