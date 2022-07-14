package com.javatechie.spring.mockito.api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javatechie.spring.mockito.api.model.Admin;
import com.javatechie.spring.mockito.api.repository.AdminRepository;


@Service
public class  AdminServices  {

	@Autowired
	private AdminRepository repository;
	

	public Admin addAdmin(Admin admin) {
		return repository.save(admin);
	}

	public List<Admin> getAdmins() {
		List<Admin> Admins = repository.findAll();
		System.out.println("Getting data from DB : " + Admins);
		return Admins;
	}

	public List<Admin> getAdminByUsername(String username) {
		return repository.findByusername(username);
	}

	public void deleteAdmin(Admin admin) {
		repository.delete(admin);
	}

	
}

