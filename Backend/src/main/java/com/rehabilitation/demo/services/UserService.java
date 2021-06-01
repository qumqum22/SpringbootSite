package com.rehabilitation.demo.services;

import com.rehabilitation.demo.models.UserData;
import com.rehabilitation.demo.repository.UserDataRepository;
import com.rehabilitation.demo.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

        private final UserDataRepository userDataRepository;

    public UserService(UserDataRepository userDataRepository) {
        this.userDataRepository = userDataRepository;
    }

    public List<UserData> getUsers() {
        return userDataRepository.findAll();
    }

    public UserData getSingleUser(long id) throws ResourceNotFoundException {
        return userDataRepository.findUserDataById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User by id " + id + " was not found"));
    }

    public boolean save(UserData newUserData) {
        if(!newUserData.getEmail().contains("@"))
            return false;
        if(newUserData.getPassword().length() < 6) {
            return false;
        }
        this.userDataRepository.save(newUserData);
        return true;
    }

    public boolean changeProfile() {
        return true;
    }
}
