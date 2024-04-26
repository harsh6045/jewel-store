import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import stockService from '../service/stock.service';

export const UpdateStock = () => {
  const [stock, setStock] = useState({});
  const [msg, setMsg] = useState('');
  const navigation = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    stockService
      .getStockById(id)
      .then((res) => {
        setStock(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleInputChange = (e) => {
    setStock({ ...stock, [e.target.name]: e.target.value });
  };

  const handleUpdateStock = (e) => {
    e.preventDefault();
    stockService
      .updateStock(id, stock)
      .then((res) => {
        console.log('Stock Update Successfully');
        setMsg('Stock Update Successfully');
        setStock({});
        navigation('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="form-container p-4 bg-white rounded shadow">
        <h2 className="text-center mb-4">Update Stock</h2>
        <form onSubmit={handleUpdateStock}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={stock.name}
              onChange={handleInputChange}
              maxLength={50}
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
              value={stock.department}
              onChange={handleInputChange}
              maxLength={50}
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
              value={stock.quantity}
              onChange={handleInputChange}
              maxLength={50}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="present"
              name="present"
              checked={stock.present}
              onChange={() => setStock({ ...stock, present: !stock.present })}
            />
            <label className="form-check-label" htmlFor="present">
              Present
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Update Stock
          </button>
        </form>
        {msg && <div className="mt-3 alert alert-success">{msg}</div>}
      </div>
    </div>
  );
};