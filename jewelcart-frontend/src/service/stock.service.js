import axios from "axios";

const API_URL = "https://jewel-store-production.up.railway.app/api/stocks"; // Update API endpoint for stocks

class StockService {
    getAllStocks() {
        return axios.get(API_URL);
    }

    getStockById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    createStock(stock) {
        return axios.post(API_URL, stock);
    }

    updateStock(id, stock) {
        return axios.put(`${API_URL}/${id}`, stock);
    }

    deleteStock(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new StockService();
