package com.becoder.stockbackend.services;

import com.becoder.stockbackend.model.Stock;
import com.becoder.stockbackend.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockServiceImpl implements StockService {

    @Autowired
    private StockRepository stockRepository;

    @Override
    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    @Override
    public Stock getStockById(Long id) {
        return stockRepository.findById(id).orElse(null);
    }

    @Override
    public Stock saveStock(Stock stock) {
        return stockRepository.save(stock);
    }

    @Override
    public Stock updateStock(Long id, Stock stock) {
        stock.setId(id);
        return stockRepository.save(stock);
    }

    @Override
    public void deleteStock(Long id) {
        stockRepository.deleteById(id);
    }

    @Override
    public List<Stock> searchStocks(String keyword) {
        // Implement search logic using stockRepository
        // Example: return stockRepository.findBySomeFieldContaining(keyword);
        return null;
    }

    @Override
    public List<Stock> filterStocksByDepartment(String department) {
        // Implement filter logic using stockRepository
        // Example: return stockRepository.findByDepartment(department);
        return null;
    }

    @Override
    public List<Stock> sortStocksByName() {
        // Implement sorting logic using stockRepository
        // Example: return stockRepository.findAll(Sort.by(Sort.Order.asc("name")));
        return null;
    }
}
