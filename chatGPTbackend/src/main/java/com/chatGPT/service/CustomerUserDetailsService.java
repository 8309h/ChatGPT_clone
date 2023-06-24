package com.chatGPT.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.chatGPT.model.Customer;
import com.chatGPT.repository.CustomerRepository;

@Service
public class CustomerUserDetailsService implements UserDetailsService{
  
	@Autowired
	private CustomerRepository cusRepo;
	

	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Optional<Customer> optc = cusRepo.findByEmail(username);
	
		if(optc.isPresent()) {
			Customer cus = optc.get();
			List<GrantedAuthority> authorities= new ArrayList<>();
			SimpleGrantedAuthority sga= new SimpleGrantedAuthority(cus.getRole());
			authorities.add(sga);
			return new User(cus.getEmail(),cus.getPassword(),authorities);
		}else
			throw new BadCredentialsException("User Details not found with this username: "+username);
		
	}

}
