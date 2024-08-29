package com.example.demo.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Form;


@Repository
@EnableJpaRepositories
public interface repo extends JpaRepository<Form,Long>{

	Optional<Form> findById(long id);
}
