import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import App from "./App";
import { shallow } from 'enzyme'

test('App renders without crashing', () => {
	shallow(<App />);
})
test('App contains the Notifications component', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.find(Notifications).exists()).toBe(true);
})
test('App contains the Header component', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.find(Header).exists()).toBe(true);
})
test('App Does not display CourseList when isLoggedIn is false ', () => {
	const wrapper = shallow(<App isLoggedIn={false} />);
	expect(wrapper.find(CourseList).exists()).toBe(false);
})
test('App displays Correctly when isLoggedIn is true', () => {
	const wrapper = shallow(<App isLoggedIn={true} />);
	expect(wrapper.find(CourseList).exists()).toBe(true);
	expect(wrapper.find(Login).exists()).toBe(false);
})
test('App contains the Footer component', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.find(Footer).exists()).toBe(true);
})
