package com.rehabilitation.demo.models;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Subscribes {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    private Long subscriber;
    private Long subscribed;

    public Long getSubscriber() {
        return subscriber;
    }

    public void setSubscriber(Long subscriber) {
        this.subscriber = subscriber;
    }

    public Long getSubscribed() {
        return subscribed;
    }

    public void setSubscribed(Long subscribed) {
        this.subscribed = subscribed;
    }

    //@ManyToMany(mappedBy = "addedSubscribers")
    //Set<User> subscriber_id;


    public Subscribes()
    {

    }

    public Subscribes(Long subscriber, Long subscribed) {
        this.subscriber = subscriber;
        this.subscribed = subscribed;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

}