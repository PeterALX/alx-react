import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import App from "./App";
import { mount, shallow } from 'enzyme'

describe('App', () => {
	test('renders without crashing', () => {
		shallow(<App />);
	})
	test('contains the Notifications component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(Notifications).exists()).toBe(true);
	})
	test('contains the Header component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(Header).exists()).toBe(true);
	})
	test('Does not display CourseList when isLoggedIn is false ', () => {
		const wrapper = shallow(<App isLoggedIn={false} />);
		expect(wrapper.find(CourseList).exists()).toBe(false);
	})

	test('displays Correctly when isLoggedIn is true', () => {
		const wrapper = shallow(<App isLoggedIn={true} />);
		expect(wrapper.find(CourseList).exists()).toBe(true);
		expect(wrapper.find(Login).exists()).toBe(false);
	})
	test('contains the Footer component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(Footer).exists()).toBe(true);
	})
	test('calls logOut and shows alert on Control + h keypress', () => {
		const logOutMock = jest.fn(() => { })
		const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { })
		shallow(<App logOut={logOutMock} />);
		const event = new KeyboardEvent("keydown", { key: "h", ctrlKey: true });

		document.dispatchEvent(event)
		expect(logOutMock).toHaveBeenCalled()
		expect(alertMock).toHaveBeenCalledWith('Logging you out')
		alertMock.mockRestore()
	})
})
