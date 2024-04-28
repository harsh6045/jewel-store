# Jewel Cart Management System

Welcome to Jewel Cart Management System! This project aims to digitalize the process of managing stock items and customer details. With a user-friendly interface and comprehensive CRUD (Create, Read, Update, Delete) operations, you can effortlessly organize, track, and optimize your customer stock data. Whether you're a small business or a large enterprise, our platform is designed to streamline your workflow and enhance productivity. Experience the convenience of real-time updates, secure data storage, and easy accessibility as you take control of your customer stock lists like never before. Join the digital transformation and elevate your business operations with our innovative solution today!

## Features
- **User-friendly Interface:** Intuitive design makes navigation and data management seamless.
- **Comprehensive CRUD Operations:** Create, Read, Update, and Delete functionalities for efficient stock and customer management.
- **Real-time Updates:** Stay up-to-date with the latest changes in your stock and customer data.
- **Secure Data Storage:** Your data is securely stored to ensure confidentiality and integrity.
- **Easy Accessibility:** Access your data anytime, anywhere, with ease.

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
