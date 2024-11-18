export default function NotificationItem({ type, html, value }) {
  if (value && !html) {
    return <li data-notification-type={type}>{value}</li>
  }
  if (!value && html) {
    return <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}></li>
  }
  return <li data-notification-type={type}>value or html prop, not both</li>
}
