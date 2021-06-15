package com.rehabilitation.demo.controllers;

import com.rehabilitation.demo.models.Address;
import com.rehabilitation.demo.models.Phones;
import com.rehabilitation.demo.models.UserData;
import com.rehabilitation.demo.services.AddressService;
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
    private final AddressService addressService;

    public UserController(UserService userService,
                          PhonesService phonesService,
                          AddressService addressService) {
        this.userService = userService;
        this.phonesService = phonesService;
        this.addressService = addressService;
    }

    // User's actions.
    @GetMapping("/users")
    public List<UserData> all()
    {
        return userService.getUsers();
     }


     @GetMapping("/users/{id}")
     public UserData getSingleUser(@PathVariable("id") long id){
        return userService.getSingleUser(id);
     }

     @GetMapping("/users/address/{id}")
     public List<UserData> getUsersByAddress(@PathVariable("id") long id) {
         Address tempAddress = addressService.getSingleAddress(id);
         return userService.getUsersByAddress(tempAddress);}


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
    public void addPhone(@PathVariable("id") long id, @RequestBody Phones phoneNumber)
    {
        UserData user = userService.getSingleUser(id);
        Phones phone = new Phones(phoneNumber.getPhoneNumber(), user);
        phonesService.addPhone(phone);
    }

    // User's addresses actions.
    @GetMapping("/address/{id}")
    public Address getSingleAddress(@PathVariable("id") long id){
        return addressService.getSingleAddress(id);
    }

    @GetMapping("/addresses/{user_id}")
    public List<Address> allAddresses(@PathVariable("user_id") long user_id) {
        UserData tempUser = userService.getSingleUser(user_id);
        //UserData addedUsers = addressService
        return addressService.getAddresses(tempUser);
    }
    @DeleteMapping("address/delete/{id}/{user_id}")
    public void deleteAddress(@PathVariable("id") long id, @PathVariable("user_id") long user_id)
    {
        Address tempAddress = addressService.getSingleAddress(id);
        UserData tempUser = userService.getSingleUser(user_id);
        userService.deleteAddress(tempUser, tempAddress);
        addressService.deleteAddress(id);
    }
}
