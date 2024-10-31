import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";

export default function Notifications() {
  return (
    <div className="Notifications">
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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}
