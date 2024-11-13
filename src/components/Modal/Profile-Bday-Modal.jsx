/* eslint-disable react/prop-types */
import { useEffect, useRef, useState,useContext } from "react";
import "./Profile-DatePicker.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ProfileYearDropDown from "./Profile-YearDropDown";
import { MyContext } from "../../Context/GlobalContext";


const ProfileBdayModal = ({ isOpen, closeModal }) => {
  const modalRef = useRef(null);

  const [isDropdown, setIsDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedYear, setSelectedYear] = useState(null);

  const {setUserInfo} = useContext(MyContext);
  
  useEffect(() => {
    if (isOpen) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [isOpen]);

  const closeDropdown = () => {
    setIsDropdown(false);
  }

  const openDropdown = () => {
    setIsDropdown(true);
  }

  const handleYearChange = (year) => {
    const newDate = new Date(selectedDate.setYear(year));
    setSelectedDate(newDate);

  };
  
  const customheader = ({ date, decreaseMonth, increaseMonth }) => (
    <div className="profile-bday-custom-header">
      <button onClick={decreaseMonth}>{"<"}</button>
      <div>
        <span>{date.toLocaleString("default", { month: "long" })}</span>
        <span onClick={openDropdown}>{date.getFullYear()}</span>
      </div>
      <button onClick={increaseMonth}>{">"}</button>
    </div>
  );
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
    
    if(selectedYear !== null){
      var month = date.toLocaleString("default", { month: "long" });
      var day = date.toLocaleString("default",{ day:"numeric"});
      var userBday = {
        month: month,
        day: day,
        year: selectedYear
      }
      setUserInfo(prev =>({...prev,userBday}));
      closeModal();
    }else {
      setIsDropdown(true)
    }
  };

  

  return (
    <dialog className="profile-bday-modal" ref={modalRef}>
      <DatePicker
        inline
        selected={selectedDate}
        onChange={handleDateChange}
        renderCustomHeader={customheader}
      />

      {isDropdown && 
        <ProfileYearDropDown 
          isDropdown={isDropdown} 
          closeDropdown={closeDropdown}
          onYearSelect={handleYearChange}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      }
    </dialog>
  );
};

export default ProfileBdayModal;