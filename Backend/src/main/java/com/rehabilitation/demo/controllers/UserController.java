package com.rehabilitation.demo.controllers;

import com.rehabilitation.demo.exception.ResourceNotFoundException;
import com.rehabilitation.demo.models.UserData;
import com.rehabilitation.demo.repository.UserDataRepository;
import com.rehabilitation.demo.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Stream;

@RestController
@RequestMapping("api/v1/")
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

//     @GetMapping("/users/{id}")
//     public UserData getSingleUser(@PathVariable long id){
//        return userService.getSingleUser(id);
//     }

//    @GetMapping("users/{id}")
//    public ResponseEntity<UserData> getUserById(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException {
//        UserData userData = userDataRepository.findById(userId)
//                .orElseThrow(() -> new ResourceNotFoundException("UserData not found for this id :: " + userId));
//        return ResponseEntity.ok().body(userData);
//    }


    // adding new user
//    @PostMapping("/users")
//    public UserData newUser(@RequestBody UserData newUserData)
//    {
//        // zapisuje uzytkownika do bazy
//        return userDataRepository.save(newUserData);
//    }
}
