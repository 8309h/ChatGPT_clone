package com.chatGPT.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.chatGPT.model.Customer;
import com.chatGPT.service.CustomerService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/ppm")
@CrossOrigin("*")
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	
	@PostMapping("/registerCustomers")
	public ResponseEntity<Customer> registerCustomerHandler(@Valid @RequestBody Customer customer){
		customer.setPassword(passwordEncoder.encode(customer.getPassword()));
    	customer.setRole("ROLE_USER");
		return new ResponseEntity<>(customerService.addCustomer(customer),HttpStatus.CREATED);
	}
	
	
	@DeleteMapping("/deleteCustomer/{custId}")
	public ResponseEntity<Customer> deleteCustomerHandler(@PathVariable("custId") Integer customerId){
		
		return new ResponseEntity<>(customerService.deleteCustomer(customerId),HttpStatus.GONE);
	}
	
	@GetMapping("/customer/{custId}")
	public ResponseEntity<Customer> getCustomerByIdHandler(@PathVariable("custId") Integer customerId){
		
		return new ResponseEntity<>(customerService.viewCustomer(customerId),HttpStatus.OK);
	}
	
	@GetMapping("/customers")
	public ResponseEntity<List<Customer>> getAllCustomersHandler(){
		
		return new ResponseEntity<>(customerService.viewAllCustomer(),HttpStatus.OK);
	}
	
	@GetMapping("/customer")
	public ResponseEntity<Customer> getCustomerByEmailHandler(@RequestParam("email") String email){
		
		return new ResponseEntity<>(customerService.viewCustomerByEmail(email),HttpStatus.OK);
	}
	
	

	 @GetMapping("/CustomerSignIn")
	    public ResponseEntity<String> getLoggedInCustomerDetailsHandler(Authentication auth){
	    System.out.println(auth); // this Authentication object having Principle object details
	    Customer customer= customerService.viewCustomerByEmail(auth.getName());
	    
	    return new ResponseEntity<>(customer.getCustomerName()+"Logged in Successfully", HttpStatus.ACCEPTED);
	  }
	 
	

}
