import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import customerService from '../service/customer.service';
import stockService from '../service/stock.service'; // Import stock service

export const UpdateCustomer = () => {
  const [customer, setCustomer] = useState({});
  const [stocks, setStocks] = useState([]);
  const [msg, setMsg] = useState('');
  const navigation = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    customerService
      .getCustomerById(id)
      .then((res) => {
        setCustomer(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    stockService.getAllStocks()
      .then(res => {
        setStocks(res.data);
      })
      .catch(err => {
        console.error('Error fetching stocks:', err);
      });
  }, [id]);

  const handleInputChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleUpdateCustomer = (e) => {
    e.preventDefault();
    customerService
      .updateCustomer(id, customer)
      .then((res) => {
        console.log('Customer Update Successfully');
        setMsg('Customer Update Successfully');
        setCustomer({});
        navigation('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="form-container">
        <h2 className="text-center">Update Customer</h2>
        <form onSubmit={handleUpdateCustomer}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={customer.name}
              onChange={handleInputChange}
              maxLength={50}
              size={30}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneno" className="form-label">
              Phone Number:
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneno"
              name="phoneno"
              value={customer.phoneno}
              onChange={handleInputChange}
              maxLength={20}
              size={20}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dues" className="form-label">
              Dues:
            </label>
            <input
              type="number"
              className="form-control"
              id="dues"
              name="dues"
              value={customer.dues}
              onChange={handleInputChange}
              size={10}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date:
            </label>
            <input
              type="text"
              className="form-control"
              id="date"
              name="date"
              value={customer.date}
              onChange={handleInputChange}
              maxLength={20}
              size={20}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="present"
              name="present"
              checked={customer.present}
              onChange={() => setCustomer({ ...customer, present: !customer.present })}
            />
            <label className="form-check-label" htmlFor="present">
              Present
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="stock" className="form-label">Stock:</label>
            <select
              className="form-select"
              id="stock"
              name="stockId"
              value={customer.stockId}
              onChange={handleInputChange}
            >
              <option value="">Select Stock</option>
              {stocks.map(stock => (
                <option key={stock.id} value={stock.id}>{stock.name}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Update Customer
          </button>
        </form>
        {msg && <div className="mt-3 alert alert-success">{msg}</div>}
      </div>
    </div>
  );
};
