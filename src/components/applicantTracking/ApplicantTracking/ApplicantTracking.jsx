import React, {useState, Suspense } from "react";

import { Await } from "react-router-dom";

import ApplicantsList from "../ApplicantsList/ApplicantsList";
// import applicantsList from "../../../mockData/applicantsList"; //To be removed later and add the prop(applcants) 
import ApplicantDetails from "../ApplicantDetails/ApplicantDetails";
import FilterContainer from "../FilterContainer/FilterContainer";

import './ApplicantTracking.css'

const ApplicantTracking = ({ applicants }) => {

  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const [filterCriteria, setFilterCriteria] = useState({
    jobPosition: "",
    applicationDate: "",
    status: "",
  });

  // const [applicants, setApplicants] = useState(applicantsList)
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

  const filteredApplicantsData = applicants.filter((applicant)  => {
    
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

    // setApplicants(updatedApplicants)
    setSelectedApplicant(null)
  }

  return (
    <div className="applicants-information">

      <FilterContainer 
        onFilterChange={handleFilterChange} 
      />

      <section>
        <Suspense fallback={<h1>Loading the Applicants...</h1>}>
          <Await resolve={applicants}>
            <div className="all-applicants">
              {applicantsData}
            </div>
          </Await>
        </Suspense>
      </section>

      <ApplicantDetails
        selectedApplicant={selectedApplicant}
        onCloseDetails={handleExitDetails}
        goBack={goBack}
        goNext={goNext}
        selectedApplicantIndex={selectedApplicantIndex}
        applicants={applicants}
        // setApplicants={setApplicants}
        onDelete={handleApplicantDelete}
      />

    </div>
  );
};

export default ApplicantTracking;
