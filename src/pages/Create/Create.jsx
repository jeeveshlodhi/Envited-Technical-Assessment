import React, { useState } from "react";
import "./create.css";
import { Link } from "react-router-dom";

const Create = () => {
  const [items, setItems] = useState([]);

  const itemData = (event) => {
    event.preventDefault();
    console.log(event.target.hostName.value);
    const formData = new FormData();
    formData.append("eventName", event.target.eventName.value);
    formData.append("hostName", event.target.hostName.value);
    formData.append("starTime", event.target.startTime.value);
    formData.append("startDate", event.target.startDate.value);
    formData.append("endTime", event.target.endTime.value);
    formData.append("endDate", event.target.endDate.value);
    formData.append("location", event.target.location.value);
    formData.append("photo", event.target.photo.value);
    // for (let obj of formData) {
    //   console.log(obj);
    // }
    setItems(old=>[...old, formData])
    console.log(items);
  };
  return (
    <div className="create-wrapper">
      <h1>Event Details</h1>
      <div className="create-main">
        <form action="" className="form" onSubmit={itemData}>
          <input type="text" name="eventName" id="" placeholder="Event Name" />

          <input type="text" name="hostName" id="" placeholder="Host Name" />

          <input type="time" name="startTime" id="" placeholder="Start Time" />
          <input type="date" name="startDate" id="" placeholder="Start Date" />
          <input type="time" name="endTime" id="" placeholder="End Time" />
          <input type="date" name="endDate" id="" placeholder="End Date" />
          <input type="text" name="location" id="" placeholder="Location" />

          <input type="file" name="photo" id="" placeholder="Event Photo" />
          <Link to="/event">
          <input type="submit" value="Next" />
          </Link>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default Create;
