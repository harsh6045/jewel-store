// import React, { useEffect, useState } from 'react';
// import stockService from '../service/stock.service';
// import { Link } from 'react-router-dom';
// import '../styles/Card.css';

// export const StockList = () => {
//   const [stocks, setStocks] = useState([]);
//   const [msg, setMsg] = useState('');

//   useEffect(() => {
//     init();
//   }, []);

//   const init = () => {
//     stockService
//       .getAllStocks()
//       .then(res => {
//         setStocks(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   const handleDeleteStock = id => {
//     if (window.confirm('Are you sure you want to delete this Stock?')) {
//       stockService
//         .deleteStock(id)
//         .then(res => {
//           setMsg('Delete Successfully');
//           init();
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     }
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100 overflow-x-auto">
//       <div>
//         <br />
//         <br />
//         <h2 className="text-center mb-4 pt-4 pb-4">List Of Current Stock</h2>
//         <div className="row flex-nowrap">
//           {stocks.map(stock => (
//             <div key={stock.id} className="col-md-4 mb-4">
//               <div className="card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//                 <div className="card-body">
//                   <h5 className="card-title">{stock.name}</h5>
//                   <p className="card-text">
//                     <strong>Department:</strong> {stock.department}
//                     <br />
//                     <strong>Quantity:</strong> {stock.quantity}
//                     <br />
//                     <strong>Status:</strong> {stock.present ? 'Present' : 'Absent'}
//                   </p>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <button className="btn btn-danger" onClick={() => handleDeleteStock(stock.id)}>
//                       Delete
//                     </button>
//                     <Link className="btn btn-primary" to={`../updateStock/${stock.id}`}>
//                       Update
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };









// import React, { useEffect, useState } from 'react';
// import stockService from '../service/stock.service';
// import { Link } from 'react-router-dom';
// import '../styles/Card.css';

// export const StockList = () => {
//   const [stocks, setStocks] = useState([]);
//   const [msg, setMsg] = useState('');

//   useEffect(() => {
//     init();
//   }, []);

//   const init = () => {
//     stockService
//       .getAllStocks()
//       .then(res => {
//         setStocks(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   const handleDeleteStock = id => {
//     if (window.confirm('Are you sure you want to delete this Stock?')) {
//       stockService
//         .deleteStock(id)
//         .then(res => {
//           setMsg('Delete Successfully');
//           init();
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     }
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100 overflow-y-auto">
//       <div>
//         <br />
//         <br />
//         <h2 className="text-center mb-4 pt-4 pb-4">List Of Current Stock</h2>
//         <div className="row">
//           {stocks.map(stock => (
//             <div key={stock.id} className="col-md-4 mb-4">
//               <div className="card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//                 <div className="card-body">
//                   <h5 className="card-title">{stock.name}</h5>
//                   <p className="card-text">
//                     <strong>Department:</strong> {stock.department}
//                     <br />
//                     <strong>Quantity:</strong> {stock.quantity}
//                     <br />
//                     <strong>Status:</strong> {stock.present ? 'Present' : 'Absent'}
//                   </p>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <button className="btn btn-danger" onClick={() => handleDeleteStock(stock.id)}>
//                       Delete
//                     </button>
//                     <Link className="btn btn-primary" to={`../updateStock/${stock.id}`}>
//                       Update
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };











// import React from 'react';
// import '../styles/Stock.css'; // Import your external CSS file for styling

// export const StockList = () => {
//   return (
//     <section className="py-12 bg-white sm:py-16 lg:py-20">
//       <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//         <div className="max-w-md mx-auto text-center">
//           <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our featured items</h2>
//           <p className="mt-4 text-base font-normal leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
//         </div>

//         <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
//           <div className="relative group stock-card">
//             <div className="overflow-hidden aspect-w-1 aspect-h-1">
//               {/* Image removed */}
//             </div>
//             <div className="absolute left-3 top-3">
//               <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">New</p>
//             </div>
//             <div className="flex items-start justify-between mt-4 space-x-4">
//               <div>
//                 <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
//                   <a href="#" title="">
//                     Beoplay M5 Bluetooth Speaker
//                     <span className="absolute inset-0" aria-hidden="true"></span>
//                   </a>
//                 </h3>
//                 <div className="flex items-center mt-2.5 space-x-px">
//                   {/* SVG images removed */}
//                 </div>
//               </div>

//               <div className="text-right">
//                 <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">$99.00</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };



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
