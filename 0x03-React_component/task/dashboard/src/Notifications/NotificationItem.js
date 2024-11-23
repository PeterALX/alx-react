import PropTypes from "prop-types";

export default function NotificationItem({ type = 'default', html, value }) {
  if (value && !html) {
    return <li data-notification-type={type}>{value}</li>
  }
  if (!value && html) {
    return <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
  }
  return <li data-notification-type={type}>value or html prop, not both</li>
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
};
