package com.javatechie.spring.mockito.api.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javatechie.spring.mockito.api.model.Driver;
import com.javatechie.spring.mockito.api.repository.DriverRepository;


@Service
public class DriverService {

	@Autowired
	private DriverRepository repository;
	

	public Driver addDriver(Driver driver) {
		return repository.save(driver);
	}

	public List<Driver> getDrivers() {
		List<Driver> drivers = repository.findAll();
		System.out.println("Getting data from DB : " + drivers);
		return drivers;
	}

	public List<Driver> getDriverbyRegno(String regno) {
		return repository.findByRegno(regno);
	}

	public void deleteDriver(Driver driver) {
		repository.delete(driver);
	}
}