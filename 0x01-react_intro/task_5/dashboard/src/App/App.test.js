import App from "./App";
import {shallow} from 'enzyme'

test('App renders without crashing', () => {
	shallow(<App />);
})
test('App renders a div with the class App-header', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.find('div.App-header')).toHaveLength(1);
})
test('App renders a div with the class App-body', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.find('div.App-body')).toHaveLength(1);
})
test('App renders a div with the class App-footer', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.find('div.App-footer')).toHaveLength(1);
})
