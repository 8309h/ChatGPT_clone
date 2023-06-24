package com.chatGPT.service;

import java.util.List;

import com.chatGPT.model.Customer;

public interface CustomerService {
	public Customer addCustomer(Customer customer);
	
	public Customer deleteCustomer(Integer customerId);
	public Customer viewCustomer(Integer customerId);
	public List<Customer> viewAllCustomer();
	//public boolean validateCustomer(String userName, String password);
	public Customer viewCustomerByEmail(String username);
}
