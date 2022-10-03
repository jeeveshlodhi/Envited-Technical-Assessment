import React from "react";
import "./create.css";
import {Link} from 'react-router-dom'

const Create = () => {
  return (
    <div className="create-wrapper">
        <h1>Event Details</h1>
      <form action="" className="form">
        <input type="text" name="eventName" id="" placeholder="Event Name" />

        <input type="text" name="hostName" id="" placeholder="Host Name" />

        <input type="datetime" name="" id="" placeholder="Start Time" />

        <input type="datetime" name="" id="" placeholder="End Time" />

        <input type="text" name="location" id="" placeholder="Location" />

        <input type="file" name="photo" id="" placeholder="Event Photo" />
        <Link to ='/event'><button>Next</button></Link>
      </form>
    </div>
  );
};

export default Create;
