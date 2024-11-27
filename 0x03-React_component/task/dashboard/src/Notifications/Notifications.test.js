import { shallow } from 'enzyme'
import Notifications from "./Notifications";
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

const listNotifications = [
	{ id: 1, type: "default", value: "New course available" },
	{ id: 2, type: "urgent", value: "New resume available" },
	{ id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

describe('Notifications', () => {
	test('renders without crashing', () => {
		shallow(<Notifications />);
	})
	test('renders correctly when displayDrawer=false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('.menuItem').exists()).toBe(true);
		expect(wrapper.find('.Notifications').exists()).toBe(false);
	})
	test('renders correctly when displayDrawer=true', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find('.menuItem').exists()).toBe(true);
		expect(wrapper.find('.Notifications').exists()).toBe(true);
	})

	test('when listNotifcations.lenghth === 0', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.text()).toContain('No new notification for now');
		expect(wrapper.text()).not.toContain('Here is the list of notifications');
		expect(wrapper.find(NotificationItem)).toHaveLength(0);
	})
	test('when listNotifcations.lenghth > 0', () => {
		const wrapper = shallow(
			<Notifications
				displayDrawer={true}
				listNotifications={listNotifications}
			/>
		);
		expect(wrapper.find(NotificationItem)).toHaveLength(listNotifications.length);
	})
	test('markAsRead logs the right message', () => {
		const notificationsInstance = shallow(
			<Notifications
				displayDrawer={true}
				listNotifications={listNotifications}
			/>
		).instance();
		const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { })
		notificationsInstance.markAsRead(2)
		expect(consoleSpy).toHaveBeenCalledWith('Notification 2 has been marked as read')
		notificationsInstance.markAsRead(3)
		expect(consoleSpy).toHaveBeenCalledWith('Notification 3 has been marked as read')
		consoleSpy.mockRestore()
	})
	test('passing the same listNotifications doesn\'t cause a rerender', () => {
		const wrapper = shallow(
			<Notifications
				displayDrawer={true}
				listNotifications={listNotifications}
			/>
		)
		const newListNotifications = [
			{ id: 1, type: "default", value: "New course available" },
			{ id: 2, type: "urgent", value: "New resume available" },
			{ id: 3, type: "urgent", html: { __html: getLatestNotification() } },
		];

		const spy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate')
		wrapper.setProps({ listNotifications: newListNotifications })
		expect(spy).toHaveReturnedWith(false)
		spy.mockRestore()
	})
	test('passing a longer listNotifications causes a rerender', () => {
		const wrapper = shallow(
			<Notifications
				displayDrawer={true}
				listNotifications={listNotifications}
			/>
		)
		const newListNotifications = [
			{ id: 1, type: "default", value: "New course available" },
			{ id: 2, type: "urgent", value: "New resume available" },
			{ id: 3, type: "urgent", html: { __html: getLatestNotification() } },

			{ id: 4, type: "urgent", value: "Touch some grass" },
		];

		const spy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate')
		wrapper.setProps({ listNotifications: newListNotifications })
		expect(spy).toHaveReturnedWith(true)
		spy.mockRestore()
	})
})
