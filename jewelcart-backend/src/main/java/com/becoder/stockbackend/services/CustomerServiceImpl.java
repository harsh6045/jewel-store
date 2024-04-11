package com.becoder.stockbackend.services;

import com.becoder.stockbackend.model.Customer;
import com.becoder.stockbackend.model.Stock;
import com.becoder.stockbackend.repository.CustomerRepository; // Assuming you have a CustomerRepository
import com.becoder.stockbackend.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository; // Assuming you have a CustomerRepository

    @Autowired
    private StockRepository stockRepository;
    @Override
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer getCustomerById(Long id) {
        return customerRepository.findById(id).orElse(null);
    }

    @Override
    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public Customer updateCustomer(Long id, Customer customer) {
        customer.setId(id);
        return customerRepository.save(customer);
    }

    @Override
    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }

    @Override
    public List<Customer> searchCustomers(String keyword) {
        // Implement search logic using customerRepository
        // Example: return customerRepository.findBySomeFieldContaining(keyword);
        return null;
    }

    @Override
    public List<Customer> filterCustomersByDepartment(String department) {
        // Implement filter logic using customerRepository
        // Example: return customerRepository.findByDepartment(department);
        return null;
    }

    @Override
    public List<Customer> sortCustomersByName() {
        // Implement sorting logic using customerRepository
        // Example: return customerRepository.findAll(Sort.by(Sort.Order.asc("name")));
        return null;
    }

    @Override
    public Customer assignStocks(Long id, Long stockId, Customer customer) {
        List<Stock> stockset = null;
        customer = customerRepository.findById(id).get();
        Stock stock = stockRepository.findById(stockId).get();
        stockset = customer.getStocks();
        stockset.add(stock);
        customer.setStocks(stockset);
        return customerRepository.save(customer);
    }
}
