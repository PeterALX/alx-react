import { shallow } from 'enzyme'
import CourseListRow from './CourseListRow';

// when isHeader is true
describe('courseListRow when isHeader === true', () => {
  test('CourseListRow renders colSpan=2 when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell={'Test'} />);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toBe(2);
  })
  test('CourseListRow renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell={'Test1'}
        textSecondCell={'Test2'}
      />
    );
    expect(wrapper.find('th')).toHaveLength(2);
  })
})

test('CourseListRow renders 2 td elements within a tr element when isHeader is false', () => {
  const wrapper = shallow(
    <CourseListRow
      isHeader={false}
      textFirstCell={'Test1'}
      textSecondCell={'Test2'}
    />
  );
  expect(wrapper.type()).toBe('tr');
  expect(wrapper.children().every('td')).toBe(true);
})
