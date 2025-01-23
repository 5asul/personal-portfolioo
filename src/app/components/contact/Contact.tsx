import React from 'react';
import { useContactForm } from '../../../lib/hooks/useContactForm';
import { Input } from '../../../components/Input';

export const Contact: React.FC = () => {
  const { formData, handleChange, handleSubmit } = useContactForm();

  return (
    <section
      id="contact"
      className="py-16 min-h-screen flex flex-col bg-gradient-to-r from-blue-500 to-indigo-200 xxs:px-3 xxs:py-2 xxs:text-sm justify-center items-center bg-gray-50 text-gray-800 text-center"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-blue-600">
        Contact Me
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg px-4 sm:px-6 lg:px-8"
      >
        <Input
          label="Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          label="Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          label="Message"
          type="textarea"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 sm:py-3 lg:py-4 rounded-lg font-medium text-sm sm:text-base lg:text-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};