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
import com.javatechie.spring.mockito.api.model.Admin;
import com.javatechie.spring.mockito.api.repository.AdminRepository;
import com.javatechie.spring.mockito.api.services.AdminServices;
@RunWith(SpringRunner.class)
@SpringBootTest
public class AdminApplicationTests {



@Autowired
private AdminServices service;



@MockBean
private AdminRepository repository;



@Test
public void getAdminTest() {
	when(repository.findAll()).thenReturn(Stream
			.of(new Admin("33","Danile", "31", "USA","abf"), new Admin("Huy"," "," ","35", "UK")).collect(Collectors.toList()));
	assertEquals(2, service.getAdmins().size());
}


@Test public void getAdminByUsernameTest() { String username="888";
when(repository.findByusername(username)) .thenReturn
(Stream.of(new Admin("44","ffDanile", "nn31", "nnUSA","nnabf")).collect(Collectors.toList())); assertEquals(1,
				service.getAdminByUsername(username).size()); }

@Test public void saveAdminTest() { Admin admin = new Admin("3hh3","anhhju", "3hh1", "UShhfA","abfff");
when(repository.save(admin)).thenReturn(admin); assertEquals(admin,
		service.addAdmin(admin)); }

@Test public void deleteAdminTest() { Admin admin = new Admin("3dd3","affnju", "xx31", "UcSfA","abfvff");
service.deleteAdmin(admin); verify(repository, times(1)).delete(admin); }
 


}
