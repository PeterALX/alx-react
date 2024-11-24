import { shallow } from 'enzyme'
import Notifications from "./Notifications";
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

const listNotifications = [
	{ id: 1, type: "default", value: "New course available" },
	{ id: 2, type: "urgent", value: "New resume available" },
	{ id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];
test('Notifications renders without crashing', () => {
	shallow(<Notifications />);
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

test('Notifications when listNotifcations.lenghth === 0', () => {
	const wrapper = shallow(<Notifications displayDrawer={true} />);
	expect(wrapper.text()).toContain('No new notification for now');
	expect(wrapper.text()).not.toContain('Here is the list of notifications');
	expect(wrapper.find(NotificationItem)).toHaveLength(0);
})
test('Notifications when listNotifcations.lenghth > 0', () => {
	const wrapper = shallow(
		<Notifications
			displayDrawer={true}
			listNotifications={listNotifications}
		/>
	);
	expect(wrapper.find(NotificationItem)).toHaveLength(listNotifications.length);
})
