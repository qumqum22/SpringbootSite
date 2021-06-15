package com.rehabilitation.demo.services;

import com.rehabilitation.demo.models.Address;
import com.rehabilitation.demo.models.UserData;
import com.rehabilitation.demo.repository.AddressRepository;
import com.rehabilitation.demo.repository.UserDataRepository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
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

    public List<UserData> getUsersByAddress(Address address) {
        return userDataRepository.findAllByAddress(address);}

    public UserData getSingleUser(long id) {
        return userDataRepository.findById(id)
                .orElseThrow(EntityNotFoundException::new);
    }


    public boolean save(UserData newUserData) {
        if(!newUserData.getEmail().contains("@"))
            return false;
        if(!newUserData.getEmail().contains("."))
            return false;
        if(newUserData.getPassword().length() < 6) {
            return false;
        }
        newUserData.setProfileImage(null);
        this.userDataRepository.save(newUserData);
        return true;
    }

    public boolean updateProfile(UserData oldUserData) {
        UserData updatedUser = userDataRepository.findUserDataById(oldUserData.getId());
        updatedUser.setName(oldUserData.getName());
        updatedUser.setSurname(oldUserData.getSurname());
        updatedUser.setProfileImage(oldUserData.getProfileImage());
        updatedUser.setTitle(oldUserData.getTitle());
        updatedUser.setDescription(oldUserData.getDescription());
        updatedUser.setAge(oldUserData.getAge());
        updatedUser.setGender(oldUserData.getGender());
        userDataRepository.save(updatedUser);
    return true;
    }

    public void deleteUser(long id) {
        userDataRepository.deleteById(id);
    }

    public void deleteAddress(UserData userData, Address address) {
        userData.getAddress().remove(address);
    }
}
