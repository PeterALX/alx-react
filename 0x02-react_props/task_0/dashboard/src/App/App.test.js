import App from "./App";
import { shallow } from 'enzyme'

test('App renders without crashing', () => {
	shallow(<App />);
})
