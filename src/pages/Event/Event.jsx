import React from "react";
import "./event.css";
import img from "../../assets/cake.png";
import { BsCalendarEvent } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

const Event = () => {
  return (
    <div className="event-wrapper">
      <div className="event-left">
        <div className="event-left-heading">
          <h1>Birthday Bash</h1>
          <h6>
            Hosted By <span>Elysia</span>
          </h6>
        </div>
        <div className="event-left-card">
          <div  className="event-left-card-icon">
            <BsCalendarEvent />
          </div>
          <div className="event-left-card-data">
            <div>18 Auguest 6:00PM</div>
            <div>to 19 Auguest 1:00PM UTC +10</div>
          </div>
          <div className="event-left-card-sign">^</div>
        </div>
        <div className="event-left-card">
          <div className="event-left-card-icon">
            <GrLocation />
          </div>
          <div className="event-left-card-data">
            <div>Street Name</div>
            <div>Suburb, State, Postcode</div>
          </div>
          <div className="event-left-card-sign">^</div>
        </div>
      </div>
      <div className="event-right">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Event;
