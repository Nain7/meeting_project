import React, { useState } from "react";

function PreviewMeeting({
  setEventName,
  setUserName,
  setUserEmail,
  setUserNote,
  selectedTime,
  selectedDate,
  setShowSubmit,
  onToggleView,
}) {
  const handleCancel = () => {
    onToggleView(); // Toggle back to MeetingForm view
  };
  const getEndTime = () => {
    // Calculate the end time by adding 45 minutes to the selected time
    const [hour, minute] = selectedTime.split(":");
    const endTimeHour =
      parseInt(hour) + Math.floor((parseInt(minute) + 45) / 60); // Adjust for hour overflow
    const endTimeMinute = (parseInt(minute) + 45) % 60; // Get the remaining minutes
    return `${String(endTimeHour).padStart(2, "0")}:${String(
      endTimeMinute
    ).padStart(2, "0")}`;
  };

  const endTime = getEndTime();

  // Initialize state for each checkbox individually
  const [isChecked, setIsChecked] = useState({
    leadership: false,
    consulting: false,
    productManagement: false,
    design: false,
    engineering: false,
    sales: false,
    marketing: false,
    education: false,
    somethingElse: false,
  });

  const handleCheckboxChange = (checkbox) => {
    // Toggle the state of the clicked checkbox
    setIsChecked({ ...isChecked, [checkbox]: !isChecked[checkbox] });
  };
  const handleCheckbox = (checkbox) => {
    // Create a new object to update the state
    const updatedState = {
      myself: false,
      tenPeople: false,
      tenToFiftyPeople: false,
      fiftyPlusPeople: false,
    };

    // Set the selected checkbox to true
    updatedState[checkbox] = true;

    // Update the state
    setIsChecked(updatedState);
  };

  const handleScheduleEvent = () => {
    setShowSubmit({ selectedDate, selectedTime }); // Set showSubmit to true to render the Submit component
  };

  return (
    <div className="max-w-4xl w-full px-4  py-6 shadow-md m-3 border-t-4">
      <div className="flex items-start justify-between  ">
        <div className="w-29 pr-4">
          {/* logosection */}
          <img src="/logo.svg" width={60} height={60} alt="Logo" />

          <div className="py-6 px-0 pr-1 border-r">
            <h2 className="font-bold text-2xl">Fibery Demo</h2>
            <div className="mt-5 flex flex-col gap-4 w-3/4">
              <h2 className="flex gap-4"> ⏳45 min</h2>

              <div className="grid gap-1 items-center">
                <span>
                  {" "}
                  🕒
                  {selectedTime
                    ? `${selectedTime} - ${endTime}`
                    : "Select a time"}{" "}
                </span>
                <span>
                  📅
                  {selectedDate
                    ? selectedDate.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "Select a date"}
                </span>
              </div>
              <h4 className="text-gray-600  text-left w-3/4">
                Book a meeting with our Fibery team.Talk to a real person about
                how to get your processes set up with us or not.
              </h4>
            </div>
          </div>
          <button onClick={handleCancel}>Cancel</button>
        </div>

        {/* Enter Detail section */}
        <div
          className="py-3 px-5 p-8 flex flex-col w-full overflow-auto gap-2 mt-5"
          style={{ maxHeight: "400px" }}
        >
          <h2 className="font-bold text-xl ">Enter Details</h2>
          <div>
            <h2 className="font-bold  text-s mt-3">Event Name *</h2>
            <div className="relative">
              <input
                type="text"
                placeholder=""
                onChange={(event) => setEventName(event.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500"></span>
            </div>
            <div>
              <h2 className="font-bold  text-s">Name *</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder=""
                  onChange={(event) => setUserName(event.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500"></span>
              </div>
            </div>
            <div>
              <h2 className="font-bold  text-s">Email *</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder=""
                  onChange={(event) => setUserEmail(event.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <button className=" bg-sky-500 hover:bg-sky-700 ... rounded mt-2">
              Add Guests
            </button>
            <div className="grid">
              <h2 className="font-bold  text-s mt-3">
                I want Fibery to work for:*
              </h2>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={isChecked.myself}
                  onChange={() => handleCheckbox("myself")}
                  disabled={
                    isChecked.tenToFiftyPeople ||
                    isChecked.tenPeople ||
                    isChecked.fiftyPlusPeople
                  }
                />{" "}
                🧍‍♂️Myself
              </label>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={isChecked.tenPeople}
                  onChange={() => handleCheckbox("tenPeople")}
                  disabled={
                    isChecked.myself ||
                    isChecked.tenToFiftyPeople ||
                    isChecked.fiftyPlusPeople
                  }
                />{" "}
                🧑‍🤝‍🧑10 people
              </label>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={isChecked.tenToFiftyPeople}
                  onChange={() => handleCheckbox("tenToFiftyPeople")}
                  disabled={
                    isChecked.myself ||
                    isChecked.tenPeople ||
                    isChecked.fiftyPlusPeople
                  }
                />{" "}
                👨‍👩‍👧‍👧10-50 people
              </label>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={isChecked.fiftyPlusPeople}
                  onChange={() => handleCheckbox("fiftyPlusPeople")}
                  disabled={
                    isChecked.myself ||
                    isChecked.tenPeople ||
                    isChecked.tenToFiftyPeople
                  }
                />{" "}
                👨‍👩‍👧‍👧50+ people
              </label>
            </div>
            <div className="grid">
              <h2 className="font-bold  text-s mt-3">You are more about:*</h2>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={isChecked.leadership}
                  onChange={() => handleCheckboxChange("leadership")}
                />{" "}
                Leadership
              </label>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={isChecked.consulting}
                  onChange={() => handleCheckboxChange("consulting")}
                />{" "}
                Consulting
              </label>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={isChecked.productManagement}
                  onChange={() => handleCheckboxChange("productManagement")}
                />{" "}
                Product Management
              </label>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={isChecked.design}
                  onChange={() => handleCheckboxChange("design")}
                />{" "}
                Design
              </label>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={isChecked.engineering}
                  onChange={() => handleCheckboxChange("engineering")}
                />{" "}
                Engineering
              </label>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={isChecked.sales}
                  onChange={() => handleCheckboxChange("sales")}
                />{" "}
                Sales
              </label>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={isChecked.marketing}
                  onChange={() => handleCheckboxChange("marketing")}
                />{" "}
                Marketing
              </label>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={isChecked.education}
                  onChange={() => handleCheckboxChange("education")}
                />{" "}
                Education
              </label>
              <label>
                {" "}
                <input
                  type="checkbox"
                  checked={isChecked.somethingElse}
                  onChange={() => handleCheckboxChange("somethingElse")}
                />{" "}
                Something else
              </label>
            </div>
            <div>
              <h2 className="font-bold  text-s mt-3">
                Please, share anything that will help prepare for our meeting
              </h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder=""
                  onChange={(event) => setUserNote(event.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500"></span>
              </div>
            </div>
            <div>
              <h2 className="font-bold  text-s mt-3">
                Please, share with us the name of your Fibery Workspace (if any)
              </h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder=""
                  onChange={(event) => setUserNote(event.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500"></span>
              </div>
            </div>
            <button
              className="bg-sky-500 hover:bg-sky-700 ... rounded  mt-3"
              onClick={handleScheduleEvent}
            >
              Schedule Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewMeeting;
