package com.rehabilitation.demo.controllers;

import com.rehabilitation.demo.repository.VideosRepository;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class VideosController {

    private final VideosRepository repository;

    public VideosController(VideosRepository repository) {
        this.repository = repository;
    }
}
