import Header from './Header'
import { shallow } from 'enzyme'

describe('Header', () => {
	test('renders without crashing', () => {
		shallow(<Header />);
	})
	test('renders img and h1 tags', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.find('h1').exists()).toBe(true);
		expect(wrapper.find('img').exists()).toBe(true);
	})
})
