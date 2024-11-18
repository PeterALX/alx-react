import PropTypes from "prop-types";

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  if (isHeader) {
    return (
      <tr>
        <th colSpan={textSecondCell === null ? 2 : 1}>{textFirstCell}</th>
        {textSecondCell && <th>{textSecondCell}</th>}
      </tr>
    )
  }
  return (
    <tr>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  )
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow
