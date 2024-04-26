import React from 'react';
import harsh from "../assets/profileimage.jpeg";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const AboutUs = () => {
  const teamData = [
    {
      name: 'Harsh Langaliya',
      position: 'Full Stack Developer',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsuxyJP1h7a9eUId7Ej_G6yjT8i0aNMe5ivg&usqp=CAU',
      social: [
        { url: 'https://twitter.com/harsh6045', icon: <FaTwitter /> },
        { url: 'https://www.linkedin.com/in/harshlangaliya/', icon: <FaLinkedin /> },
        { url: 'https://github.com/harsh6045', icon: <FaGithub /> },
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <div className="md:order-last">
            <h3>  </h3>
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
          <div className="md:order-first">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">About The Developer</h2>
            <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24 rounded-lg shadow-lg">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:grid-flow-row">
                  <div className="lg:col-span-2 flex flex-col md:flex-row items-center">
                    <div className="md:mr-8">
                      
                      <img className="w-full max-w-xs md:max-w-none rounded-lg" src={harsh} alt="" />
                    </div>
                    <div className="mt-4 md:mt-0 text-center md:text-left">
                      <h1 className="text-4xl font-bold text-black lg:text-5xl xl:text-6xl">Harsh Langaliya</h1>
                      <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">Full Stack Developer</p>
                      <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
                        I am a passionate enthusiast who is ready to take on new responsibilities and challenges. I work closely with my friends to maximize the potential of everyone, as I strongly believe in teamwork. I am a strong team player and a social butterfly. An expert with managing and coordinating skills with the use of technical knowledge.
                      </p>
                      <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
                        As a prefinal year IT student at Dharmsinh Desai University, I am eager to gain practical experience and believe that it would be the help solve real-world problems. My strong work ethic and enthusiasm for learning make me confident that I would be able to contribute effectively to better social development. I am eager to learn from the expertise of IT enthusiasts.
                      </p>
                      <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
                        Feel free to reach out to me. Your queries would significantly strengthen my knowledge and increase my chances of becoming a better social human being.
                      </p>
                      <div className="mt-6 flex justify-center md:justify-start">
                        {teamData[0].social.map((item, index) => (
                          <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 mx-2 transition-colors duration-300"
                          >
                            {React.cloneElement(item.icon, { size: 32 })}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};