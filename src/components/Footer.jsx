import React from 'react';

const Footer = () => {
  const courses = [
    'Diploma in Teaching Skills',
    'Certificate in Teaching Skills',
    'Certificate in ECCE',
    'Personality Development and Communication Skills',
    'Certificate in Modern Teaching Methodologies',
  ];

  const pages = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Placement', href: '#' },
    { name: 'Blogs', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  const contactInfo = {
    address: 'lumni Ave, Indian Institute Of Technology, Chennai, Tamil Nadu 600036',
    phone: '+91 987654321',
    email: 'abc@gmail.com',
  };

  return (
    <footer className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 font-family">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0"> {/* Adjusted gap for vertical lines */}
        {/* Course Section */}
        <div className="flex flex-col md:pr-8"> {/* Added right padding for spacing before next column's border */}
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Course</h3>
          <ul className="space-y-2">
            {courses.map((course, index) => (
              <li key={index}>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  {course}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Pages Section */}
        <div className="flex flex-col md:border-l md:border-gray-300 md:pl-8 md:pr-8"> {/* Added left border and padding */}
          <h3 className="text-lg font-semibold text-gray-800 mb-4 md:text-center">Pages</h3> {/* Added text-center */}
          <ul className="space-y-2 w-full md:text-center"> {/* Added w-full and text-center to align content */}
            {pages.map((page, index) => (
              <li key={index}>
                <a href={page.href} className="text-gray-600 hover:text-gray-900 text-sm">
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col md:border-l md:border-gray-300 md:pl-8"> {/* Added left border and padding */}
          <h3 className="text-lg font-semibold text-gray-800 mb-4"></h3> {/* Empty heading for alignment */}
          <div className="space-y-2 text-sm text-gray-600">
            <p>{contactInfo.address}</p>
            <p>{contactInfo.phone}</p>
            <p>{contactInfo.email}</p>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="my-8 border-gray-300 w-full max-w-4xl mx-auto" />

      {/* You can add copyright or other bottom content here if needed */}
    </footer>
  );
};

export default Footer;
