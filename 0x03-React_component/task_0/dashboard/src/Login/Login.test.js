import Login from './Login'
import { shallow } from 'enzyme'

test('Login renders without crashing', () => {
	shallow(<Login />);
})
test('Login renders 2 input tags and 2 label tags', () => {
	const wrapper = shallow(<Login />);
	expect(wrapper.find('input')).toHaveLength(2);
	expect(wrapper.find('label')).toHaveLength(2);
})
