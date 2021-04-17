package com.rehabilitation.demo.controllers;

import com.rehabilitation.demo.exception.ResourceNotFoundException;
import com.rehabilitation.demo.models.User;
import com.rehabilitation.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository repository) {
        this.userRepository = repository;
    }

    // getting all expenses
    @GetMapping("/users")
    public List<User> all()
    {
        return userRepository.findAll();
    }

    @GetMapping("users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long userId)
            throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));
        return ResponseEntity.ok().body(user);
    }

    // adding new user
    @PostMapping("/users")
    public User newUser(@RequestBody User newUser)
    {
        // zapisuje uzytkownika do bazy
        return userRepository.save(newUser);
    }
}
