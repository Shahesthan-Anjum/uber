package com.javatechie.spring.mockito.api.Controller;
import java.util.List;
//import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.javatechie.spring.mockito.api.model.UserSignup;
import com.javatechie.spring.mockito.api.services.UsersignupServices;


@RestController
@CrossOrigin
public class UserSignupController {
	@Autowired
	private UsersignupServices service;

	@PostMapping(value = "/addSignup")
	public UserSignup saveUserSignup(@RequestBody UserSignup usersignup) {
		return service.addUserSignup(usersignup);
	}

	@GetMapping("/getUserSignup")
	public List<UserSignup> findAllUserSignups() {
		return service.getUserSignups();
	}

	@GetMapping("/getUserSignup/{id}")
	public List<UserSignup> findUserSignupByUsername(@PathVariable String username) {
		return service.getUserSignupByUsername(username);
	}

	@DeleteMapping(value="/remove")
	public UserSignup removeUserSignup(@RequestBody UserSignup usersignup) {
		service.deleteUserSignup(usersignup);
		return usersignup;
	}
}

