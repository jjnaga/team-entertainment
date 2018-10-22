import React from "react";
import PropTypes from "prop-types";
import Tile from "./Grid/Tile";
import "../../public/stylesheets/Map.css";

class Grid extends React.Component {
	render() {
		const { row, column } = this.props;

		const cells = [];
		for (let key = 0; key < row * column; key++) {
			cells.push(<Tile key={key} />);
		}
		return <div className="map">{cells}</div>;
	}
}
Grid.propTypes = {
	row: PropTypes.number.isRequired,
	column: PropTypes.number.isRequired
};

export default Grid;
