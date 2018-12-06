import React from "react";
import PropTypes from "prop-types";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
/*t*/

const LeafMap = ({ lat, lon }) => {
	const position = [lat, lon];

	return (
		<Map center={position} zoom={13} style={{ width: "100%", height: "400px" }}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Marker position={position}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</Map>
	);
};

LeafMap.propTypes = {
	lat: PropTypes.number.isRequired,
	lon: PropTypes.number.isRequired,
};

export default LeafMap;
