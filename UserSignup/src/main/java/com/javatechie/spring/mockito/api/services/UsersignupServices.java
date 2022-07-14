package com.javatechie.spring.mockito.api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javatechie.spring.mockito.api.model.UserSignup;
import com.javatechie.spring.mockito.api.repository.UserSignupRepository;


@Service
public class  UsersignupServices  {

	@Autowired
	private UserSignupRepository repository;
	

	public UserSignup addUserSignup(UserSignup usersignup) {
		return repository.save(usersignup);
	}

	public List<UserSignup> getUserSignups() {
		List<UserSignup> UserSignups = repository.findAll();
		System.out.println("Getting data from DB : " + UserSignups);
		return UserSignups;
	}

	public List<UserSignup> getUserSignupByUsername(String username) {
		return repository.findByusername(username);
	}

	public void deleteUserSignup(UserSignup usersignup) {
		repository.delete(usersignup);
	}
}

