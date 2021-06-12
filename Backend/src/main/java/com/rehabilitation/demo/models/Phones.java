package com.rehabilitation.demo.models;

import javax.persistence.*;

@Entity
public class Phones {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String phoneNumber;



    @ManyToOne
    @JoinColumn(name="user_id", referencedColumnName="id", nullable = false)
    private UserData userdata;

    public Phones(){

    }

    public Phones(String phoneNumber, UserData userdata) {
        this.phoneNumber = phoneNumber;
        this.userdata = userdata;
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

    public UserData getUserdata() {
        return userdata;
    }

}