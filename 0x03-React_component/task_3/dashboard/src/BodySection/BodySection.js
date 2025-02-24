import PropTypes from 'prop-types';
import './BodySection.css'

export default function BodySection({ title, children }) {
  return (
    <div className="bodySection">
      <h2>{title}</h2>
      {children}
    </div>
  )
}
BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
