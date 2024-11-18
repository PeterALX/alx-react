import { shallow } from 'enzyme'
import Notifications from "./Notifications";
import NotificationItem from './NotificationItem';

test('Notifications renders without crashing', () => {
	shallow(<Notifications />);
})
test('Notifications renders three list items', () => {
	const wrapper = shallow(<Notifications displayDrawer={true} />);
	expect(wrapper.find(NotificationItem)).toHaveLength(3);
})
test('The first NotificationItem element renders the right html', () => {
	const wrapper = shallow(<Notifications displayDrawer={true} />);
	expect(wrapper.find(NotificationItem).at(0).html()).toEqual('<li data-notification-type="default">New course available</li>');
})
test('Notifications renders the text Here is the list of notifications', () => {
	const wrapper = shallow(<Notifications displayDrawer={true} />);
	expect(wrapper.text()).toContain('Here is the list of notifications');
})
test('Notifications renders correctly when displayDrawer=false', () => {
	const wrapper = shallow(<Notifications displayDrawer={false} />);
	expect(wrapper.find('.menuItem').exists()).toBe(true);
	expect(wrapper.find('.Notifications').exists()).toBe(false);
})
test('Notifications renders correctly when displayDrawer=true', () => {
	const wrapper = shallow(<Notifications displayDrawer={true} />);
	expect(wrapper.find('.menuItem').exists()).toBe(true);
	expect(wrapper.find('.Notifications').exists()).toBe(true);
})
