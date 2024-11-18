import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

export default function Notifications({ displayDrawer = false, listNotifications = [] }) {

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
    <p>
      {
        listNotifications.length === 0 ?
          'No new notification for now' :
          'Here is the list of notifications'
      }
    </p>
    <ul>
      {
        listNotifications.length > 0 &&
        listNotifications.map(notification =>
          <NotificationItem
            key={notification.id}
            type={notification.type}
            html={notification.html}
            value={notification.value}
          />
        )
      }
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
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
