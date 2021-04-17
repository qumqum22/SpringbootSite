package com.rehabilitation.demo.models;

import javax.persistence.*;

@Entity
public class ExternalContacts {


    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String link;

    @ManyToOne
//    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public ExternalContacts(){

    }

    public ExternalContacts(String link) {
        this.link = link;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}
