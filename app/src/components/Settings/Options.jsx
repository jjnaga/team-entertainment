import React from "react";
import "../../../public/stylesheets/Options.css";

const Options = ({}) => (
	<div className="Options">
		<h1>Options</h1>
		<div id="options">
			<label>
				No Roads
				<input type="checkbox" name="name" />
			</label>
			<label>
				Ocean Mode
				<input type="checkbox" name="name" />
			</label>
			<label>
				Name
				<input type="checkbox" name="name" />
			</label>
			<label>
				Idk dude
				<input type="checkbox" name="name" />
			</label>
			<label>
				Anime mode
				<input type="checkbox" name="name" />
			</label>
			<label>
				Anime mode
				<input type="checkbox" name="name" />
			</label>
		</div>
		<button className="generate">Generate!</button>
	</div>
);

export default Options;
