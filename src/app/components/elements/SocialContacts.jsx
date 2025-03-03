import React from 'react';
import { IoLogoTwitter } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';
import { FaSnapchatGhost } from 'react-icons/fa';

function SocialContacts() {
  return (
    <section className="w-full flex flex-wrap mx-auto justify-center text-center  gap-4 p-6  ">
      <div className="size-12  bg-gray-600 flex items-center justify-center hover:bg-sky-600 hover:-translate-y-2 rounded-lg">
        <IoLogoTwitter className="size-8 text-gray-500 hover:text-gray-600" />
      </div>
      <div className="size-12 bg-gray-600 flex items-center justify-center hover:bg-indigo-500 hover:-translate-y-2 rounded-lg">
        <FaFacebookF className="size-8 text-gray-500 hover:text-gray-600" />
      </div>
      <div className="size-12  bg-gray-600 flex items-center justify-center hover:bg-blue-700 hover:-translate-y-2 rounded-lg">
        <FaLinkedinIn className="size-8 text-gray-500 hover:text-gray-600" />
      </div>
      <div className="size-12 bg-gray-600 flex items-center justify-center hover:bg-pink-600 hover:-translate-y-2 rounded-lg">
        <FaInstagram className="size-8 text-gray-500 hover:text-gray-600" />
      </div>
      <div className="size-12 bg-gray-600 flex items-center justify-center hover:bg-gray-900 hover:-translate-y-2 rounded-lg">
        <FaGithub className="size-8 text-gray-500 hover:text-gray-600" />
      </div>
      <div className="size-12 bg-gray-600 flex items-center justify-center hover:bg-slate-300 hover:-translate-y-2 rounded-lg">
        <FaGooglePlusG className="size-8 text-gray-500 hover:text-gray-600" />
      </div>
      <div className="size-12 bg-gray-600 flex items-center justify-center hover:bg-yellow-400 hover:-translate-y-2 rounded-lg">
        <FaSnapchatGhost className="size-8 text-gray-500 hover:text-gray-600" />
      </div>
    </section>
  );
}

export default SocialContacts;
