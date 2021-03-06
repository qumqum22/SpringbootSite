package com.rehabilitation.demo.models;

import javax.persistence.*;

@Entity
public class Phones {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String phoneNumber;

    @ManyToOne
//    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public Phones(){

    }

    public Phones(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }


}
