import React from 'react';

const Contact = () => {
  return (
    <div className="min-w-screen min-h-screen bg-[#1E293B] flex items-center justify-center p-4">
      <div className="text-center space-y-6">

        <a
          href="tel:+917483983384"
          className="bg-blue-500 text-white text-2xl font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition shadow-lg block w-full max-w-sm mx-auto"
        >
          Call Me: +91 7483983384
        </a>

     
        <a
          href="mailto:swathijayaraj123@gmail.com"
          className="bg-green-500 text-white text-2xl font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition shadow-lg block w-full max-w-sm mx-auto"
        >
          Email Me: swathijayaraj123@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
