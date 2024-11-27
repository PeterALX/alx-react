import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";



class Notifications extends React.Component {
  constructor(props) {
    super(props)
    this.markAsRead = this.markAsRead.bind(this)
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }
  render() {
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
          this.props.listNotifications.length === 0 ?
            'No new notification for now' :
            'Here is the list of notifications'
        }
      </p>
      <ul>
        {
          this.props.listNotifications.length > 0 &&
          this.props.listNotifications.map(notification =>
            <NotificationItem
              markAsRead={this.markAsRead}
              id={notification.id}
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
        {this.props.displayDrawer && notifications}
      </div>
    );

  }
}
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications
