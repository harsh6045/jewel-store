import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import customerService from '../service/customer.service';
import stockService from '../service/stock.service';

export const CreateCustomer = () => {
    const [newCustomer, setNewCustomer] = useState({
        name: '',
        phoneno: '',
        dues: 0,
        date: '',
        present: true,
        stocks: []
    });
    const [stocks, setStocks] = useState([]);
    const [msg, setMsg] = useState('');
    const navigation = useNavigate();

    useEffect(() => {
        stockService.getAllStocks()
            .then(res => setStocks(res.data))
            .catch(err => console.error('Error fetching stocks:', err));
    }, []);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setNewCustomer(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleStockChange = e => {
        const selectedStockId = e.target.value;
        const isSelected = newCustomer.stocks.some(stock => stock.id === selectedStockId);
        let updatedStocks = [...newCustomer.stocks];

        if (isSelected) {
            updatedStocks = updatedStocks.filter(stock => stock.id !== selectedStockId);
        } else {
            const selectedStock = stocks.find(stock => stock.id === selectedStockId);
            if (selectedStock) {
                updatedStocks.push(selectedStock);
            }
        }

        setNewCustomer(prev => ({
            ...prev,
            stocks: updatedStocks
        }));
    };

    const handleCreateCustomer = async e => {
        e.preventDefault();
        try {
            const createdCustomer = await customerService.createCustomer(newCustomer);
            console.log('Customer Created Successfully');
            setMsg('Customer Created Successfully');

            setNewCustomer({
                name: '',
                phoneno: '',
                dues: 0,
                date: '',
                present: true,
                stocks: []
            });
            navigation('/');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#7deac2' }}>
            <div className="form-container p-4 bg-white rounded shadow">
                <h2 className="text-center mb-4">Create Customer</h2>
                <form onSubmit={handleCreateCustomer}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={newCustomer.name}
                            onChange={handleInputChange}
                            maxLength={50}
                            size={30}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phoneno" className="form-label">Phone Number:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phoneno"
                            name="phoneno"
                            value={newCustomer.phoneno}
                            onChange={handleInputChange}
                            maxLength={20}
                            size={20}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dues" className="form-label">Dues:</label>
                        <input
                            type="number"
                            className="form-control"
                            id="dues"
                            name="dues"
                            value={newCustomer.dues}
                            onChange={handleInputChange}
                            size={10}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Date:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="date"
                            name="date"
                            value={newCustomer.date}
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
                            checked={newCustomer.present}
                            onChange={() => setNewCustomer({ ...newCustomer, present: !newCustomer.present })}
                        />
                        <label className="form-check-label" htmlFor="present">Present</label>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="stocks" className="form-label">Stock:</label>
                        <select
                            id="stocks"
                            name="stockId"
                            value={newCustomer.stockId || ''}
                            onChange={handleStockChange}
                            className="form-select"
                        >
                            <option value="">Select a stock</option>
                            {stocks.map(stock => (
                                <option key={stock.id} value={stock.id}>
                                    {stock.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Create Customer</button>
                </form>
                {msg && <div className="mt-3 alert alert-success">{msg}</div>}
            </div>
        </div>
    );
};

export default CreateCustomer;