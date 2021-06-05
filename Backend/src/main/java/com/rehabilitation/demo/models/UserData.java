package com.rehabilitation.demo.models;

import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;
import java.util.Set;

@Entity
public class UserData {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    private String name;
    private String surname;
    @Value(value = "${profileImage:https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg}")
    private String profileImage;
    private String title;
    private String description;
    private Integer age;
    private String gender;
    private String login;
    private String password;
    private String email;


    @OneToMany(mappedBy = "userdata")
    private Set<Phones> phones;



    @OneToMany(mappedBy = "userdata")
    private Set<ExternalContacts> externalContacts;

    @OneToMany(mappedBy = "userdata")
    private Set<Address> address;

    @OneToMany(mappedBy = "userdata")
    private Set<UserRights> userRights;

    @OneToMany(mappedBy = "userdata")
    private Set<Videos> videos;


    public UserData()
    {

    }

    public UserData(String name, String surname, String profileImage, String title,
                    String description, Integer age, String gender, String login,
                    String password, String email) {
        this.name = name;
        this.surname = surname;
        this.profileImage = profileImage;
        this.title = title;
        this.description = description;
        this.age = age;
        this.gender = gender;
        this.login = login;
        this.password = password;
        this.email = email;
    }

    public void setPhones(Set<Phones> phones) {
        this.phones = phones;
    }

    public void addPhone(Phones phone) {
        this.phones.add(phone);
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getProfileImage() {
        return profileImage;
    }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }

    public String getTitle() { return title; }

    public void setTitle(String title) { this.title = title; }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}