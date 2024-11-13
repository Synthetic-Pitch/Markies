/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import "./Profile-DatePicker.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const ProfileYearDropDown = ({isDropdown, closeDropdown, onYearSelect,selectedYear, setSelectedYear}) => {

  const modalRef = useRef(null);
  const minDate = new Date('1930-01-01');
  const maxDate = new Date('2030-12-31');

 

  useEffect(() => {
    if(isDropdown) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [isDropdown]);
  
  const handleBirthdate = (date) => {
    const year = date.getFullYear();
    
    setSelectedYear(year);
    onYearSelect(year);
    closeDropdown();
  };
  
  return (
    <dialog ref={modalRef} className="profile-bday-modal-year-dropdown">
      <DatePicker
        inline
        selected={selectedYear}
        onChange={handleBirthdate}
        showYearPicker
        dateFormat="yyyy"
        minDate={minDate}
        maxDate={maxDate}
        yearItemNumber={120}
      />
    </dialog>
  )
}

export default ProfileYearDropDown;