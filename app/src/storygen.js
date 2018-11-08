import React, { Component } from "react";
import TopBar from "./components/TopBar";
import Settings from "./components/Settings";
import Grid from "./components/Grid";
import "../public/stylesheets/storygen.css";

class storygen extends Component {
	render() {
		return (
			<div className="container">
				<TopBar />
			</div>
		);
	}
}

export default storygen;
