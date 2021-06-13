package com.rehabilitation.demo.controllers;

import com.rehabilitation.demo.models.Phones;
import com.rehabilitation.demo.models.UserData;
import com.rehabilitation.demo.services.PhonesService;
import com.rehabilitation.demo.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {


    private final UserService userService;
    private final PhonesService phonesService;

    public UserController(UserService userService, PhonesService phonesService) {
        this.userService = userService;
        this.phonesService = phonesService;
    }

    // getting all expenses
    @GetMapping("/users")
    public List<UserData> all()
    {
        return userService.getUsers();
     }


     @GetMapping("/users/{id}")
     public UserData getSingleUser(@PathVariable("id") long id){
        return userService.getSingleUser(id);
     }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/register")
    public boolean newUser(@RequestBody UserData newUserData)
    {
        return userService.save(newUserData);
    }

    @PutMapping("/users/update")
    public boolean changeData(@RequestBody UserData newUserData)
    {
        return userService.updateProfile(newUserData);
    }


    @DeleteMapping("settings/delete/{id}")
    public void deleteUser(@PathVariable("id") long id)
    {
        userService.deleteUser(id);
    }


    // User's phones actions.

    @GetMapping("/phones/{user_id}")
    public List<Phones> allPhones(@PathVariable("user_id") long user_id) {
        UserData tempUser = userService.getSingleUser(user_id);
        return phonesService.getPhones(tempUser);
    }

    @DeleteMapping("phones/delete/{id}")
    public void deletePhone(@PathVariable("id") long id)
    {
        phonesService.deletePhone(id);
    }

    @PostMapping("/phones/add/{id}")
    public void addPhone(@PathVariable("id") UserData id, @RequestBody Phones phoneNumber)
    {
        Phones phone = new Phones(phoneNumber.getPhoneNumber(), id);
        phonesService.addPhone(phone);
    }
}
