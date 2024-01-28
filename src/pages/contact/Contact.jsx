import axios from 'axios';
import React, { useState } from 'react';

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    topic: '',
    name: '',
    email: '',
    message: '',
    terms: false,
  });

  // State to manage form submission status
  const [submitting, setSubmitting] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  //  form submission Handleing
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Set submitting state to true during form submission
      setSubmitting(true);

      // Add your backend API endpoint for form submission
      const response = await axios.post('/api/contact', formData);

      // Handle the response as needed
      console.log(response.data);

      // Reset the form after successful submission
      setFormData({
        topic: '',
        name: '',
        email: '',
        message: '',
        terms: false,
      });

      // Set submitting state back to false after form submission
      setSubmitting(false);
    } catch (error) {
      // Handle errors
      console.error('Error submitting form:', error);

      // Set submitting state back to false in case of an error
      setSubmitting(false);
    }
  };

  return (
    <section>
      {/* main section */}
      <div className="flex justify-center items-center bg-primary py-10 ">
        <div className="container flex text-center flex-col md:flex-row justify-between items-center">
          <div className="text-3xl md:text-6xl font-bold md:w-1/2">
            <h1 className="text-[#357E8D]">
              <span className="text-[#000]">Let’s</span> get <br /> in touch
            </h1>
          </div>

          <div className="relative md:w-1/2">
            <h2
              className="md:text-4xl ml-12 font-semibold md:leading-[48px]"
              style={{ letterSpacing: '4px' }}
            >
              send us an email or start a <br /> conversation by filling out{' '}
              <br /> the form below
            </h2>
            <img
              className="absolute top-10 left-8"
              src="/contactPageUnderLine.svg"
              alt="contact Page UnderLine svg"
            />
          </div>
        </div>
      </div>

      {/* Blank section */}
      <div className="md:h-40"></div>
      {/* Contact form Section */}
      <div className="w-full flex flex-col items-center md:flex-row justify-between  container p-5 md:p-20">
        <div className="flex flex-col md:w-2/4">
          <h2 className="text-4xl font-bold ">
            Dont be afraid to <br /> say hello to us!
          </h2>
          <div className="my-4">
            <svg
              width="263"
              height="16"
              viewBox="0 0 263 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M262.707 8.70711C263.098 8.31658 263.098 7.68342 262.707 7.29289L256.343 0.928932C255.953 0.538408 255.319 0.538408 254.929 0.928932C254.538 1.31946 254.538 1.95262 254.929 2.34315L260.586 8L254.929 13.6569C254.538 14.0474 254.538 14.6805 254.929 15.0711C255.319 15.4616 255.953 15.4616 256.343 15.0711L262.707 8.70711ZM0 9H262V7H0V9Z"
                fill="black"
              />
            </svg>
          </div>

          <div className="mt-24">
            <h6 className="text-base text-[#8D8D8D] font-bold">Phone</h6>
            <h4 className="text-base font-bold">+(2) 563-482-138</h4>
          </div>
          <div className="py-8">
            <h6 className="text-base text-[#8D8D8D] font-bold">Email</h6>
            <h4 className="text-base font-bold">+hello@amraotech.com</h4>
          </div>
          <div className="py-8">
            <h6 className="text-base text-[#8D8D8D] font-bold">Office</h6>
            <h4 className="text-base font-bold">
              230, Downtown Street, Boston, <br />
              QC(USA) HSR 1A1
            </h4>
            <div className="flex items-center py-2 gap-2">
              <h4 className="text-base font-bold">See on Google Map</h4>
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.85892 3.31726C5.8657 3.37816 5.88447 3.43712 5.91415 3.49073C5.94382 3.54435 5.98382 3.59155 6.03184 3.62963C6.07985 3.6677 6.13493 3.6959 6.1939 3.71258C6.25286 3.72926 6.31455 3.73411 6.37539 3.72683L9.37526 3.38054L2.58557 11.9423C2.50907 12.0388 2.47403 12.1617 2.48815 12.284C2.50226 12.4063 2.56439 12.518 2.66085 12.5945C2.75731 12.671 2.88021 12.706 3.00251 12.6919C3.12482 12.6778 3.2365 12.6157 3.313 12.5192L10.0969 3.96468L10.4381 6.94861C10.4525 7.0704 10.5145 7.18152 10.6106 7.25772C10.7067 7.33392 10.829 7.369 10.9509 7.3553C11.0727 7.34088 11.1838 7.27885 11.26 7.18276C11.3362 7.08667 11.3713 6.96434 11.3576 6.84247L10.8788 2.69483C10.8736 2.64 10.8574 2.58679 10.8311 2.53839C10.8049 2.49 10.7691 2.44741 10.7259 2.41319C10.6828 2.37898 10.6332 2.35384 10.5801 2.33929C10.527 2.32473 10.4715 2.32107 10.4169 2.32852L6.26849 2.80078C6.20759 2.80756 6.14863 2.82633 6.09502 2.85601C6.0414 2.88569 5.9942 2.92569 5.95612 2.9737C5.91804 3.02172 5.88985 3.07679 5.87317 3.13576C5.85649 3.19472 5.85164 3.25641 5.85892 3.31726Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-3/4 flex flex-col items-center ">
          {/* Contact Form */}
          <form className="w-full" onSubmit={handleSubmit}>
            {/* Topic */}
            <div className="mb-4">
              <label
                htmlFor="topic"
                className="text-base text-[#000] font-bold"
              >
                Topic
              </label>
              <br />
              <input
                type="text"
                id="topic"
                name="topic"
                placeholder=" Select a topic"
                className="border border-dark/10 px-2 py-3 w-full mb-2 rounded-md"
                value={formData.topic}
                onChange={handleChange}
              />
            </div>

            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="text-base text-[#000] font-bold">
                Name
              </label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                className="border border-dark/10 px-2 py-3 w-full mb-2 rounded-md"
                placeholder=" Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-base text-[#000] font-bold"
              >
                Email
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" Enter your email"
                className="border border-dark/10 px-2 py-3 w-full mb-2 rounded-md"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div className="mb-2">
              <label
                htmlFor="message"
                className="text-base text-[#000] font-bold"
              >
                Message
              </label>
              <br />
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder=" Type your message "
                className="border border-dark/10 px-2 py-3  w-full mb-2 rounded-md"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Terms and Policy */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="mr-2"
                checked={formData.terms}
                onChange={handleChange}
              />
              <label
                htmlFor="terms"
                className="text-base text-[#000] font-bold"
              >
                Accept Terms & Policy
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button
                className="bg-[#212121] text-light w-48 text-center h-10 rounded-xl"
                type="submit"
                disabled={submitting}
              >
                {submitting ? 'Submitting...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
