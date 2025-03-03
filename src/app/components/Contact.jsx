import React from 'react';
import ContactForm from './elements/ContactForm';
import SocialContacts from './elements/SocialContacts';
import Footer from './Footer';
function Contact() {
  return (
    <section id="contact" className="w-full bg-gray-500">
      <div className="lg:max-w-screen-xl justify-items-center mx-auto py-10 ">
        <div className="w-full  text-center">
          <h1 className="text-4xl text-gray-800 font-bold ">
            Have me make stuff for you.
          </h1>
          <p className="text-lg text-gray-600 p-6">
            Proin odio consequat sapien vestibulum consequat lorem dolore
            feugiat
          </p>
        </div>
        <div className="w-full border-b-2 border-gray-700 pb-2">
          <ContactForm />
        </div>
        <div className="w-full  border-b-2 border-gray-700 ">
          <div className="w-full text-center py-5">
            <h1 className="text-3xl text-gray-800 font-bold ">
              Find me on ...
            </h1>
          </div>
          <div className="w-full ">
            <SocialContacts />
          </div>
        </div>
        <div className="w-full border-b-2 border-gray-700">
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default Contact;
