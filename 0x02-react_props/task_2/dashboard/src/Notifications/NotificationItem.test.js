import { shallow } from 'enzyme'
import NotificationItem from './NotificationItem';

test('NotificationItem renders without crashing', () => {
	shallow(<NotificationItem />);
})
test('NotificationItem renders correctly with type and value props', () => {
	const wrapper = shallow(
		<NotificationItem
			type='default'
			value='test'
		/>
	);
	expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
})
test('NotificationItem renders correctly with the html prop', () => {
	const wrapper = shallow(
		<NotificationItem
			type='default'
			html='<u>test</u>'
		/>
	);
	expect(wrapper.html()).toEqual('<li data-notification-type="default"><u>test</u></li>');
})
//html={{ __html: '<h1>foo</h1>' }}
