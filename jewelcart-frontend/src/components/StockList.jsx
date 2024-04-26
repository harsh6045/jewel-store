

import React, { useEffect, useState } from 'react';
import stockService from '../service/stock.service';
import { Link } from 'react-router-dom';
import '../styles/Stock.css';

export const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    stockService
      .getAllStocks()
      .then(res => {
        setStocks(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleDeleteStock = id => {
    if (window.confirm('Are you sure you want to delete this Stock?')) {
      stockService
        .deleteStock(id)
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
    <div style={{ backgroundColor: '#7deac2' }}>
      <section className="py-12 bg-green sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <br />
          <h2 style={{ textAlign: 'center', color: 'black' }}>Stock List</h2>
        <div className="navbar" style={{ display: 'flex',  marginBottom: '10px' }}>
          <Link to="/stockList" className="btn btn-primary">
            Stock List
          </Link>
          <Link to="/createStock" className="btn btn-success">
            Add Stock
          </Link>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {stocks.map(stock => (
              <div key={stock.id} className="group stock-card">
                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                  {/* Add your content or image here */}
                </div>
                <div className="relative p-4 bg-white shadow-md rounded-lg">
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{stock.name}</h3>
                  <p className="text-xs text-gray-600">
                    <strong>Type:</strong> {stock.department}
                    <br />
                    <strong>Quantity:</strong> {stock.quantity}
                    <br />
                    <strong>Status:</strong> {stock.present ? 'Present' : 'Absent'}
                  </p>
                  <div className="btndelandupd">
                    <button className="btn btn-danger" onClick={() => handleDeleteStock(stock.id)}>
                      Delete
                    </button>
                    <Link className="btn btn-primary" to={`../updateStock/${stock.id}`}>
                      Update
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
        </div>
      </section>
    </div>
  );
};
