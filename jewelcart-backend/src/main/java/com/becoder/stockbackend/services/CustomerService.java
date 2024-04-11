package com.becoder.stockbackend.services;

import com.becoder.stockbackend.model.Customer;
import com.becoder.stockbackend.model.Stock;

import java.util.List;

public interface CustomerService {
    List<Customer> getAllCustomers();
    Customer getCustomerById(Long id);
    Customer saveCustomer(Customer customer);
    Customer updateCustomer(Long id, Customer customer);
    void deleteCustomer(Long id);
    List<Customer> searchCustomers(String keyword);
    List<Customer> filterCustomersByDepartment(String department);
    List<Customer> sortCustomersByName();

    Customer assignStocks(Long id, Long stockId, Customer customer);
}
