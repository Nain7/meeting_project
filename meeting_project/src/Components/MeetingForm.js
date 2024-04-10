import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MeetingForm({ setFormValue }) {
 
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlots, setTimeslots] = useState([]);
  const [showNextButton, setShowNextButton] = useState(false);

  useEffect(() => {
    const interval = 45;
    createTimeSlot(interval);
  }, []);

  const createTimeSlot = (interval) => {
    const startTime = 8 * 60;
    const endTime = 22 * 60;
    const totalSlots = (endTime - startTime) / interval;
    const slots = Array.from({ length: totalSlots }, (_, i) => {
      const totalMinutes = startTime + i * interval;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      const formattedHours = hours > 12 ? hours - 12 : hours;
      const period = hours >= 12 ? "PM" : "AM";
      return `${String(formattedHours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")} ${period}`;
    });

    setTimeslots(slots);
  };

  const handleDateSelect = (selectedDate) => {
    console.log("Selected Date:", selectedDate);
    setSelectedDate(selectedDate);
    setShowNextButton(true);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setShowNextButton(true);
  };

  const handleNext = () => {
    setFormValue({ selectedDate, selectedTime });
  };

  return (
    <div className="flex justify-center  ">
      <div className=" max-w-4xl w-100 px-1 py-auto h-screen overflow-auto shadow-md m-3 border-t-4 md:h-auto">
        <img src="/logo.svg" width={60} height={60} alt="Logo" />
        <div className="grid grid-cols-1 md:grid-cols-3 mt-2 ">
          {/* Meeting Info */}
          <div className="p-3 mt-0  border-r">
            <h2 className="font-bold text-2xl">Fibery Demo</h2>
            <div className="mt-4 p-1 flex flex-col gap-4 ">
              <h2 className="flex gap-2"> ⏳45 min</h2>
              <h2 className="flex gap-2 "> Meeting</h2>
              <h4 className="text-gray-600  text-left w-3/4">
                Book a meeting with our Fibery team.Talk to a real person about
                how to get your processes set up with us or not.
              </h4>
            </div>
          </div>
          {/* Time & Date selection */}
          <div className="  md:col-span-2 flex px-1 w-full">
            <div className="flex flex-col  ">
              <h2 className="font-bold text-lg">Select Date & Time</h2>
              <Calendar
                className="  rounded-md border mt-3 w-full  border-r  mr-1 px-3 py-3"
                calendarType="US"
                onChange={handleDateSelect}
               
                tileClassName={({ date, view }) =>
                  view === "month" && date.getDay() === 0 ? "text-red" : null
                }
              />
              <h6 className="font-bold text-lg mr-3">Time zone</h6>
              <p className="text-gray-600 ml-2">
                {" "}
                🌍 UK, Ireland, Lisbon Time (16:54)
              </p>
            </div>
            {/* Conditionally render the time slots if a date is selected */}
            {selectedDate && (
              <div
                className="flex flex-col w-full overflow-auto gap-4 p-5"
                style={{ maxHeight: "400px" }}
              >
                {console.log(timeSlots)}
                {timeSlots?.map((time, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <button
                      className={`border text-blue-500 hover:text-black hover:border-black rounded ${
                        selectedTime === time
                          ? "bg-blue-500 text-white gap-3"
                          : ""
                      }`}
                      onClick={() => handleTimeSelect(time)}
                      style={{ width: "calc(100% - 5px)" }}
                    >
                      {time}
                    </button>
                    {/* Conditionally render the "Next" button only if the current time slot is selected */}
                    {selectedTime === time && showNextButton && (
                      <button
                        className="border border-blue-500 hover:text-black hover:border-black rounded bg-blue-500 text-white"
                        onClick={handleNext}
                        style={{ width: "calc(90% - 5px)" }}
                      >
                        Next
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetingForm;
