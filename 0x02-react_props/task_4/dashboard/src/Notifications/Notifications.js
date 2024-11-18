import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

export default function Notifications({ displayDrawer = true }) {
  const notifications = <div className="Notifications">
    <button
      aria-label="Close"
      style={{
        background: "transparent",
        border: "none",
        position: "absolute",
        top: 0,
        right: 0,
        margin: "2px",
      }}
      onClick={() => console.log("Close button has been clicked")}
    >
      <img src={closeIcon} alt="close" />
    </button>
    <p>Here is the list of notifications</p>
    <ul>
      <NotificationItem type='default' value='New course available' />
      <NotificationItem type='urgent' value='New resume available' />
      <NotificationItem type='urgent' html={{ __html: getLatestNotification() }} />
    </ul>
  </div>
  return (
    <div id='notifications-drawer'>
      <div className="menuItem">
        Your notifications
      </div>
      {displayDrawer && notifications}
    </div>
  );
}
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};
