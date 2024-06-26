﻿# Jewel Cart Management System

Welcome to Jewel Cart Management System! This project aims to digitalize the process of managing stock items and customer details. With a user-friendly interface and comprehensive CRUD (Create, Read, Update, Delete) operations, you can effortlessly organize, track, and optimize your customer stock data. Whether you're a small business or a large enterprise, our platform is designed to streamline your workflow and enhance productivity. Experience the convenience of real-time updates, secure data storage, and easy accessibility as you take control of your customer stock lists like never before. Join the digital transformation and elevate your business operations with our innovative solution today!

## Features
- **User-friendly Interface:** Intuitive design makes navigation and data management seamless.
- **Comprehensive CRUD Operations:** Create, Read, Update, and Delete functionalities for efficient stock and customer management.
- **Real-time Updates:** Stay up-to-date with the latest changes in your stock and customer data.
- **Secure Data Storage:** Your data is securely stored to ensure confidentiality and integrity.
- **Easy Accessibility:** Access your data anytime, anywhere, with ease.

## ScreenShots
<div class="row">
        <img src="https://github.com/harsh6045/jewel-store/assets/137603920/a6e13749-53fa-4ab8-a49d-22f4ec089d88" alt="Screenshot 1" width="300">
        <img src="https://github.com/harsh6045/jewel-store/assets/137603920/d4b8aca1-e5cf-492c-ba88-31dda5967744" alt="Screenshot 2" width="300">
    </div>
    <div class="row">
        <img src="https://github.com/harsh6045/jewel-store/assets/137603920/cc07e81a-546a-4a0b-b553-89ec6fd32b67" alt="Screenshot 3" width="300">
        <img src="https://github.com/harsh6045/jewel-store/assets/137603920/2a8dc35d-6cf5-4d15-b0cb-d4c03deeb5a2" alt="Screenshot 4" width="300">
    </div>
    <div class="row">
        <img src="https://github.com/harsh6045/jewel-store/assets/137603920/71556412-2f11-4ab0-bc93-fa3fb4921c12" alt="Screenshot 5" width="300">
        <img src="https://github.com/harsh6045/jewel-store/assets/137603920/c6ef8db8-7fa6-4d1a-bd27-4a084b9cb156" alt="Screenshot 6" width="300">
    </div>
    <div class="row">
        <img src="https://github.com/harsh6045/jewel-store/assets/137603920/4ab302ac-0213-4ae8-ab34-6017a2abdb96" alt="Screenshot 7" width="300">
        <img src="https://github.com/harsh6045/jewel-store/assets/137603920/cd91665a-583d-4246-9e7a-7a5d2fb7be3c" alt="Screenshot 8" width="300">
    </div>


## Getting Started
To get started with the Jewel Cart Management System, follow these steps:

1. **Clone the Repository:** Use the following command to clone the repository to your local machine:
- ```
    git clone https://github.com/harsh6045/jewel-cart.git
  ```  
|
2. **Install Dependencies:** Navigate to the project directory and install the necessary dependencies.
- For the backend, run:
  ```
  cd backend
  mvn clean install
  ```
- For the frontend, run:
  ```
  cd frontend
  npm install
  ```

3. **Setup Database:** Configure your MySQL Workbench with the provided schema and credentials.

4. **Run the Application:**
- Start the backend server by running:
  ```
  cd backend
  spring boot:run
  ```
- In a separate terminal, start the frontend by running:
  ```
  cd frontend
  npm start
  ```

5. **Access the Application:** Open your web browser and navigate to http://localhost:3000 to access the Jewel Cart Management System.

## Many-to-Many Relationship of Customer and Stock
In our platform, customers can be associated with multiple stocks, and conversely, each stock can be associated with multiple customers. This allows for flexible management of stock ownership and enables businesses to efficiently track the relationships between customers and their associated stocks.

## Tech Stack
- **Frontend:** React.js
- **Backend:** Spring Boot
- **Database ORM:** Hibernate
- **Database:** MySQL
- **Tools:** MySQL Workbench, Postman, IntelliJ IDEA, Visual Studio Code

## Contributors
- **Harsh Langaliya** ([GitHub](https://github.com/harsh6045)) - Backend Developer & Frontend Developer

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For any questions, comments, or suggestions, please feel free to reach out to me at langaliyaharsh2003@gmail.com.
