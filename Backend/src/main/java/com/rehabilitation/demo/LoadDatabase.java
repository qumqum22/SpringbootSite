package com.rehabilitation.demo;

import com.rehabilitation.demo.models.Phones;
import com.rehabilitation.demo.models.UserData;
import com.rehabilitation.demo.repository.PhonesRepository;
import com.rehabilitation.demo.repository.UserDataRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(UserDataRepository userDataRepository, PhonesRepository phonesRepository)
    {
        return args-> {
            UserData user1 = new UserData("Piotr", "Pierwszy",null,"inż.","ops",22,"Male","username", "password","abra@abra.pl");
            UserData user2 = new UserData("Anna", "Druga","https://cdn.wallpapersafari.com/95/5/3rRDsg.jpg","inż.",
                    "ops",22,"Male","username123","passowordpl", "mail@123");
        log.info("Preolading " + userDataRepository.save(user1));
        log.info("Preolading " + userDataRepository.save(user2));
        log.info("Preolading " + userDataRepository.save(new UserData("Michał", "Byczek",null,"dr",
                    "ops",22,"Male","username123","passowordpl", "mail@123")));
        log.info("Preolading " + userDataRepository.save(new UserData("Marian", "Doniczka","https://cdn.wallpapersafari.com/95/5/3rRDsg.jpg","mgr inż.",
                "ops",22,"Male","username123","passowordpl", "mail@123")));
        log.info("Preolading " + userDataRepository.save(new UserData("Krystyna", "Pewniak","https://cdn.wallpapersafari.com/95/5/3rRDsg.jpg","mgr inż.",
                "ops",22,"Male","username123","passowordpl", "mail@123")));
        log.info("Preolading " + userDataRepository.save(new UserData("Jan", "Jeste",null,"inż.",
                "ops",22,"Male","username123","passowordpl", "mail@123")));
        log.info("Preolading " + userDataRepository.save(new UserData("Tadeusz", "Cotr",null,"inż.",
                    "ops",22,"Male","username123","passowordpl", "mail@123")));
            log.info("Preolading " + userDataRepository.save(new UserData("Kinga", "Lepszy",null,null,
                    "ops",22,"Male","username123","passowordpl", "mail@123")));
        log.info("Preolading " + phonesRepository.save(new Phones("999999999", user1)));
        log.info("Preolading " + phonesRepository.save(new Phones("956478659", user1)));
        log.info("Preolading " + phonesRepository.save(new Phones("456478659", user1)));
        log.info("Preolading " + phonesRepository.save(new Phones("999999999", user1)));
        log.info("Preolading " + phonesRepository.save(new Phones("956478659", user2)));
        log.info("Preolading " + phonesRepository.save(new Phones("456478659", user2)));
        log.info("Preolading " + phonesRepository.save(new Phones("999999999", user2)));
        log.info("Preolading " + phonesRepository.save(new Phones("956478659", user2)));
        log.info("Preolading " + phonesRepository.save(new Phones("456478659", user2)));
        };
    }
}

