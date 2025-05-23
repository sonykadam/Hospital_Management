package com.Hospital.Management.System.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Hospital.Management.System.entity.Patient;
import com.Hospital.Management.System.repository.PatientRepository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/patients")
public class PatientController {
	
	private PatientRepository patientRepository;

	public PatientController(PatientRepository patientRepository) {
		super();
		this.patientRepository = patientRepository;
	}
    
	@PostMapping
	public Patient createPatient( @RequestBody Patient patient){
		
		return patientRepository.save(patient);
	}
	
	@GetMapping
	public List<Patient>getAllPatient(){
		
		return patientRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Patient> getPatientById(@PathVariable long id) throws AttributeNotFoundException{
		Patient patient=patientRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Patient not found with id:" +id));
		return ResponseEntity.ok(patient);
		
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String, Boolean>>deletePatient(@PathVariable long id) throws AttributeNotFoundException{
		Patient patient=patientRepository.findById(id).orElseThrow(()->new AttributeNotFoundException("Patient not found with id:"+id));
		
		patientRepository.delete(patient);
		
		Map<String, Boolean>response=new HashMap<String, Boolean>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Patient> updataPatientById( @PathVariable long id,@RequestBody Patient patientDetails) throws AttributeNotFoundException{
	
	Patient patient=patientRepository.findById(id).orElseThrow(()->new AttributeNotFoundException("Patient not found with id:"+id));
	
	patient.setAge(patientDetails.getAge());
	patient.setName(patientDetails.getName());
	patient.setBlood(patientDetails.getBlood());
	patient.setDose(patientDetails.getDose());
	patient.setDisease(patientDetails.getDisease());
	patient.setFees(patientDetails.getFees());
	patient.setPrescription(patientDetails.getPrescription());
	patient.setEmergency(patientDetails.getEmergency());
	
	Patient savedPatient=patientRepository.save(patient);
	return ResponseEntity.ok(savedPatient);
	
	
	}
	
	}


