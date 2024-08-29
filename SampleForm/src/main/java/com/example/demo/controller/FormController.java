package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Form;
import com.example.demo.repo.repo;
import com.example.demo.sercice.FormServiceIMP;

@RestController
@RequestMapping("/Form")
@CrossOrigin("http://localhost:5173/")
public class FormController {
	
	
	@Autowired
	private repo Repo;
	
	@Autowired
	private FormServiceIMP formService;
	
	@PostMapping("/register")
	public ResponseEntity<Form> addForm(@RequestBody Form form){
		Form addForm=formService.addForm(form);
		return new ResponseEntity<>(addForm,HttpStatus.OK);
		
	}
	
	@GetMapping("/getAllDetails")
	public ResponseEntity<List<Form>> getAllDetails(){
		
		List<Form> allDetails = formService.getAllDetails();
		return new ResponseEntity<>(allDetails,HttpStatus.OK);
	}
	
	@PutMapping("/updateform")
	public ResponseEntity<Form> updateForm(@RequestBody Form form){
		
		Form updateForm = formService.updateForm(form);
		return new ResponseEntity<>(updateForm,HttpStatus.OK);
		
	}

}
