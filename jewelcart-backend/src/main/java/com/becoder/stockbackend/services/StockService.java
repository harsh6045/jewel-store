package com.becoder.stockbackend.services;

import com.becoder.stockbackend.model.Stock;

import java.util.List;

public interface StockService {
    List<Stock> getAllStocks(); // Changed method name to getAllStocks
    Stock getStockById(Long id); // Changed method name to getStockById
    Stock saveStock(Stock stock); // Changed parameter name to stock
    Stock updateStock(Long id, Stock stock); // Changed parameter name to stock
    void deleteStock(Long id); // Changed method name to deleteStock
    List<Stock> searchStocks(String keyword); // Changed method name to searchStocks
    List<Stock> filterStocksByDepartment(String department); // Changed method name to filterStocksByDepartment
    List<Stock> sortStocksByName(); // Changed method name to sortStocksByName

    // You can add more methods for additional functionalities
}
