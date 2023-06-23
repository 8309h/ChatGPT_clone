package com.chatGPT.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.chatGPT.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer>,PagingAndSortingRepository<Customer, Integer>{
 
	public Optional<Customer> findByEmail(String email);
}
