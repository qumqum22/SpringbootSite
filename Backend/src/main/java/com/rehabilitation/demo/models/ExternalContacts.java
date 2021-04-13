package com.rehabilitation.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ExternalContacts {


    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String link;

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
