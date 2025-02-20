import React from 'react';

function ContactForm() {
  return (
    <section className="w-full bg-gray-500 flex justify-center">
      <form className="w-full lg:max-w-screen-lg grid grid-cols-2 gap-4 p-4">
        <div className="col-span-1">
          <input
            className="w-full p-4 rounded-md text-lg text-gray-700"
            type="text"
            placeholder="Name"
          />
        </div>

        <div className="col-span-1">
          <input
            className="w-full p-4 rounded-md text-lg text-gray-700"
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="col-span-2">
          <input
            className="w-full p-4 rounded-md text-lg text-gray-700"
            type="text"
            placeholder="Subject"
          />
        </div>

        <div className="col-span-2">
          <textarea
            className="w-full p-4 rounded-md text-lg text-gray-700"
            placeholder="Message"
            rows="8"
          />
        </div>

        {/* Center the buttons */}
        <div className="col-span-2 flex justify-center gap-4">
          <button
            className="p-4 text-xl font-bold rounded-lg bg-sky-600 text-white hover:bg-sky-700"
            type="submit"
          >
            Send Message
          </button>

          <button
            className="p-4 text-xl font-bold rounded-lg bg-sky-600 text-white hover:bg-sky-700"
            type="reset"
          >
            Clear Form
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
