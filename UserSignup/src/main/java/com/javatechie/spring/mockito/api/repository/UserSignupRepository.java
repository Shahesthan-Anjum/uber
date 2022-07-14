package com.javatechie.spring.mockito.api.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.javatechie.spring.mockito.api.model.UserSignup;

public interface UserSignupRepository extends MongoRepository<UserSignup, Integer>{

	List<UserSignup> findByusername(String username);

	
	
}
