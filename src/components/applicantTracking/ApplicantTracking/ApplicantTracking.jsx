import React, {useState} from "react";

import ApplicantsList from "../ApplicantsList/ApplicantsList";
import applicantsList from "../../../mockData/applicantsList";
import Nav from "../../dashboard/Nav/Nav";
import ApplicantDetails from "../ApplicantDetails/ApplicantDetails";
import FilterContainer from "../FilterContainer/FilterContainer";
import Footer from "../../footer/Footer";

import './ApplicantTracking.css'

const ApplicantTracking = () => {
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const [filterCriteria, setFilterCriteria] = useState({
    jobPosition: "",
    applicationDate: "",
    status: "",
  });

  //navigation
  const [applicants, setApplicants] = useState(applicantsList)
  const [selectedApplicantIndex, setSelectedApplicantIndex] = useState(0)

  const goBack = () => {
    setSelectedApplicantIndex((prevIndex) => {
        return prevIndex > 0 ? prevIndex - 1 : prevIndex;
    })

    setSelectedApplicant(applicants[selectedApplicantIndex - 1])
  }

  const goNext = () => {
    setSelectedApplicantIndex((prevIndex) => {
      return (
        prevIndex < applicants.length - 1 ? prevIndex + 1 : prevIndex
      )
    })

    setSelectedApplicant(applicants[selectedApplicantIndex + 1])
  }

  //Applicant click
  const handleApplicantClick = (applicant) => {
    setSelectedApplicant(applicant);
  };

  //filter applicants
  const handleFilterChange = (newFilter) => {
    setFilterCriteria((prevFilterCriteria) => {
      return {
        ...prevFilterCriteria,
        ...newFilter,
      };
    });
  };

  //exit selected applicant
  const handleExitDetails = () => {
    setSelectedApplicant(null);
  };

  const filteredApplicantsData = applicantsList.filter((applicant)  => {
    
    const jobPositionFilter = filterCriteria.jobPosition.toLowerCase()
    const applicationDateFilter = filterCriteria.applicationDate
    const statusFilter = filterCriteria.status.toLowerCase()

    return (
      (jobPositionFilter === '' || applicant.jobPosition.toLowerCase().includes(jobPositionFilter)) &&
      (applicationDateFilter === '' || applicant.applicationDate.includes(applicationDateFilter)) &&
      (statusFilter === '' || applicant.status.toLowerCase().includes(statusFilter))
    )

  })

  const applicantsData = filteredApplicantsData.map((applicant) => (
    <ApplicantsList
      key={applicant.id}
      applicant={applicant}
      handleApplicantClick={handleApplicantClick}
    />
  ));

  //Applicant Delete(remember this changes state hence update it) 
  const handleApplicantDelete = (applicantId) => {
    const updatedApplicants = applicants.filter((applicant) => {
      return applicant.id !== applicantId
    })

    setApplicants(updatedApplicants)
    setSelectedApplicant(null)
  }

  return (
    <div className="applicants-information">
      <Nav />

      <FilterContainer 
        onFilterChange={handleFilterChange} 
      />

      <div className="all-applicants">
          {applicantsData}
      </div>

      <ApplicantDetails
        selectedApplicant={selectedApplicant}
        onCloseDetails={handleExitDetails}
        goBack={goBack}
        goNext={goNext}
        selectedApplicantIndex={selectedApplicantIndex}
        applicants={applicants}
        setApplicants={setApplicants}
        onDelete={handleApplicantDelete}
      />
      
      <Footer />

    </div>
  );
};

export default ApplicantTracking;
