import React from "react";
import PropTypes from "prop-types";
import "../../../public/stylesheets/Tile.css";

const Tile = () => {
	const string = "#" + Math.floor(Math.random() * 16777215).toString(16);
	const style = { background: string };
	return <div style={style} className="map-tile" />;
};

Tile.propTypes = {};

export default Tile;
