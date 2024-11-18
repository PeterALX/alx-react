import "./App.css";
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";

function App({ isLoggedIn = false }) {
	const screen = isLoggedIn ? <CourseList /> : <Login />
	return (
		<>
			<Notifications />
			<div className="App">
				<Header />
				<div className="App-body">
					{screen}
				</div>
				<div className="App-footer">
					<Footer />
				</div>
			</div>
		</>
	);
}

App.propTypes = {
	isLoggedIn: PropTypes.bool,
};

export default App;
