package com.example.demo.sercice;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Form;

@Service
public interface FormService {

	public Form addForm(Form form);
	public List<Form> getAllDetails();
	public Form updateForm(Form form);
}
