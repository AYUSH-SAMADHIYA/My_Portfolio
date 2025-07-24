
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Contact Me</h2>
        <form className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" name="name" id="name" required className="mt-1 block w-full bg-white border-gray-300 rounded-md shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" id="email" required className="mt-1 block w-full bg-white border-gray-300 rounded-md shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows="4" required className="mt-1 block w-full bg-white border-gray-300 rounded-md shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Contact;