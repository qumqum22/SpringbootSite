package com.rehabilitation.demo.services;

import com.rehabilitation.demo.models.UserData;
import com.rehabilitation.demo.repository.UserDataRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

        private final UserDataRepository userDataRepository;

    public UserService(UserDataRepository userDataRepository) {
        this.userDataRepository = userDataRepository;
    }

    public List<UserData> getUsers()
        {
            return userDataRepository.findAll();
        }


//    public UserData getSingleUser(long id) {
//        return userDataRepository.findById(id);
//    }
}
