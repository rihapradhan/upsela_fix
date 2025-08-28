import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const DropdownButton = ({ title, items, isOpen, onClick }) => {
  const handleItemClick = (item) => {
    // Perform any other actions you want when an item is selected
    onClick(); // Notify the parent component about the click
  };

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={onClick}>
        {title} <FontAwesomeIcon icon={faChevronDown} />
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {items.map((item) => (
            <div key={item} onClick={() => handleItemClick(item)} className="dropdown-item">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const DropDown = () => {
  const datePostedItems = ["Today", "Last 7 Days", "Last 30 Days"];
  const remoteItems = ["Yes", "No"];
  const payItems = ["High", "Medium", "Low"];
  const jobTypeItems = ["Full-time", "Part-time", "Contract"];
  const locationItems = ["City 1", "City 2", "City 3"];
  const companyItems = ["Company A", "Company B", "Company C"];

  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      handleClickOutside(event);
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div className="btns p-b-20" ref={dropdownRef}>
      <DropdownButton
        title="Date Posted"
        items={datePostedItems}
        isOpen={activeDropdown === "Date Posted"}
        onClick={() => handleDropdownClick("Date Posted")}
      />
      <DropdownButton
        title="Remote"
        items={remoteItems}
        isOpen={activeDropdown === "Remote"}
        onClick={() => handleDropdownClick("Remote")}
      />
      <DropdownButton
        title="Pay"
        items={payItems}
        isOpen={activeDropdown === "Pay"}
        onClick={() => handleDropdownClick("Pay")}
      />
      <DropdownButton
        title="Job Type"
        items={jobTypeItems}
        isOpen={activeDropdown === "Job Type"}
        onClick={() => handleDropdownClick("Job Type")}
      />
      <DropdownButton
        title="Location"
        items={locationItems}
        isOpen={activeDropdown === "Location"}
        onClick={() => handleDropdownClick("Location")}
      />
      <DropdownButton
        title="Company"
        items={companyItems}
        isOpen={activeDropdown === "Company"}
        onClick={() => handleDropdownClick("Company")}
      />
    </div>
  );
};

export default DropDown;
