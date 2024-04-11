import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import customerService from '../service/customer.service';
import stockService from '../service/stock.service'; // Import stock service

  


export const CustomerStats = () => {
  const [customers, setCustomers] = useState([]);
  const [msg, setMsg] = useState('');
  const [stocks, setStocks] = useState({}); // State to store stocks

  useEffect(() => {
    init();
    fetchStocks();
  }, []);

  const init = () => {
    customerService
      .getAllCustomers()
      .then(res => {
        setCustomers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const fetchStocks = () => {
    stockService.getAllStocks()
      .then(res => {
        const stockMap = {};
        res.data.forEach(stock => {
          stockMap[stock.id] = stock;
        });
        setStocks(stockMap);
      })
      .catch(err => {
        console.error('Error fetching stocks:', err);
      });
  };

  const handleDeleteCustomer = id => {
    if (window.confirm('Are you sure you want to delete this Customer?')) {
      customerService
        .deleteCustomer(id)
        .then(res => {
          setMsg('Delete Successfully');
          init();
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="list-container" style={{ backgroundColor: '#e3f2fd', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', color: 'black' }}>Customer List</h2>
        <div className="navbar" style={{ display: 'flex',  marginBottom: '10px' }}>
          <Link to="/customerstats" className="btn btn-primary">
            Customer List
          </Link>
          <Link to="/createCustomer" className="btn btn-success">
            Add Customer
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Phone No.</th>
              <th scope="col">Dues</th>
              <th scope="col">Date</th>
              <th scope="col">Stock</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.phoneno}</td>
                <td>{customer.dues}</td>
                <td>{customer.date}</td>
                <td>{stocks[customer.stockId] ? stocks[customer.stockId].name : 'N/A'}</td>
                <td>{customer.present ? 'Present' : 'Absent'}</td>
                <td>
                  <button className="btn btn-danger" style={{ padding: 5, margin: 2 }} onClick={() => handleDeleteCustomer(customer.id)}>
                    Delete
                  </button>
                  <Link className="btn btn-primary" style={{ padding: 5, margin: 2 }}
                    to={"../updateCustomer/" + customer.id}>
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
