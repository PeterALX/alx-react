import { shallow } from 'enzyme'
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
	test('renders without crashing', () => {
		shallow(
			<NotificationItem
				markAsRead={() => { }}
				id={1}
			/>
		);
	})
	test('renders correctly with type and value props', () => {
		const wrapper = shallow(
			<NotificationItem
				type='default'
				value='test'
				markAsRead={() => { }}
				id={1}
			/>
		);
		expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
	})
	test('renders correctly with the html prop', () => {
		const wrapper = shallow(
			<NotificationItem
				id={1}
				type='default'
				html={{ __html: '<u>test</u>' }}
				markAsRead={() => { }}
			/>
		);
		expect(wrapper.html()).toEqual('<li data-notification-type="default"><u>test</u></li>');
	})

	test('calls markAsRead with its id onclick', () => {
		const markAsReadMock = jest.fn()
		const wrapper = shallow(
			<NotificationItem
				id={1}
				type='default'
				html={{ __html: '<u>test</u>' }}
				markAsRead={markAsReadMock}
			/>
		);
		wrapper.simulate('click')
		expect(markAsReadMock).toHaveBeenCalledWith(1)
	})
})
