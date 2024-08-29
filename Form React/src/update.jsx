import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table, Modal, Form, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./update.css";

function Update() {
  const [forms, setForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Fetch all form details from the server
    axios
      .get("http://localhost:9090/Form/getAllDetails")
      .then((response) => setForms(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleShowModal = (form) => {
    setSelectedForm(form);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedForm(null);
    setErrors({});
  };

  const handleUpdate = () => {
    const validationErrors = validateForm(selectedForm);
    if (Object.keys(validationErrors).length === 0) {
      axios
        .put("http://localhost:9090/Form/updateform", selectedForm)
        .then((response) => {
          setForms(
            forms.map((f) => (f.id === selectedForm.id ? response.data : f))
          );
          handleCloseModal();
        })
        .catch((error) => console.log(error));
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const validateForm = (form) => {
    const errors = {};
    const phonePattern = /^[0-9]{10}$/; // Adjust pattern as needed
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.recruiterName)
      errors.recruiterName = "Recruiter Name is required";
    if (!form.consultantName)
      errors.consultantName = "Consultant Name is required";
    if (!form.allocatedStatus)
      errors.allocatedStatus = "Allocated Status is required";
    if (!form.status) errors.status = "Status is required";
    if (!form.turboCheck) errors.turboCheck = "Turbo Check is required";
    if (!form.priority) errors.priority = "Priority is required";
    if (!form.technology) errors.technology = "Technology is required";
    if (!form.organization) errors.organization = "Organization is required";
    if (!form.experience) errors.experience = "Experience is required";
    if (!form.location) errors.location = "Location is required";
    if (!form.relocation) errors.relocation = "Relocation is required";
    if (!form.modeOfStaying)
      errors.modeOfStaying = "Mode of Staying is required";
    if (!form.newOrExisting) errors.newOrExisting = "New/Existing is required";
    if (!form.sourcedBy) errors.sourcedBy = "Sourced By is required";
    if (!form.visaStatus) errors.visaStatus = "Visa Status is required";
    if (!form.marketingVisaStatus)
      errors.marketingVisaStatus = "Marketing Visa Status is required";
    if (!form.contactNumber)
      errors.contactNumber = "Contact Number is required";
    if (!phonePattern.test(form.contactNumber))
      errors.contactNumber = "Contact Number must be 10 digits";
    if (!form.emailId) errors.emailId = "Email ID is required";
    if (!emailPattern.test(form.emailId))
      errors.emailId = "Email ID is invalid";
    if (!form.originalDob) errors.originalDob = "Original DOB is required";
    if (!form.marketingDob) errors.marketingDob = "Marketing DOB is required";
    if (!form.whatsappNumber)
      errors.whatsappNumber = "Whatsapp Number is required";
    if (!phonePattern.test(form.whatsappNumber))
      errors.whatsappNumber = "Whatsapp Number must be 10 digits";
    if (!form.marketingStartDate)
      errors.marketingStartDate = "Marketing Start Date is required";
    if (!form.marketingEndDate)
      errors.marketingEndDate = "Marketing End Date is required";
    if (!form.comments) errors.comments = "Comments are required";

    return errors;
  };

  return (
    <>
      <h1 className="text-center my-4">Update Form Details</h1>
      <Table striped bordered hover responsive className="custom-table">
        <thead>
          <tr>
            <th>Recruiter Name</th>
            <th>Consultant Name</th>
            <th>Allocated Status</th>
            <th>Status</th>
            <th>Turbo Check</th>
            <th>Priority</th>
            <th>Technology</th>
            <th>Organization</th>
            <th>Experience</th>
            <th>Location</th>
            <th>Relocation</th>
            <th>Mode of Staying</th>
            <th>New/Existing</th>
            <th>Sourced By</th>
            <th>Visa Status</th>
            <th>Marketing Visa Status</th>
            <th>Contact Number</th>
            <th>Email ID</th>
            <th>Original DOB</th>
            <th>Marketing DOB</th>
            <th>Whatsapp Number</th>
            <th>Marketing Start Date</th>
            <th>Marketing End Date</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((form) => (
            <tr key={form.id}>
              <td>{form.recruiterName}</td>
              <td>{form.consultantName}</td>
              <td>{form.allocatedStatus}</td>
              <td>{form.status}</td>
              <td>{form.turboCheck}</td>
              <td>{form.priority}</td>
              <td>{form.technology}</td>
              <td>{form.organization}</td>
              <td>{form.experience}</td>
              <td>{form.location}</td>
              <td>{form.relocation}</td>
              <td>{form.modeOfStaying}</td>
              <td>{form.newOrExisting}</td>
              <td>{form.sourcedBy}</td>
              <td>{form.visaStatus}</td>
              <td>{form.marketingVisaStatus}</td>
              <td>{form.contactNumber}</td>
              <td>{form.emailId}</td>
              <td>{form.originalDob}</td>
              <td>{form.marketingDob}</td>
              <td>{form.whatsappNumber}</td>
              <td>{form.marketingStartDate}</td>
              <td>{form.marketingEndDate}</td>
              <td>{form.comments}</td>
              <td>
                <Button variant="primary" onClick={() => handleShowModal(form)}>
                  Update
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedForm && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update Form Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {Object.keys(errors).map((errorKey) => (
                <Alert key={errorKey} variant="danger">
                  {errors[errorKey]}
                </Alert>
              ))}
              <Form.Group controlId="formRecruiterName">
                <Form.Label>Recruiter Name</Form.Label>
                <Form.Control
                  type="text"
                  name="recruiterName"
                  value={selectedForm.recruiterName}
                  onChange={handleChange}
                  isInvalid={!!errors.recruiterName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.recruiterName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formConsultantName">
                <Form.Label>Consultant Name</Form.Label>
                <Form.Control
                  type="text"
                  name="consultantName"
                  value={selectedForm.consultantName}
                  onChange={handleChange}
                  isInvalid={!!errors.consultantName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.consultantName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formAllocatedStatus">
                <Form.Label>Allocated Status</Form.Label>
                <Form.Control
                  type="text"
                  name="allocatedStatus"
                  value={selectedForm.allocatedStatus}
                  onChange={handleChange}
                  isInvalid={!!errors.allocatedStatus}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.allocatedStatus}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formStatus">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  type="text"
                  name="status"
                  value={selectedForm.status}
                  onChange={handleChange}
                  isInvalid={!!errors.status}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.status}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formTurboCheck">
                <Form.Label>Turbo Check</Form.Label>
                <Form.Control
                  type="number"
                  name="turboCheck"
                  value={selectedForm.turboCheck}
                  onChange={handleChange}
                  isInvalid={!!errors.turboCheck}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.turboCheck}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formPriority">
                <Form.Label>Priority</Form.Label>
                <Form.Control
                  type="text"
                  name="priority"
                  value={selectedForm.priority}
                  onChange={handleChange}
                  isInvalid={!!errors.priority}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.priority}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formTechnology">
                <Form.Label>Technology</Form.Label>
                <Form.Control
                  type="text"
                  name="technology"
                  value={selectedForm.technology}
                  onChange={handleChange}
                  isInvalid={!!errors.technology}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.technology}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formOrganization">
                <Form.Label>Organization</Form.Label>
                <Form.Control
                  type="text"
                  name="organization"
                  value={selectedForm.organization}
                  onChange={handleChange}
                  isInvalid={!!errors.organization}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.organization}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formExperience">
                <Form.Label>Experience</Form.Label>
                <Form.Control
                  type="text"
                  name="experience"
                  value={selectedForm.experience}
                  onChange={handleChange}
                  isInvalid={!!errors.experience}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.experience}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  value={selectedForm.location}
                  onChange={handleChange}
                  isInvalid={!!errors.location}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.location}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formRelocation">
                <Form.Label>Relocation</Form.Label>
                <Form.Control
                  type="text"
                  name="relocation"
                  value={selectedForm.relocation}
                  onChange={handleChange}
                  isInvalid={!!errors.relocation}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.relocation}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formModeOfStaying">
                <Form.Label>Mode of Staying</Form.Label>
                <Form.Control
                  type="text"
                  name="modeOfStaying"
                  value={selectedForm.modeOfStaying}
                  onChange={handleChange}
                  isInvalid={!!errors.modeOfStaying}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.modeOfStaying}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formNewOrExisting">
                <Form.Label>New/Existing</Form.Label>
                <Form.Control
                  type="text"
                  name="newOrExisting"
                  value={selectedForm.newOrExisting}
                  onChange={handleChange}
                  isInvalid={!!errors.newOrExisting}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.newOrExisting}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formSourcedBy">
                <Form.Label>Sourced By</Form.Label>
                <Form.Control
                  type="text"
                  name="sourcedBy"
                  value={selectedForm.sourcedBy}
                  onChange={handleChange}
                  isInvalid={!!errors.sourcedBy}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.sourcedBy}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formVisaStatus">
                <Form.Label>Visa Status</Form.Label>
                <Form.Control
                  type="text"
                  name="visaStatus"
                  value={selectedForm.visaStatus}
                  onChange={handleChange}
                  isInvalid={!!errors.visaStatus}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.visaStatus}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formMarketingVisaStatus">
                <Form.Label>Marketing Visa Status</Form.Label>
                <Form.Control
                  type="text"
                  name="marketingVisaStatus"
                  value={selectedForm.marketingVisaStatus}
                  onChange={handleChange}
                  isInvalid={!!errors.marketingVisaStatus}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.marketingVisaStatus}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formContactNumber">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="text"
                  name="contactNumber"
                  value={selectedForm.contactNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.contactNumber}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.contactNumber}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formEmailId">
                <Form.Label>Email ID</Form.Label>
                <Form.Control
                  type="email"
                  name="emailId"
                  value={selectedForm.emailId}
                  onChange={handleChange}
                  isInvalid={!!errors.emailId}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.emailId}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formOriginalDob">
                <Form.Label>Original DOB</Form.Label>
                <Form.Control
                  type="date"
                  name="originalDob"
                  value={selectedForm.originalDob?.substring(0, 10)}
                  onChange={handleChange}
                  isInvalid={!!errors.originalDob}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.originalDob}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formMarketingDob">
                <Form.Label>Marketing DOB</Form.Label>
                <Form.Control
                  type="date"
                  name="marketingDob"
                  value={selectedForm.marketingDob?.substring(0, 10)}
                  onChange={handleChange}
                  isInvalid={!!errors.marketingDob}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.marketingDob}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formWhatsappNumber">
                <Form.Label>Whatsapp Number</Form.Label>
                <Form.Control
                  type="text"
                  name="whatsappNumber"
                  value={selectedForm.whatsappNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.whatsappNumber}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.whatsappNumber}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formMarketingStartDate">
                <Form.Label>Marketing Start Date</Form.Label>
                <Form.Control
                  type="date"
                  name="marketingStartDate"
                  value={selectedForm.marketingStartDate?.substring(0, 10)}
                  onChange={handleChange}
                  isInvalid={!!errors.marketingStartDate}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.marketingStartDate}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formMarketingEndDate">
                <Form.Label>Marketing End Date</Form.Label>
                <Form.Control
                  type="date"
                  name="marketingEndDate"
                  value={selectedForm.marketingEndDate?.substring(0, 10)}
                  onChange={handleChange}
                  isInvalid={!!errors.marketingEndDate}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.marketingEndDate}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formComments">
                <Form.Label>Comments</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="comments"
                  value={selectedForm.comments}
                  onChange={handleChange}
                  isInvalid={!!errors.comments}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.comments}
                </Form.Control.Feedback>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleUpdate}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default Update;
