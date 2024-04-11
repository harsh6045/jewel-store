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
    <section className="bg-gray-100 py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Elevate Your Jewellery Business with Jewellery Cart
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Jewellery Cart is a comprehensive solution that revolutionizes the way jewellery retailers manage their
              operations. With its intuitive interface and powerful features, it streamlines your business, empowering
              you to:
            </p>
            <ul className="list-disc text-gray-600 ml-8 mt-4">
              <li>Seamlessly store and manage customer information</li>
              <li>Effortlessly track and maintain your stock levels</li>
              <li>Automate the generation of GST bills, eliminating the need for paper-based records</li>
            </ul>
            <p className="text-lg text-gray-600 mt-4">
              Experience the future of jewellery retail with Jewellery Cart, the ultimate tool for a paperless,
              efficient, and thriving business.
            </p>
          </div>
          <div className="flex justify-center items-center h-screen">
            <div className="text-center font-bold text-4xl sm:text-6xl md:text-8xl">
              <h1>About the Developer</h1>
            </div>
          </div>
          <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
                {[1].map((index) => (
                  <div key={index}>
                    <img
                      className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
                      src={harsh}
                      alt=""
                    />
                    <p className="mt-5 text-4xl font-bold text-gray-900 sm:text-6xl sm:mt-8 font-pj">Harsh Langaliya</p>
                    <p className="mt-2 text-2xl font-normal text-gray-600 font-pj">Full Stack Developer</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 sm:mt-16">
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
      </div>
    </section>
  );
};