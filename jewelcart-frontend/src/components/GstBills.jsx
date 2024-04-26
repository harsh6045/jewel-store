import React from 'react';

export const GstBills = () => {
  // Dummy data
  const dummyData = [
    { id: 1, billNumber: 'B101', customerName: 'Dev Joshi', amount: 1500 },
    { id: 2, billNumber: 'B102', customerName: 'Meet K.', amount: 2200 },
    // Add more dummy data as needed
  ];

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">GST Bills</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Bill Number</th>
              <th>Customer Name</th>
              <th>Amount</th>
              {/* Add more columns based on your GST bill structure */}
            </tr>
          </thead>
          <tbody>
            {dummyData.map(bill => (
              <tr key={bill.id}>
                <td>{bill.billNumber}</td>
                <td>{bill.customerName}</td>
                <td>{bill.amount}</td>
                {/* Add more cells based on your GST bill structure */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GstBills;
