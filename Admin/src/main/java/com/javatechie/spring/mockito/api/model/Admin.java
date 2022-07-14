package com.javatechie.spring.mockito.api.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Document(collection = "admin")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Admin {
	@Id
	private String username;
	private String password;
	private String role;
	private String firstname;
	private String lastname;

	
	public void setUsername(String username) {
		this.username = username;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public Admin(String string, String string2, String string3, String string4, String string5) {
		// TODO Auto-generated constructor stub
	}
	
}
