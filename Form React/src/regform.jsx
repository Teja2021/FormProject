import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./regfoem.css";

function Regform() {
  const [formData, setFormData] = useState({
    recruiterName: "",
    consultantName: "",
    allocatedStatus: "",
    status: "",
    turboCheck: "",
    priority: "",
    technology: "",
    organization: "",
    experience: "",
    location: "",
    relocation: "",
    modeOfStaying: "",
    newOrExisting: "",
    sourcedBy: "",
    visaStatus: "",
    marketingVisaStatus: "",
    contactNumber: "",
    emailId: "",
    originalDob: "",
    marketingDob: "",
    whatsappNumber: "",
    marketingStartDate: "",
    marketingEndDate: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required.`;
      }
    });

    if (formData.emailId && !validateEmail(formData.emailId)) {
      newErrors.emailId = "Invalid Email format.";
    }

    if (
      formData.contactNumber &&
      !validatePhoneNumber(formData.contactNumber)
    ) {
      newErrors.contactNumber = "Invalid Phone Number format.";
    }

    if (
      formData.whatsappNumber &&
      !validatePhoneNumber(formData.whatsappNumber)
    ) {
      newErrors.whatsappNumber = "Invalid WhatsApp Number format.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        // Sending data to the backend
        const response = await fetch("http://localhost:9090/Form/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Success:", data);
        alert("Form submitted successfully!");

        // Clear form after successful submission
        setFormData({
          recruiterName: "",
          consultantName: "",
          allocatedStatus: "",
          status: "",
          turboCheck: "",
          priority: "",
          technology: "",
          organization: "",
          experience: "",
          location: "",
          relocation: "",
          modeOfStaying: "",
          newOrExisting: "",
          sourcedBy: "",
          visaStatus: "",
          marketingVisaStatus: "",
          contactNumber: "",
          emailId: "",
          originalDob: "",
          marketingDob: "",
          whatsappNumber: "",
          marketingStartDate: "",
          marketingEndDate: "",
          comments: "",
        });
        setErrors({});
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to submit form.");
      }
    }
  };

  return (
    <div className="container mt-4">
      <div
        className="shadow p-3 rounded"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <h2 className="text-center mb-4">Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-3 mb-2">
              <label htmlFor="recruiterName" className="form-label">
                Recruiter Name
              </label>
              <input
                type="text"
                className={`form-control form-control-sm ${
                  errors.recruiterName ? "is-invalid" : ""
                }`}
                id="recruiterName"
                name="recruiterName"
                value={formData.recruiterName}
                onChange={handleChange}
              />
              {errors.recruiterName && (
                <div className="invalid-feedback">{errors.recruiterName}</div>
              )}
            </div>
            <div className="col-md-3 mb-2">
              <label htmlFor="consultantName" className="form-label">
                Consultant Name
              </label>
              <input
                type="text"
                className={`form-control form-control-sm ${
                  errors.consultantName ? "is-invalid" : ""
                }`}
                id="consultantName"
                name="consultantName"
                value={formData.consultantName}
                onChange={handleChange}
              />
              {errors.consultantName && (
                <div className="invalid-feedback">{errors.consultantName}</div>
              )}
            </div>
            <div className="col-md-3 mb-2">
              <label htmlFor="allocatedStatus" className="form-label">
                Allocated Status
              </label>
              <input
                type="text"
                className={`form-control form-control-sm ${
                  errors.allocatedStatus ? "is-invalid" : ""
                }`}
                id="allocatedStatus"
                name="allocatedStatus"
                value={formData.allocatedStatus}
                onChange={handleChange}
              />
              {errors.allocatedStatus && (
                <div className="invalid-feedback">{errors.allocatedStatus}</div>
              )}
            </div>
            <div className="col-md-3 mb-2">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <input
                type="text"
                className={`form-control form-control-sm ${
                  errors.status ? "is-invalid" : ""
                }`}
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              />
              {errors.status && (
                <div className="invalid-feedback">{errors.status}</div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 mb-2">
              <label htmlFor="turboCheck" className="form-label">
                Turbo Check
              </label>
              <input
                type="number"
                className={`form-control form-control-sm ${
                  errors.turboCheck ? "is-invalid" : ""
                }`}
                id="turboCheck"
                name="turboCheck"
                value={formData.turboCheck}
                onChange={handleChange}
              />
              {errors.turboCheck && (
                <div className="invalid-feedback">{errors.turboCheck}</div>
              )}
            </div>
            <div className="col-md-3 mb-2">
              <label htmlFor="priority" className="form-label">
                Priority
              </label>
              <input
                type="text"
                className={`form-control form-control-sm ${
                  errors.priority ? "is-invalid" : ""
                }`}
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              />
              {errors.priority && (
                <div className="invalid-feedback">{errors.priority}</div>
              )}
            </div>
            <div className="col-md-3 mb-2">
              <label htmlFor="technology" className="form-label">
                Technology
              </label>
              <input
                type="text"
                className={`form-control form-control-sm ${
                  errors.technology ? "is-invalid" : ""
                }`}
                id="technology"
                name="technology"
                value={formData.technology}
                onChange={handleChange}
              />
              {errors.technology && (
                <div className="invalid-feedback">{errors.technology}</div>
              )}
            </div>
            <div className="col-md-3 mb-2">
              <label htmlFor="organization" className="form-label">
                Organization
              </label>
              <input
                type="text"
                className={`form-control form-control-sm ${
                  errors.organization ? "is-invalid" : ""
                }`}
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
              />
              {errors.organization && (
                <div className="invalid-feedback">{errors.organization}</div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 mb-2">
              <label htmlFor="experience" className="form-label">
                Experience (in years)
              </label>
              <input
                type="number"
                className={`form-control form-control-sm ${
                  errors.experience ? "is-invalid" : ""
                }`}
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              />
              {errors.experience && (
                <div className="invalid-feedback">{errors.experience}</div>
              )}
            </div>
            <div className="col-md-3 mb-2">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                className={`form-control form-control-sm ${
                  errors.location ? "is-invalid" : ""
                }`}
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
              {errors.location && (
                <div className="invalid-feedback">{errors.location}</div>
              )}
            </div>
            <div className="col-md-3 mb-2">
              <label htmlFor="relocation" className="form-label">
                Relocation
              </label>
              <input
                type="text"
                className={`form-control form-control-sm ${
                  errors.relocation ? "is-invalid" : ""
                }`}
                id="relocation"
                name="relocation"
                value={formData.relocation}
                onChange={handleChange}
              />
              {errors.relocation && (
                <div className="invalid-feedback">{errors.relocation}</div>
              )}
            </div>
            <div className="col-md-3 mb-2">
              <label htmlFor="modeOfStaying" className="form-label">
                Mode of Staying
              </label>
              <input
                type="text"
                className={`form-control form-control-sm ${
                  errors.modeOfStaying ? "is-invalid" : ""
                }`}
                id="modeOfStaying"
                name="modeOfStaying"
                value={formData.modeOfStaying}
                onChange={handleChange}
              />
              {errors.modeOfStaying && (
                <div className="invalid-feedback">{errors.modeOfStaying}</div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 mb-2">
              <label htmlFor="newOrExisting" className="form-label">
                New or Existing
              </label>
              <input
                type="text"
                className={`form-control form-control-sm ${
                  errors.newOrExisting ? "is-invalid" : ""
                }`}
                id="newOrExisting"
                name="newOrExisting"
                value={formData.newOrExisting}
                onChange={handleChange}
              />
              {errors.newOrExisting && (
                <div className="invalid-feedback">{errors.newOrExisting}</div>
              )}
            </div>
            <div className="col-md-3 mb-2">
              <label htmlFor="sourcedBy" className="form-label">
                Sourced By
              </label>
              <input
                type="text"
                className={`form-control form-control-sm ${
                  errors.sourcedBy ? "is-invalid" : ""
                }`}
                id="sourcedBy"
                name="sourcedBy"
                value={formData.sourcedBy}
                onChange={handleChange}
              />
              {errors.sourcedBy && (
                <div className="invalid-feedback">{errors.sourcedBy}</div>
              )}
            </div>
            <div className="col-md-3 mb-2">
              <label htmlFor="visaStatus" className="form-label">
                Visa Status
              </label>
              <input
                type="text"
                className={`form-control form-control-sm ${
                  errors.visaStatus ? "is-invalid" : ""
                }`}
                id="visaStatus"
                name="visaStatus"
                value={formData.visaStatus}
                onChange={handleChange}
              />
              {errors.visaStatus && (
                <div className="invalid-feedback">{errors.visaStatus}</div>
              )}
            </div>
            <div className="col-md-3 mb-2">
              <label htmlFor="marketingVisaStatus" className="form-label">
                Marketing Visa Status
              </label>
              <input
                type="text"
                className={`form-control form-control-sm ${
                  errors.marketingVisaStatus ? "is-invalid" : ""
                }`}
                id="marketingVisaStatus"
                name="marketingVisaStatus"
                value={formData.marketingVisaStatus}
                onChange={handleChange}
              />
              {errors.marketingVisaStatus && (
                <div className="invalid-feedback">
                  {errors.marketingVisaStatus}
                </div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 mb-2">
              <label htmlFor="contactNumber" className="form-label">
                Contact Number
              </label>
              <input
                type="text"
                className={`form-control form-control-sm ${
                  errors.contactNumber ? "is-invalid" : ""
                }`}
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
              {errors.contactNumber && (
                <div className="invalid-feedback">{errors.contactNumber}</div>
              )}
            </div>
            <div className="col-md-3 mb-2">
              <label htmlFor="emailId" className="form-label">
                Email ID
              </label>
              <input
                type="email"
                className={`form-control form-control-sm ${
                  errors.emailId ? "is-invalid" : ""
                }`}
                id="emailId"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
              />
              {errors.emailId && (
                <div className="invalid-feedback">{errors.emailId}</div>
              )}
            </div>
            <div className="col-md-3 mb-2">
              <label htmlFor="originalDob" className="form-label">
                Original DOB
              </label>
              <input
                type="date"
                className={`form-control form-control-sm ${
                  errors.originalDob ? "is-invalid" : ""
                }`}
                id="originalDob"
                name="originalDob"
                value={formData.originalDob}
                onChange={handleChange}
              />
              {errors.originalDob && (
                <div className="invalid-feedback">{errors.originalDob}</div>
              )}
            </div>
            <div className="col-md-3 mb-2">
              <label htmlFor="marketingDob" className="form-label">
                Marketing DOB
              </label>
              <input
                type="date"
                className={`form-control form-control-sm ${
                  errors.marketingDob ? "is-invalid" : ""
                }`}
                id="marketingDob"
                name="marketingDob"
                value={formData.marketingDob}
                onChange={handleChange}
              />
              {errors.marketingDob && (
                <div className="invalid-feedback">{errors.marketingDob}</div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 mb-2">
              <label htmlFor="whatsappNumber" className="form-label">
                WhatsApp Number
              </label>
              <input
                type="text"
                className={`form-control form-control-sm ${
                  errors.whatsappNumber ? "is-invalid" : ""
                }`}
                id="whatsappNumber"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
              />
              {errors.whatsappNumber && (
                <div className="invalid-feedback">{errors.whatsappNumber}</div>
              )}
            </div>
            <div className="col-md-3 mb-2">
              <label htmlFor="marketingStartDate" className="form-label">
                Marketing Start Date
              </label>
              <input
                type="date"
                className={`form-control form-control-sm ${
                  errors.marketingStartDate ? "is-invalid" : ""
                }`}
                id="marketingStartDate"
                name="marketingStartDate"
                value={formData.marketingStartDate}
                onChange={handleChange}
              />
              {errors.marketingStartDate && (
                <div className="invalid-feedback">
                  {errors.marketingStartDate}
                </div>
              )}
            </div>
            <div className="col-md-3 mb-2">
              <label htmlFor="marketingEndDate" className="form-label">
                Marketing End Date
              </label>
              <input
                type="date"
                className={`form-control form-control-sm ${
                  errors.marketingEndDate ? "is-invalid" : ""
                }`}
                id="marketingEndDate"
                name="marketingEndDate"
                value={formData.marketingEndDate}
                onChange={handleChange}
              />
              {errors.marketingEndDate && (
                <div className="invalid-feedback">
                  {errors.marketingEndDate}
                </div>
              )}
            </div>
            <div className="col-md-3 mb-2">
              <label htmlFor="comments" className="form-label">
                Comments
              </label>
              <textarea
                className={`form-control form-control-sm ${
                  errors.comments ? "is-invalid" : ""
                }`}
                id="comments"
                name="comments"
                rows="3"
                value={formData.comments}
                onChange={handleChange}
              ></textarea>
              {errors.comments && (
                <div className="invalid-feedback">{errors.comments}</div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-sm d-block mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Regform;
