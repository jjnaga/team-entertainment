import React, { Component } from "react";
import { Menu } from "./components/Menu";
import { Map } from "./components/Map";

class App extends Component {
	render() {
		return (
			<div className="container">
				<Menu />
				<Map />
			</div>
		);
	}
}

export default App;
