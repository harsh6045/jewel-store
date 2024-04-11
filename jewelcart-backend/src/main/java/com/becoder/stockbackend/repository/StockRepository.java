package com.becoder.stockbackend.repository;





import com.becoder.stockbackend.model.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockRepository extends JpaRepository<Stock, Long> {
    // Add custom query methods for search, filter, and sort if needed
}
