package com.javatechie.spring.mockito.api.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.javatechie.spring.mockito.api.model.Driver;

public interface DriverRepository extends MongoRepository<Driver, Integer>{

	List<Driver> findByRegno(String regno);
		
}
