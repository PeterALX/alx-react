import { shallow } from 'enzyme'
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];
test('CourseList renders without crashing', () => {
  shallow(<CourseList />);
})
test('CourseList when with empty listCourses', () => {
  const wrapper = shallow(<CourseList />);
  expect(wrapper.find(CourseListRow)).toHaveLength(3);
})
test('CourseList renders correctly with listCourses.lenghth > 0', () => {
  const wrapper = shallow(<CourseList listCourses={listCourses} />);
  expect(wrapper.find(CourseListRow)).toHaveLength(listCourses.length + 2);
})
