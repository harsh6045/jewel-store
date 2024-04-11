import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.2)', padding: '10px 20px' }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" aria-current="page" style={{ fontSize: '40px', fontWeight: 'bold', marginLeft: '10px' }}>
          Jewel Cart Management
        </Link>
        

        <Link to="/" className="navbar-brand" aria-current="page" style={{ fontSize: '20px', fontWeight: 'normal', marginLeft: '300px' }}>
          Home
        </Link>
        <Link to="/stockList" className="navbar-brand" aria-current="page" style={{ fontSize: '20px', fontWeight: 'normal', marginLeft: '10px' }}>
          Stock List
        </Link>
        <Link to="/customerstats" className="navbar-brand" aria-current="page" style={{ fontSize: '20px', fontWeight: 'normal', marginLeft: '10px' }}>
          Customer Stats
        </Link>
        <Link to="/gstbills" className="navbar-brand" aria-current="page" style={{ fontSize: '20px', fontWeight: 'normal', marginLeft: '10px' }}>
          GST Bills
        </Link>
        
        <Link to="/aboutus" className="navbar-brand" aria-current="page" style={{ fontSize: '20px', fontWeight: 'normal', marginLeft: '10px' }}>
          About Us
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
      </div>
    </nav>
  );
};

export default Navbar;
