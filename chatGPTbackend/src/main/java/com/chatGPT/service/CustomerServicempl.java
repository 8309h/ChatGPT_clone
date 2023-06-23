package com.chatGPT.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chatGPT.exception.CustomerException;
import com.chatGPT.model.Customer;
import com.chatGPT.repository.CustomerRepository;

@Service
public class CustomerServicempl implements CustomerService {

	@Autowired
	private CustomerRepository customerRepo;
	

	@Override
	public Customer addCustomer(Customer customer) {
		if(customer==null || customer.getEmail()==null)throw new CustomerException("Customer Cannot be null.");
		Optional<Customer> cust=customerRepo.findByEmail(customer.getEmail());
		if(cust.isPresent()) {
			throw new CustomerException("Customer with this Username "+customer.getEmail()+" already exist.");
		}
		return customerRepo.save(customer);
	}

	

	@Override
	public Customer deleteCustomer(Integer customerId) {
		if(customerId==null || customerId==0)throw new CustomerException("Invalid CustomerId");
		Customer cust=customerRepo.findById(customerId).orElseThrow(()-> new CustomerException("Customer with CustomerId "+customerId+" does not exist"));
		customerRepo.delete(cust);
		return cust;
	}

	@Override
	public Customer viewCustomer(Integer customerId) {
		if(customerId==null || customerId==0)throw new CustomerException("Invalid CustomerId");
		Customer cust=customerRepo.findById(customerId).orElseThrow(()-> new CustomerException("Customer with CustomerId "+customerId+" does not exist"));
		return cust;
	}
	
	@Override
	public Customer viewCustomerByEmail(String email) {
		if(email==null)throw new CustomerException("Username cannot be null");
		Customer cust=customerRepo.findByEmail(email).orElseThrow(()-> new CustomerException("Customer with email "+email+" does not exist"));
		return cust;
	}
	

	@Override
	public List<Customer> viewAllCustomer() {
		return customerRepo.findAll();
	}

	

}
