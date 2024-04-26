import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import customerService from '../service/customer.service';
import stockService from '../service/stock.service';

export const CustomerStats = () => {
  const [customers, setCustomers] = useState([]);
  const [msg, setMsg] = useState('');
  const [stocks, setStocks] = useState({});

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
    stockService
      .getAllStocks()
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
      <div className="container my-4">
        <h2 className="text-center mb-4">Customer List</h2>
        <div className="d-flex justify-content-between mb-3">
          <Link to="/customerstats" className="btn btn-primary">
            Customer List
          </Link>
          <Link to="/createCustomer" className="btn btn-success">
            Add Customer
          </Link>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone No.</th>
                <th>Dues</th>
                <th>Date</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Action</th>
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
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-danger btn-sm me-2"
                        onClick={() => handleDeleteCustomer(customer.id)}
                      >
                        Delete
                      </button>
                      <Link
                        className="btn btn-primary btn-sm"
                        to={`../updateCustomer/${customer.id}`}
                      >
                        Update
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};