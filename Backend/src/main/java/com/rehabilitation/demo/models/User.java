package com.rehabilitation.demo.models;


import javax.persistence.*;
import java.util.Set;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    //@Column(name="name")
    private String name;
    //@Column(name="lastname")
    private String surname;
    //@Column(name="profileImg")
    private String profileImage;
    //@Column(name="title")
    private String title;
    //@Column(name="description")
    private String description;
   // @Column(name="age")
    private Integer age;
    //@Column(name="gender")
    private String gender;
    //@Column(name="login")
    private String Login;
   // @Column(name="password")
    private String Password;
    //@Column(name="email")
    private String Email;

    @OneToMany(mappedBy = "user")
    private Set<Phones> phones;

    @OneToMany(mappedBy = "user")
    private Set<ExternalContacts> externalContacts;

    @OneToMany(mappedBy = "user")
    private Set<Address> address;

    @OneToMany(mappedBy = "user")
    private Set<UserRights> userRights;

    @OneToMany(mappedBy = "user")
    private Set<Videos> videos;

    //@ManyToMany
    //@JoinTable(
    //        name = "subscribes_id",
    //        joinColumns = @JoinColumn(name = "student_id"),
    //        inverseJoinColumns = @JoinColumn(name = "subscribe_id"))
    //Set<Subscribes> subscribes_id;

    public User()
    {

    }

    public User(String name, String surname,String profileImage, String title,
                String description, Integer age, String gender, String login,
                String password, String email) {
        this.name = name;
        this.surname = surname;
        this.profileImage = profileImage;
        this.title = title;
        this.description = description;
        this.age = age;
        this.gender = gender;
        Login = login;
        Password = password;
        Email = email;
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
        return Login;
    }

    public void setLogin(String login) {
        Login = login;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }
}