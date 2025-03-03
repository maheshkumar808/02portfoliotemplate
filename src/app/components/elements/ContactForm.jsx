'use client';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter your name',
        icon: 'error',
        confirmButtonText: 'ok',
      });
      return;
    } else if (!formData.email) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter your email',
        icon: 'error',
        confirmButtonText: 'ok',
      });
      return;
    } else if (!validateEmail(formData.email)) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter your valid email',
        icon: 'error',
        confirmButtonText: 'ok',
      });
      return;
    } else if (!formData.subject) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter your subject',
        icon: 'error',
        confirmButtonText: 'ok',
      });
      return;
    } else if (!formData.message) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter your message',
        icon: 'error',
        confirmButtonText: 'ok',
      });
      return;
    }

    try {
      const accessKey = process.env.NEXT_PUBLIC_EMAIL_ACCESS_KEY;
      console.log('accessKey', accessKey);
      const formData2 = new FormData();
      formData2.append('name', formData.name);
      formData2.append('email', formData.email);
      formData2.append('subject', formData.subject);
      formData2.append('message', formData.message);
      formData2.append('access_key', accessKey);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData2,
      });

      const data = await response.json();
      console.log('data', data);
      if (data.success) {
        Swal.fire({
          title: 'Success!',
          text: 'Message sent!',
          icon: 'success',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to send email',
          icon: 'error',
        });
      }
    } catch (error) {
      console.log('error', error);
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong',
        icon: 'error',
      });
    }
  };
  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section className="w-full bg-gray-500 flex justify-center">
      <form className="w-full lg:max-w-screen-lg grid grid-cols-2 gap-4 p-4">
        <div className="col-span-1">
          <input
            value={formData.name}
            className="w-full p-4 rounded-md text-lg text-gray-700"
            type="text"
            placeholder="Name"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />
        </div>

        <div className="col-span-1">
          <input
            value={formData.email}
            className="w-full p-4 rounded-md text-lg text-gray-700"
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        <div className="col-span-2">
          <input
            value={formData.subject}
            className="w-full p-4 rounded-md text-lg text-gray-700"
            type="text"
            placeholder="Subject"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, subject: e.target.value }))
            }
          />
        </div>

        <div className="col-span-2">
          <textarea
            value={formData.message}
            className="w-full p-4 rounded-md text-lg text-gray-700"
            placeholder="Message"
            rows="8"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
          />
        </div>

        {/* Center the buttons */}
        <div className="col-span-2 flex justify-center gap-4">
          <button
            className="p-4 text-xl font-bold rounded-lg bg-sky-600 text-white hover:bg-sky-700"
            type="submit"
            onClick={handleSubmit}
          >
            Send Message
          </button>

          <button
            onClick={clearForm}
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
