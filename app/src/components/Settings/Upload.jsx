import React from "react";
import "../../../public/stylesheets/Upload.css";

const Upload = ({}) => (
	<div className="Upload">
		<div className="Toolbox">
			<h1>Toolbox</h1>
			<div id="tool-box">
				<img alt="image of tile" src="https://picsum.photos/75/75?random" />
				<img alt="image of tile" src="https://picsum.photos/75/76?random" />
				<img alt="image of tile" src="https://picsum.photos/75/77?random" />
				<img alt="image of tile" src="https://picsum.photos/75/78?random" />
				<img alt="image of tile" src="https://picsum.photos/75/79?random" />
			</div>
		</div>
		<p>Drag tiles onto the map! Customize your map!</p>
		<button className="upload">Upload!</button>
	</div>
);

export default Upload;
