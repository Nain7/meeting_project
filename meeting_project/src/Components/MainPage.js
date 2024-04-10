import React, { useState } from "react";
import MeetingForm from "./MeetingForm";
import PreviewMeeting from "./PreviewMeeting";
import Submit from "./Submit";

function MainPage({ onClose }) {
  const [formValue, setFormValue] = useState(null);
  const [eventName, setEventName] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNote, setUserNote] = useState("");
  const [showMeetingForm, setShowMeetingForm] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false); // State to control rendering of Submit component

  const handleToggleView = () => {
    setShowMeetingForm(!showMeetingForm);
  };

  const handleFormSubmit = ({ selectedDate, selectedTime }) => {
    setSelectedDate(selectedDate);
    setSelectedTime(selectedTime);
    setFormValue({ selectedDate, selectedTime });
    setShowMeetingForm(false);
    setShowPreview(true);
  };

  const handleCloseSubmit = () => {
    setShowSubmit(false);
    onClose();
  };

  const handleScheduleEvent = () => {
    setShowMeetingForm(false);
    setShowPreview(false);
    setShowSubmit(true); // Show Submit component when Schedule Event is clicked
  };

  const getEndTime = () => {
    if (selectedTime) {
      const [hour, minute] = selectedTime.split(":");
      const endTimeHour =
        parseInt(hour) + Math.floor((parseInt(minute) + 45) / 60);
      const endTimeMinute = (parseInt(minute) + 45) % 60;
      return `${String(endTimeHour).padStart(2, "0")}:${String(
        endTimeMinute
      ).padStart(2, "0")}`;
    }
    return "";
  };

  const endTime = getEndTime();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 ">
      <div className=" md:col-span-3 shadow-lg ">
        {showMeetingForm ? (
          <MeetingForm setFormValue={handleFormSubmit} formValue={formValue} />
        ) : showSubmit ? ( // Render Submit component only if showSubmit is true
          <Submit
            name={userName}
            selectedTime={selectedTime}
            selectedDate={selectedDate}
            endTime={endTime}
            onClose={handleCloseSubmit}
          />
        ) : (
          <PreviewMeeting
            formValue={formValue}
            selectedTime={selectedTime}
            selectedDate={selectedDate}
            setEventName={setEventName} 
            setUserEmail={setUserEmail}
            setUserName={setUserName}
            setUserNote={setUserNote}
            setShowSubmit={setShowSubmit}
            onClose={onClose}
            onToggleView={handleToggleView}
          />
        )}
      </div>
    </div>
  );
}

export default MainPage;
