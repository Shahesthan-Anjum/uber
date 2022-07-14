package com.javatechie.spring.mockito.api;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import java.util.stream.Collectors;
import java.util.stream.Stream;



import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.javatechie.spring.mockito.api.Service.DriverService;
import com.javatechie.spring.mockito.api.model.Driver;
import com.javatechie.spring.mockito.api.repository.DriverRepository;




@RunWith(SpringRunner.class)
@SpringBootTest
public class DriverApplicationTests {



@Autowired
private DriverService service;



@MockBean
private DriverRepository repository;



@Test
public void getMapTest() {
	when(repository.findAll()).thenReturn(Stream
			.of(new Driver("376","11","22","22","33","Danile", "31", "USA","abf"), new Driver("958"," "," "," ", "Huy"," "," ","35", "UK")).collect(Collectors.toList()));
	assertEquals(2, service.getDrivers().size());
}


@Test public void getDriverbyRegnoTest() { String regno="888";
when(repository.findByRegno(regno)) .thenReturn
(Stream.of(new Driver("376","11","22","22","33","Danile", "31", "USA","abf")).collect(Collectors.toList())); assertEquals(1,
				service.getDriverbyRegno(regno).size()); }

@Test public void saveDriverTest() { Driver driver = new Driver("3776","11","72","22","33","anju", "31", "USfA","abfff");
when(repository.save(driver)).thenReturn(driver); assertEquals(driver,
		service.addDriver(driver)); }

@Test public void deleteMapTest() { Driver driver = new Driver("3776","11","72","22","33","anju", "31", "USfA","abfff");
service.deleteDriver(driver); verify(repository, times(1)).delete(driver); }
 


}
