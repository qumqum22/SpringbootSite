package com.rehabilitation.demo.controllers;

import com.rehabilitation.demo.exception.ResourceNotFoundException;
import com.rehabilitation.demo.models.UserData;
import com.rehabilitation.demo.repository.UserDataRepository;
import com.rehabilitation.demo.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // getting all expenses
    @GetMapping("/users")
    public List<UserData> all()
    {
        return userService.getUsers();
     }

     @GetMapping("/users/{id}")
     public UserData getSingleUser(@PathVariable("id") long id) throws ResourceNotFoundException {
        return userService.getSingleUser(id);
     }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/register")
    public boolean newUser(@RequestBody UserData newUserData)
    {
        return userService.save(newUserData);
    }

    @PutMapping("/profile")
    public boolean changeData()
    {
        return userService.changeProfile();
    }


}
