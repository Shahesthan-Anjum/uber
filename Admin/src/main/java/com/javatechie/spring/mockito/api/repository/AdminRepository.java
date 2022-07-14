package com.javatechie.spring.mockito.api.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.javatechie.spring.mockito.api.model.Admin;

public interface AdminRepository extends MongoRepository<Admin, Integer>{

	List<Admin> findByusername(String username);

	
	
}
