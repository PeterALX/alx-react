import PropTypes from "prop-types";
import React from "react";

class NotificationItem extends React.PureComponent {
  render() {
    const props = this.props
    if (props.value && !props.html) {
      return <li onClick={() => props.markAsRead(props.id)} data-notification-type={props.type}>{props.value}</li>
    }
    if (!props.value && props.html) {
      return <li onClick={() => props.markAsRead(props.id)} data-notification-type={props.type} dangerouslySetInnerHTML={props.html}></li>
    }
    return <li data-notification-type={props.type}>value or html prop, not both</li>
  }
}

NotificationItem.defaultProps = {
  type: 'default',
};
NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func.isRequired,
};
export default NotificationItem;
