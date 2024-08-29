package com.example.demo.sercice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Form;
import com.example.demo.exception.FormExc;
import com.example.demo.repo.repo;

@Service
public class FormServiceIMP implements FormService {

	@Autowired
	repo Repo;
	
	@Override
	public Form addForm(Form form) {
		Optional<Form> findByid=Repo.findById(form.getId());
		if(findByid.isPresent()) {
			throw new FormExc("Form Already exists with this id");
		}
		else {
			Form forms=Repo.save(form);
			return forms;
		}
		
		
	}

	@Override
	public List<Form> getAllDetails() {
		// TODO Auto-generated method stub
		List<Form> all = Repo.findAll();

		return all;
	}

	@Override
	public Form updateForm(Form form) {
		Optional<Form> findById = Repo.findById(form.getId());
		if (findById.isPresent()) {
			Form form2 = findById.get();
			form2.setRecruiterName(form.getRecruiterName());
			form2.setConsultantName(form.getConsultantName());
			form2.setAllocatedStatus(form.getAllocatedStatus());
			form2.setStatus(form.getStatus());
			form2.setTurboCheck(form.getTurboCheck());
			form2.setPriority(form.getPriority());
			form2.setTechnology(form.getTechnology());
			form2.setOrganization(form.getOrganization());
			form2.setExperience(form.getExperience());
			form2.setLocation(form.getLocation());
			form2.setRelocation(form.getRelocation());
			form2.setModeOfStaying(form.getModeOfStaying());
			form2.setNewOrExisting(form.getNewOrExisting());
			form2.setSourcedBy(form.getSourcedBy());
			form2.setVisaStatus(form.getVisaStatus());
			form2.setMarketingVisaStatus(form.getMarketingVisaStatus());
			form2.setContactNumber(form.getContactNumber());
			form2.setEmailId(form.getEmailId());
			form2.setOriginalDob(form.getOriginalDob());
			form2.setMarketingDob(form.getMarketingDob());
			form2.setWhatsappNumber(form.getWhatsappNumber());
			form2.setMarketingStartDate(form.getMarketingStartDate());
			form2.setMarketingEndDate(form.getMarketingEndDate());
			form2.setComments(form.getComments());
			return Repo.save(form2);
		} else {
			throw new RuntimeException("Form with ID " + form.getId() + " not found");
		}
	}


}
