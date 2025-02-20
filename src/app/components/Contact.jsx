import React from 'react';
import Form from './elements/Form';

function Contact() {
  return (
    <section id="portfolio" className="w-full bg-gray-500">
      <div className="lg:max-w-screen-lg justify-items-center mx-auto py-10 ">
        <div className="w-full  text-center">
          <h1 className="text-3xl text-gray-800 font-bold ">
            Here's some stuff I made recently.
          </h1>
          <p className="text-lg text-gray-600 p-6">
            Proin odio consequat sapien vestibulum consequat lorem dolore
            feugiat
          </p>
        </div>
        <div className="w-full">
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Contact;
