import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import stockService from '../service/stock.service';

export const CreateStock = () => {
  const [newStock, setNewStock] = useState({
    name: '',
    department: '',
    quantity: 0,
    present: true,
  });
  const [msg, setMsg] = useState('');
  const navigation = useNavigate();

  const handleInputChange = e => {
    setNewStock({ ...newStock, [e.target.name]: e.target.value });
  };

  const handleCreateStock = e => {
    e.preventDefault();
    stockService
      .createStock(newStock)
      .then(res => {
        console.log('Stock Created Successfully');
        setMsg('Stock Created Successfully');
        setNewStock({
          name: '',
          department: '',
          quantity: 0,
          present: true,
        });
        navigation('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#7deac2' }}>
      <div className="form-container p-4 bg-white rounded shadow">
        <h2 className="text-center mb-4">Create Stock</h2>
        <form onSubmit={handleCreateStock}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={newStock.name}
              onChange={handleInputChange}
              maxLength={50}
              size={30}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="department" className="form-label">
              Type:
            </label>
            <input
              type="text"
              className="form-control"
              id="department"
              name="department"
              value={newStock.department}
              onChange={handleInputChange}
              maxLength={50}
              size={30}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Quantity:
            </label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              name="quantity"
              value={newStock.quantity}
              onChange={handleInputChange}
              maxLength={50}
              size={30}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="present"
              name="present"
              checked={newStock.present}
              onChange={() => setNewStock({ ...newStock, present: !newStock.present })}
            />
            <label className="form-check-label" htmlFor="present">
              Present
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Create Stock
          </button>
        </form>
        {msg && <div className="mt-3 alert alert-success">{msg}</div>}
      </div>
    </div>
  );
};