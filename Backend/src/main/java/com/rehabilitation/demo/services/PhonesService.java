package com.rehabilitation.demo.services;

import com.rehabilitation.demo.models.Phones;
import com.rehabilitation.demo.repository.PhonesRepository;
import com.rehabilitation.demo.repository.PhonesRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PhonesService {

    private final PhonesRepository phonesRepository;

    public PhonesService(PhonesRepository phonesRepository)
    {
        this.phonesRepository = phonesRepository;
    }

    public List<Phones> getPhones() {
        return phonesRepository.findAll();
    }


}
