package com.javatechie.spring.mockito.api.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Document(collection = "driver")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Driver {
	
	public Driver(String string, String string2, String string3, String string4, String string5, String string6,
			String string7, String string8, String string9) {
		// TODO Auto-generated constructor stub
	}
	@Id
	private String username;
	private String Password;
	private String role;
	private String firstname;
	private String lastname;
	private String regno;
	private String type;
	private String capacity;
	private String city;
	public String getUsername() {
		return username;
	}
	public String getPassword() {
		return Password;
	}
	public String getRole() {
		return role;
	}
	public String getFirstname() {
		return firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public String getRegno() {
		return regno;
	}
	public String getType() {
		return type;
	}
	public String getCapacity() {
		return capacity;
	}
	public String getCity() {
		return city;
	}
}
