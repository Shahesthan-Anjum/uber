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

import com.javatechie.spring.mockito.api.model.Admin;
import com.javatechie.spring.mockito.api.services.AdminServices;


@RestController
@CrossOrigin
public class AdminController {
	@Autowired
	private AdminServices service;

	@PostMapping(value = "/addAdmin")
	public Admin saveAdmin(@RequestBody Admin admin) {
		return service.addAdmin(admin);
	}

	@GetMapping("/getAdmin")
	public List<Admin> findAllAdmins() {
		return service.getAdmins();
	}

	@GetMapping("/getAdmin/{id}")
	public List<Admin> findByAdminUsername(@PathVariable String username) {
		return service.getAdminByUsername(username);
	}

	@DeleteMapping(value="/remove")
	public Admin removeAdmin(@RequestBody Admin admin) {
		service.deleteAdmin(admin);
		return admin;
	}
}

