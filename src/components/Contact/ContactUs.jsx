import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="bg-white px-4 md:px-10 py-12 max-w-7xl mx-auto font-family">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>

      {/* Contact Info + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        {/* Left Side - Contact Info */}
        <div className="space-y-6 flex flex-col ">
          <div className="flex items-start gap-4">
            <MdEmail className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1">Email</h3>
              <p className="text-gray-600">contact@yourdomain.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MdPhone className="text-green-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MdLocationOn className="text-red-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1">Business Hours</h3>
              <p className="text-gray-600">
                Mon - Fri: 9:00 AM - 6:00 PM <br />Sat: 10:00 AM - 4:00 PM <br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Enquiry Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Send a Message
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 hover:focus:border-green-600 focus:outline-none rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 hover:focus:border-green-600 focus:outline-none rounded"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 hover:focus:border-green-600 focus:outline-none rounded"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 hover:focus:border-green-600 focus:outline-none rounded"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-button hover:bg-pink-800 text-white py-2 px-6 rounded w-full cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="h-[300px] md:h-[400px] w-full rounded overflow-hidden shadow-md">
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.123456789!2d80.27071871524092!3d13.08268079077924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e123456789%3A0x7ab9ac2e4e7bb1e!2sChennai%20Main%20Office!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
