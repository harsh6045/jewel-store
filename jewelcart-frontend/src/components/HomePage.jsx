import React, { useState } from 'react';

const HomePage = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-50">
      <header className="py-4 bg-white">
        <center><div className="container mx-auto flex items-center justify-between">
        <div class="container">
  <h1 class="title">Home Page</h1>
</div>

        </div></center>
      </header>

      <div>
      <main className="mainbody">
        <h2 className="text-3xl font-bold mb-4">Welcome to our Website</h2>
        <div class="container">
  <h1 class="title">Welcome to our Cutting-Edge Platform</h1>
  <p class="description">Revolutionizing the way businesses manage their customer stock lists!</p>
  <p class="description">Say goodbye to manual record-keeping and embrace the efficiency of our seamless digital solution. Our user-friendly interface empowers you with comprehensive CRUD (Create, Read, Update, Delete) operations, allowing you to effortlessly organize, track, and optimize your customer stock data.</p>
  <p class="description">Whether you're a small business or a large enterprise, our platform is designed to streamline your workflow and enhance productivity. Experience the convenience of real-time updates, secure data storage, and easy accessibility, as you take control of your customer stock lists like never before.</p>
  <p class="description">Join the digital transformation and elevate your business operations with our innovative solution today!</p>
  <p class="relationship">Many-to-Many Relationship of Customer and Stock</p>
  <p class="relationship-description">In our platform, customers can be associated with multiple stocks, and conversely, each stock can be associated with multiple customers. This allows for flexible management of stock ownership and enables businesses to efficiently track the relationships between customers and their associated stocks.</p>
</div>

      </main></div>
    </div>
  );
};

export default HomePage;




