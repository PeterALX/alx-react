import "./App.css";
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import React from "react";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";


const listCourses = [
	{ id: 1, name: "ES6", credit: 60 },
	{ id: 2, name: "Webpack", credit: 20 },
	{ id: 3, name: "React", credit: 40 },
];

const listNotifications = [
	{ id: 1, type: "default", value: "New course available" },
	{ id: 2, type: "urgent", value: "New resume available" },
	{ id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

class App extends React.Component {
	constructor(props) {
		super(props)
		this.handleKeyDown = this.handleKeyDown.bind(this)
	}
	handleKeyDown(e) {
		if (e.ctrlKey && e.key === 'h') {
			alert("Logging you out")
			this.props.logOut()
		}
	}
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyDown)
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown)
	}
	render() {
		return (
			<>
				<Notifications listNotifications={listNotifications} displayDrawer={true} />
				<div className="App">
					<Header />
					<div className="App-body">
						{
							this.props.isLoggedIn ?
								<BodySectionWithMarginBottom title="Course list">
									<CourseList listCourses={listCourses} />
								</BodySectionWithMarginBottom>
								:
								<BodySectionWithMarginBottom title="Log in to continue">
									<Login />
								</BodySectionWithMarginBottom>
						}
						<BodySection title="News from the School">
							<p> a lot of good things happening!. The nerds are on the lose</p>
						</BodySection>
					</div>
					<div className="App-footer">
						<Footer />
					</div>
				</div>
			</>
		);
	}
}

App.defaultProps = {
	isLoggedIn: false,
	logOut: () => { }
};
App.propTypes = {
	logOut: PropTypes.func,
	isLoggedIn: PropTypes.bool,
};

export default App;
