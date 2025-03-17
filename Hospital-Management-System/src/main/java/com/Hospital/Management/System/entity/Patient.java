package com.Hospital.Management.System.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="patients")
public class Patient {
    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="first_name")
	private String name;
	
	@Column(name="age")
	private String age;
	
	@Column(name="blood_group")
	private String blood;
	
	@Column(name="prescription")
	private String prescription;
	
	@Column(name="dose")
	private String dose;
	
	@Column(name="disease")
	private String disease;
	
	@Column(name="fees")
	private String fees;
	
	@Column(name="emergency")
	private String emergency;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getBlood() {
		return blood;
	}

	public void setBlood(String blood) {
		this.blood = blood;
	}

	public String getPrescription() {
		return prescription;
	}

	public void setPrescription(String prescription) {
		this.prescription = prescription;
	}

	public String getDose() {
		return dose;
	}

	public void setDose(String dose) {
		this.dose = dose;
	}
	
	public String getDisease() {
		return disease;
	}
	
	public void setDisease(String disease) {
		this.disease= disease;
	}

	public String getFees() {
		return fees;
	}

	public void setFees(String fees) {
		this.fees = fees;
	}

	public String getEmergency() {
		return emergency;
	}

	public void setEmergency(String emergency) {
		this.emergency = emergency;
	}

	public Patient() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Patient(long id, String name, String age, String blood, String prescription, String dose, String disease, String fees,
			String emergency) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.blood = blood;
		this.prescription = prescription;
		this.dose = dose;
		this.disease = disease;
		this.fees = fees;
		this.emergency = emergency;
	}
}
	
