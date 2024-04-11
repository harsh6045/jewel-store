package com.becoder.stockbackend.Controller;

import com.becoder.stockbackend.model.Stock;
import com.becoder.stockbackend.services.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/stocks") // Changed the mapping to "/api/stocks"
public class StockController {

    @Autowired
    private StockService stockService;

    @GetMapping
    public List<Stock> getAllStocks() { // Changed the method name to getAllStocks
        return stockService.getAllStocks(); // Changed the method name to getAllStocks
    }

    @GetMapping("/{id}")
    public Stock getStockById(@PathVariable Long id) { // Changed the method name to getStockById
        return stockService.getStockById(id); // Changed the method name to getStockById
    }

    @PostMapping
    public ResponseEntity<Stock> createStock(@RequestBody Stock stock) { // Changed parameter name to stock
        Stock createdStock = stockService.saveStock(stock); // Changed parameter name to stock
        return ResponseEntity.ok(createdStock);
    }

    @PutMapping("/{id}")
    public Stock updateStock(@PathVariable Long id, @RequestBody Stock stock) {
        return stockService.updateStock(id, stock); // Changed parameter name to stock
    }

    @DeleteMapping("/{id}")
    public void deleteStock(@PathVariable Long id) {
        stockService.deleteStock(id); // Changed method name to deleteStock
    }

    // Implement additional endpoints for search, filter, and sort functionalities
}
