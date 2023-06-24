package com.chatGPT.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int customerId;
	
	@NotBlank
	@NotNull
	@NotEmpty
	@Size(min = 2)
	private String customerName;
	
	@NotBlank
	@NotEmpty
	@NotNull
	@Email(regexp = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",message = "Invalid username Id, you can use you email as your username")
	@Column(unique = true)
	private String email;
	
	@NotBlank
	@NotNull
	@NotEmpty
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private String password;
	
	@NotBlank
	@NotNull
	@NotEmpty
	private String age;
	
	@NotBlank
	@NotNull
	@NotEmpty
	private String gender;
	
	@NotBlank
	@NotNull
	@NotEmpty
	private String city;
	
	private String role;
	
}
