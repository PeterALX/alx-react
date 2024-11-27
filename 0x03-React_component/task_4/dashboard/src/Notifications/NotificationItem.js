import PropTypes from "prop-types";

function NotificationItem({ type = 'default', html, value, markAsRead, id }) {
  if (value && !html) {
    return <li onClick={() => markAsRead(id)} data-notification-type={type}>{value}</li>
  }
  if (!value && html) {
    return <li onClick={() => markAsRead(id)} data-notification-type={type} dangerouslySetInnerHTML={html}></li>
  }
  return <li data-notification-type={type}>value or html prop, not both</li>
}

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
