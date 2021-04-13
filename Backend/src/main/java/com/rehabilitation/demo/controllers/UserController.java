package com.rehabilitation.demo.controllers;

import com.rehabilitation.demo.models.User;
import com.rehabilitation.demo.repository.UserRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    private final UserRepository repository;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    // getting all expenses
    @GetMapping("/users")
    List<User> all() {
        return repository.findAll();
    }

    // adding new user
    @PostMapping("/users")
    User newUser(@RequestBody User newUser) {
        // zapisuje uzytkownika do bazy
        return repository.save(newUser);
    }
}
