import React, { useEffect } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { BsHourglass } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white px-4 sm:px-6 md:px-10 py-10 max-w-[100vw] overflow-x-hidden">
      <h2
        className="text-2xl sm:text-3xl font-bold text-center mb-10"
        data-aos="fade-down"
      >
        Contact Us
      </h2>

      {/* Contact Info + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        {/* Left Side */}
        <div className="space-y-6" data-aos="fade-right">
          <div className="flex items-start gap-4">
            <MdEmail className="text-blue-600 text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Email</h3>
              <p className="text-gray-600 text-sm sm:text-base break-words">
                contact@yourdomain.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MdPhone className="text-green-600 text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Phone</h3>
              <p className="text-gray-600 text-sm sm:text-base">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <BsHourglass  className="text-red-600 text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Mon - Fri: 9:00 AM - 6:00 PM <br />
                Sat: 10:00 AM - 4:00 PM <br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div
          className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md"
          data-aos="fade-left"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
            Send a Message
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 focus:border-green-600 focus:outline-none rounded text-sm"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 focus:border-green-600 focus:outline-none rounded text-sm"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 focus:border-green-600 focus:outline-none rounded text-sm"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 focus:border-green-600 focus:outline-none rounded text-sm"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded w-full text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full h-64 sm:h-80 md:h-[400px] overflow-hidden rounded-lg" data-aos="zoom-in">
        <iframe
          title="Google Map"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.123456789!2d80.27071871524092!3d13.08268079077924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e123456789%3A0x7ab9ac2e4e7bb1e!2sChennai%20Main%20Office!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
