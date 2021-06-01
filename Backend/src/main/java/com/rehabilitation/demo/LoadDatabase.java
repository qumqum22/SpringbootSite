package com.rehabilitation.demo;

import com.rehabilitation.demo.models.UserData;
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
    CommandLineRunner initDatabase(UserDataRepository repository)
    {
        return args-> {
        log.info("Preolading " + repository.save(new UserData("Piotr", "Pierwszy","url","inż.",
                "ops",22,"Male","username", "password","abra@abra.pl")));
        log.info("Preolading " + repository.save(new UserData("Anna", "Druga","url","inż.",
                "ops",22,"Male","username123","passowordpl", "mail@123")));
        };
    }
}

