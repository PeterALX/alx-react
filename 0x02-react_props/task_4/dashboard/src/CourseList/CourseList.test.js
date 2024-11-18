import { shallow } from 'enzyme'
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

test('CourseList renders without crashing', () => {
  shallow(<CourseList />);
})
test('CourseList renders five rows', () => {
  const wrapper = shallow(<CourseList />);
  expect(wrapper.find(CourseListRow)).toHaveLength(5);
})
