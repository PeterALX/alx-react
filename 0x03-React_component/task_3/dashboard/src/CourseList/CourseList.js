import PropTypes from 'prop-types';
import './CourseList.css'
import CourseListRow from "./CourseListRow";
import CourseShape from './CourseShape';

export default function CourseList({ listCourses = [] }) {
	return (
		<table id="CourseList">
			<thead>
				<CourseListRow isHeader={true} textFirstCell="Available courses" />
				<CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
			</thead>
			<tbody>
				{
					listCourses.length === 0 ? (
						<CourseListRow isHeader={false} textFirstCell="No course available yet" />
					) : (
						listCourses.map((course) =>
							<CourseListRow
								key={course.id}
								isHeader={false}
								textFirstCell={course.name}
								textSecondCell={course.credit}
							/>
						)
					)
				}
			</tbody>
		</table>
	)
}

CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(CourseShape),
};

