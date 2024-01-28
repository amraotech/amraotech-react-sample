// Importing necessary dependencies and components
import React from 'react';
import Button from '../../shared/Button';

// Contact component for rendering a contact form
const Contact = () => {
  return (
    <section className="container py-10 mt-10 md:mt-20 space-y-10">
      <div className="bg-primary shadow-lg p-5 md:p-10 rounded-md mx-auto">
        <p className="text-sm text-dark/80">/Get in Touch</p>
        <h2 className="font-semibold text-lg">Schedule an Appointment</h2>

        <form className="py-5 space-y-6">
          {/* First and Last Name Inputs */}
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="w-full">
              <input
                type="text"
                placeholder="First Name"
                className="bg-transparent p-1 focus:outline-none w-full border-b border-dark/20"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Last Name"
                className="bg-transparent p-1 focus:outline-none w-full border-b border-dark/20"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="w-full">
            <input
              type="text"
              placeholder="E-mail"
              className="bg-transparent p-1 focus:outline-none border-b border-dark/20 w-full"
            />
          </div>

          {/* Message Textarea */}
          <div className="w-full">
            <textarea
              name="message"
              cols="10"
              rows="1"
              className="w-full p-1 bg-transparent border-b border-dark/20 focus:outline-none"
              placeholder="Describe here your project requirements/info"
            ></textarea>
          </div>
          <div className="text-start">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

// Exporting the Contact component as the default export
export default Contact;
