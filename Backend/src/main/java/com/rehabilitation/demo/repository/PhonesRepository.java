package com.rehabilitation.demo.repository;

import com.rehabilitation.demo.models.Phones;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhonesRepository extends JpaRepository<Phones, Long> {
}
