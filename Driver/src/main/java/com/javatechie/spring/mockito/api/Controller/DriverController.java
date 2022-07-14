package com.javatechie.spring.mockito.api.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.javatechie.spring.mockito.api.Service.DriverService;
import com.javatechie.spring.mockito.api.model.Driver;
@RestController
@CrossOrigin
public class DriverController {

	
		@Autowired
		private DriverService service;

		@PostMapping(value = "/addDriver")
		public Driver saveDriver(@RequestBody Driver driver) {
			return service.addDriver(driver);
		}

		@GetMapping("/getDriver")
		public List<Driver> findAllDrivers() {
			return service.getDrivers();
		}

		@GetMapping("/getDriverByRegno/{Regno}")
		public List<Driver> findDriverByRegno(@PathVariable String regno) {
			return service.getDriverbyRegno(regno);
		}

		@DeleteMapping(value="/deleteDriver")
		public Driver removeDriver(@RequestBody Driver driver) {
			service.deleteDriver(driver);
			return driver;
		}
}
