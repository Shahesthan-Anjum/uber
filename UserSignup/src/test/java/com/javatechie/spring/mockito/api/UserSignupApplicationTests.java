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
import com.javatechie.spring.mockito.api.model.UserSignup;
import com.javatechie.spring.mockito.api.repository.UserSignupRepository;
import com.javatechie.spring.mockito.api.services.UsersignupServices;
@RunWith(SpringRunner.class)
@SpringBootTest
public class UserSignupApplicationTests {



@Autowired
private UsersignupServices service;



@MockBean
private UserSignupRepository repository;



@Test
public void getUserSignupTest() {
	when(repository.findAll()).thenReturn(Stream
			.of(new UserSignup("33","Danile", "31", "USA","abf"), new UserSignup("Huy"," "," ","35", "UK")).collect(Collectors.toList()));
	assertEquals(2, service.getUserSignups().size());
}


@Test public void getgetUserSignupByUsernameTest() { String username="888";
when(repository.findByusername(username)) .thenReturn
(Stream.of(new UserSignup("33","Danile", "31", "USA","abf")).collect(Collectors.toList())); assertEquals(1,
				service.getUserSignupByUsername(username).size()); }

@Test public void saveUserSignupTest() { UserSignup usersignup = new UserSignup("33","anju", "31", "USfA","abfff");
when(repository.save(usersignup)).thenReturn(usersignup); assertEquals(usersignup,
		service.addUserSignup(usersignup)); }

@Test public void deleteUserSignupTest() { UserSignup usersignup = new UserSignup("33","anju", "31", "USfA","abfff");
service.deleteUserSignup(usersignup); verify(repository, times(1)).delete(usersignup); }
 


}
