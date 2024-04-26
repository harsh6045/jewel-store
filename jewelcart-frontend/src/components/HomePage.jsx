import React, { useState } from 'react';

const HomePage = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-50">
      {/* <header className="py-4 bg-white">
        <div className="container mx-auto flex items-center justify-between">
          <div className="container">
            <h1 className="title">Home Page</h1>
          </div>
        </div>
      </header> */}
      <div>
        <main className="mainbody">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Welcome to our Website</h2>
            <div className="mb-8">
              <h1 className="title text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Welcome to our Cutting-Edge Platform</h1>
              <p className="description text-base sm:text-lg md:text-xl">Revolutionizing the way businesses manage their customer stock lists!</p>
              <p className="description text-base sm:text-lg md:text-xl">Say goodbye to manual record-keeping and embrace the efficiency of our seamless digital solution. Our user-friendly interface empowers you with comprehensive CRUD (Create, Read, Update, Delete) operations, allowing you to effortlessly organize, track, and optimize your customer stock data.</p>
              <p className="description text-base sm:text-lg md:text-xl">Whether you're a small business or a large enterprise, our platform is designed to streamline your workflow and enhance productivity. Experience the convenience of real-time updates, secure data storage, and easy accessibility, as you take control of your customer stock lists like never before.</p>
              <p className="description text-base sm:text-lg md:text-xl">Join the digital transformation and elevate your business operations with our innovative solution today!</p>
              <p className="relationship font-semibold text-lg sm:text-xl md:text-2xl mt-6">Many-to-Many Relationship of Customer and Stock</p>
              <p className="relationship-description text-base sm:text-lg md:text-xl">In our platform, customers can be associated with multiple stocks, and conversely, each stock can be associated with multiple customers. This allows for flexible management of stock ownership and enables businesses to efficiently track the relationships between customers and their associated stocks.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;