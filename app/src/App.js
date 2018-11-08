import React, { Component } from "react";
import TopBar from "./components/TopBar";
import Settings from "./components/Settings";
import Grid from "./components/Grid";
import "../public/stylesheets/App.css";

class App extends Component {
	render() {
		return (
			<div className="container">
				<TopBar />
				<Settings />
				<Grid row={50} column={50} />
			</div>
		);
	}
}

export default App;
