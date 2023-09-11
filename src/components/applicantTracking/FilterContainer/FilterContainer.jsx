import React from "react";

import './FilterContainer.css'

const FilterContainer = (props) => {

  const handleInputChange = (e) => {
    const {name, value} = e.target
    props.onFilterChange({ [name]: value });
  };

  return (
    <div className="bg-filter-form">
      <div className="filter-container">
        <input
          type="text"
          placeholder="Job Position"
          name="jobPosition"
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="Status"
          name="status"
          onChange={handleInputChange}
          />

        <input
          type="date"
          name="applicationDate"
          onChange={handleInputChange}
        />

      </div>
    </div>
  );
};

export default FilterContainer;
