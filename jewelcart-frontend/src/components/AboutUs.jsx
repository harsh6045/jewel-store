import React from 'react';
import harsh from "../assets/profileimage.jpeg";

export const AboutUs = () => {
  const teamData = [
    {
      name: 'Harsh Langaliya',
      position: 'Full Stack Developer',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsuxyJP1h7a9eUId7Ej_G6yjT8i0aNMe5ivg&usqp=CAU',
      social: [
        { url: 'https://twitter.com/harsh6045', icon: 'fab fa-twitter' },
        { url: 'https://www.linkedin.com/in/harshlangaliya/', icon: 'fab fa-linkedin' },
        { url: 'https://github.com/harsh6034', icon: 'fab fa-github' },
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-8 sm:py-12 lg:py-16">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Elevate Your Jewellery Business with Jewellery Cart
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4">
              Jewellery Cart is a comprehensive solution that revolutionizes the way jewellery retailers manage their operations. With its intuitive interface and powerful features, it streamlines your business, empowering you to:
            </p>
            <ul className="list-disc text-gray-600 ml-8 mt-4">
              <li className="text-sm sm:text-base md:text-lg">Seamlessly store and manage customer information</li>
              <li className="text-sm sm:text-base md:text-lg">Effortlessly track and maintain your stock levels</li>
              <li className="text-sm sm:text-base md:text-lg">Automate the generation of GST bills, eliminating the need for paper-based records</li>
            </ul>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4">
              Experience the future of jewellery retail with Jewellery Cart, the ultimate tool for a paperless, efficient, and thriving business.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
              <h1>About the Developer</h1>
            </div>
          </div>
        </div>
        <section className="py-8 sm:py-12 lg:py-16 bg-white">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-8 sm:mt-12 md:mt-16 text-center sm:px-0 sm:grid-cols-2 md:grid-cols-4 gap-y-8 sm:gap-y-12 md:gap-y-16 gap-x-8 md:gap-x-16 lg:gap-x-20">
              {[1].map((index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    className="object-cover w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full grayscale filter"
                    src={harsh}
                    alt=""
                  />
                  <p className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 font-pj">
                    Harsh Langaliya
                  </p>
                  <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-gray-600 font-pj">
                    Full Stack Developer
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 sm:mt-12 md:mt-16">
              <svg
                className="w-auto h-4 mx-auto text-gray-300"
                viewBox="0 0 172 16"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};