package com.becoder.stockbackend.repository;





import com.becoder.stockbackend.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // Add custom query methods for search, filter, and sort if needed
}
