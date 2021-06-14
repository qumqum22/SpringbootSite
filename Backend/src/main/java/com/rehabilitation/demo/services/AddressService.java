package com.rehabilitation.demo.services;

import com.rehabilitation.demo.models.Address;
import com.rehabilitation.demo.models.UserData;
import com.rehabilitation.demo.repository.AddressRepository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class AddressService {

    private final AddressRepository addressRepository;

    public Address getSingleAddress(long id) {
        return addressRepository.findById(id)
                .orElseThrow(EntityNotFoundException::new);
    }

    public AddressService(AddressRepository addressRepository)
    {
        this.addressRepository = addressRepository;
    }

    public List<Address> getAddresses(UserData userData) {
        return addressRepository.findAllByUserdata(userData);
    }

    public void deleteAddress(long id) {
        addressRepository.deleteById(id);
    }
    public void addAddress(Address address) {
        addressRepository.save(address);
    }


}
