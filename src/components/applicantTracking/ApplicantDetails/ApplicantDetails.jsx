import React, { useEffect, useState } from "react";

import EditApplicant from "../EditApplicant/EditApplicant";
import Modal from "../Modal/Modal";

import './ApplicantDetails.css'

//arrow function(component and destructuring props)
const ApplicantDetails = ({
  selectedApplicant,
  onCloseDetails,
  goBack,
  goNext,
  selectedApplicantIndex,
  applicants,
  setApplicants,
  onDelete,
}) => {
  
  const [isEditing, setIsEditing] = useState(false);

  const [editedApplicant, setEditedApplicant] = useState({
    name: "",
    status: "",
    jobPosition: "",
    email: "",
    phone: "",
    address: "",
    comments: "",
  });

  useEffect(() => {
    if (selectedApplicant) {
      setEditedApplicant({
        name: selectedApplicant.name || "",
        status: selectedApplicant.status || "",
        jobPosition: selectedApplicant.jobPosition || "",
        email: selectedApplicant.contactInformation.email || "",
        phone: selectedApplicant.contactInformation.phone || "",
        address: selectedApplicant.contactInformation.address || "",
        comments: selectedApplicant.comments || "",
      });
    }
  }, [selectedApplicant]);

  function handleExitDetails() {
    onCloseDetails();
  }

  const handleEditBtn = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
    onCloseDetails();

    const updatedApplicant = {
      ...selectedApplicant,
      ...editedApplicant,
    };

    const updatedApplicants = applicants.map((applicant) => {
      return applicant.id === selectedApplicant.id
        ? updatedApplicant
        : applicant;
    });

    setApplicants(updatedApplicants);

    console.log("Edited Applicant Data", editedApplicant);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);

    //reset edited data back to orgininal
    const originalApplicant = {
      name: selectedApplicant.name || "",
      status: selectedApplicant.status || "",
      jobPosition: selectedApplicant.jobPosition || "",
      email: selectedApplicant.contactInformation.email || "",
      phone: selectedApplicant.contactInformation.phone || "",
      address: selectedApplicant.contactInformation.address || "",
    };

    setEditedApplicant(originalApplicant);
  };

  //
  useEffect(() => {
    // alert("Cancel Applicant Editing", editedApplicant);
  }, [editedApplicant]);

  const handleChange = (e) => {
    setIsEditing(true);
    setEditedApplicant((prevDetails) => {
      return {
        ...prevDetails,
        [e.target.name]: e.target.value,
      };
    });
  };

  //show modal confirming delete
  const [showModal, setShowModal] = useState(false);

  const handleDeleteBtn = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    setShowModal(false);
    alert(`${selectedApplicant.name}'s details deleted successfully`);
    onDelete(selectedApplicant.id);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    alert(
      `Deleting ${selectedApplicant.name}'s details cancelled successfully`
    );
  };

  //condition
  return selectedApplicant ? (
    <div className="applicant-details">

      {!showModal && (
        <>
          {selectedApplicantIndex > 0 && (
            <button onClick={goBack} className="prev-btn">
              Previous
            </button>
          )}

          {isEditing === false && (

            <div className="applicant-details-content">
              <h2>{selectedApplicant.name}</h2>

              <button className="exit-button" onClick={handleExitDetails}>
                X
              </button>

              <p>
                <span className="other-details">Status:</span>{" "}
                {selectedApplicant.status}
              </p>

              <p>
                <span className="other-details">jobPosition:</span>{" "}
                {selectedApplicant.jobPosition}
              </p>

              <p>
                <span className="other-details">Application Date:</span>{" "}
                {selectedApplicant.applicationDate}
              </p>

              <p>
                <span className="other-details">Email:</span>{" "}
                {selectedApplicant.contactInformation.email}
              </p>

              <p>
                <span className="other-details">Phone:</span>{" "}
                {selectedApplicant.contactInformation.phone}
              </p>

              <p>
                <span className="other-details">Address:</span>{" "}
                {selectedApplicant.contactInformation.address}
              </p>

              <p>
                <span className="other-details">Resume:</span>{" "}
                {selectedApplicant.resume}
              </p>

              <p>
                <span className="other-details">Cover Letter:</span>{" "}
                {selectedApplicant.coverLetter}
              </p>

              <textarea
                className="readOnly-textarea"
                value={selectedApplicant.comments}
                readOnly
              ></textarea>

              <div className="details-btns">
                <button onClick={handleEditBtn} className="edit-btn">
                  Edit
                </button>
                <button onClick={handleDeleteBtn} className="delete-btn">
                  Delete
                </button>
              </div>

            </div>
          )}

          {/* Is Editing Applicant */}
          {isEditing && (
            <EditApplicant
              editedApplicant={editedApplicant}
              handleChange={handleChange}
              handleCancelEdit={handleCancelEdit}
              handleSaveEdit={handleSaveEdit}
            />
          )}

          {selectedApplicantIndex < applicants.length - 1 && (
            <button onClick={goNext} className="next-btn">
              Next
            </button>
          )}
        </>
      )}

      {/* Modal Confirmation */}
      {showModal && (
        <Modal
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
          message={`Are you sure you want to delete ${selectedApplicant.name}`}
        />
      )}
      
    </div>
  ) : null;
};

export default ApplicantDetails;
