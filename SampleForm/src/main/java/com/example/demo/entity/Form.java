package com.example.demo.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Form {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "USER_ID")
    private long id;

    @Column(name = "RECRUITER_NAME")
    private String recruiterName;

    @Column(name = "CONSULTANT_NAME")
    private String consultantName;

    @Column(name = "ALLOCATED_STATUS")
    private String allocatedStatus;

    @Column(name = "STATUS")
    private String status;

    @Column(name = "TURBO_CHECK")
    private Integer turboCheck;

    @Column(name = "PRIORITY")
    private String priority;

    @Column(name = "TECHNOLOGY")
    private String technology;

    @Column(name = "ORGANIZATION")
    private String organization;

    //    Check if we need to change the datatype to string (Ex: if input is 8+)
    @Column(name = "EXPERIENCE")
    private String experience;

    @Column(name = "LOCATION")
    private String location;

    @Column(name = "RELOCATION")
    private String relocation;

    @Column(name = "MODE_OF_STAYING")
    private String modeOfStaying;

    //Need to change the name into more meaningful
    @Column(name = "NEW_OR_EXISTING")
    private String newOrExisting;

    @Column(name = "SOURCED_BY")
    private String sourcedBy;

    @Column(name = "VISA_STATUS")
    private String visaStatus;

    @Column(name = "MARKETING_VISA_STATUS")
    private String marketingVisaStatus;

    @Column(name = "CONTACT_NUMBER")
    private String contactNumber;

    @Column(name = "EMAIL_ID")
    private String emailId;

    @Column(name = "ORIGINAL_DOB")
    private LocalDate originalDob;

    @Column(name = "MARKETING_DOB")
    private LocalDate marketingDob;

    @Column(name = "WHATSAPP_NUMBER")
    private String whatsappNumber;

    @Column(name = "MARKETING_START_DATE")
    private LocalDate marketingStartDate;

    @Column(name = "MARKETING_END_DATE")
    private LocalDate marketingEndDate;

    @Column(name = "COMMENTS")
    private String comments;

}
