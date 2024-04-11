import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const GstBills = () => {
  const [gstBills, setGSTBills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch GST bills data from your API endpoint
    axios.get('YOUR_API_ENDPOINT')
      .then(response => {
        setGSTBills(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching GST bills:', error);
        setLoading(false);
      });
  }, []);

  // Extra dummy data
  const extraDummyData = [
    { id: 101, billNumber: 'B101', customerName: 'Dev Joshi', amount: 1500 },
    { id: 102, billNumber: 'B102', customerName: 'Meet K.', amount: 2200 },
    // Add more dummy data as needed
  ];

  // Combine fetched data and dummy data
  const allGstBills = [...gstBills, ...extraDummyData];

  return (
    <div className="container">
      <h2>GST Bills</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Bill Number</th>
              <th>Customer Name</th>
              <th>Amount</th>
              {/* Add more columns based on your GST bill structure */}
            </tr>
          </thead>
          <tbody>
            {allGstBills.map(bill => (
              <tr key={bill.id}>
                <td>{bill.billNumber}</td>
                <td>{bill.customerName}</td>
                <td>{bill.amount}</td>
                {/* Add more cells based on your GST bill structure */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GstBills;
