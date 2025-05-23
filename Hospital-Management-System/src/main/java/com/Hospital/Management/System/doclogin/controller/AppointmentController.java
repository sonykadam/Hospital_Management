package com.Hospital.Management.System.doclogin.controller;

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

import com.Hospital.Management.System.doclogin.entity.Appointment;
import com.Hospital.Management.System.doclogin.entity.Medicine;
import com.Hospital.Management.System.doclogin.repository.AppointmentsRepository;
import com.Hospital.Management.System.entity.Patient;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/v2/appointments")
public class AppointmentController {
	
	
	
	AppointmentsRepository appointmentsRepository;
	public AppointmentController (AppointmentsRepository appointmentsRepository) {
		super();
		this.appointmentsRepository = appointmentsRepository;
		
	}
	@PostMapping
	public Appointment createAppointment(@RequestBody Appointment appointment) {
		return appointmentsRepository.save(appointment);
	}
	
	@GetMapping
	public List<Appointment> getAllAppointments(){
		
		return appointmentsRepository.findAll();
	}
	
	@GetMapping("/appointments/{id}")
	public ResponseEntity<Appointment> getAppointmentById(@PathVariable long id) throws AttributeNotFoundException{
		Appointment appointment=appointmentsRepository.findById(id).orElseThrow(()->new AttributeNotFoundException("Appointment not found with id:"+id));
		return ResponseEntity.ok(appointment);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable long id) throws AttributeNotFoundException{
		Appointment appointment=appointmentsRepository.findById(id).orElseThrow(()->new AttributeNotFoundException("Appointment not found with id:"+id));
		
		appointmentsRepository.delete(appointment);
		
		Map<String, Boolean> response=new HashMap<String, Boolean>();
		response.put("Delete", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}   
