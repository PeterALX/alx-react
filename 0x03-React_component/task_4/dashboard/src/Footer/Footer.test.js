import Footer from './Footer'
import { shallow } from 'enzyme'

test('Footer renders without crashing', () => {
	shallow(<Footer />);
})
test('Footer renders the text copyright', () => {
	const wrapper = shallow(<Footer />);
	expect(wrapper.text()).toContain('Copyright');
})
