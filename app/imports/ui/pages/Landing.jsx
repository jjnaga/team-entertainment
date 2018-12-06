import React from "react";
import { Grid, Image, Button, Checkbox, List } from "semantic-ui-react";
import { Meteor } from "meteor/meteor";
import { Stories } from "/imports/api/stories/stories";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";
import LeafMap from "../components/LeafMap";
import "leaflet/dist/leaflet.css";


/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
	render() {
		return (
			<Grid columns={2} textAlign="center" container celled>
				<Grid.Row>
					<Grid.Column width={16}>
						<h1>Map</h1>
						<LeafMap className="test" lat={51.505} lon={-0.09} />
						{/* <Image src="images/Map.png" fluid /> */}
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column width={16}>
						<h1>Story</h1>
						<p>
							A botch necromancer spell has turned your party into
							zombies/skeletons. Your mission is to find a way to bring yourself
							back to life.
						</p>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column width={8}>
						<h1>Toolbox</h1>
						<Grid columns={5} celled>
							<Grid.Column>
								<Image src="images/Tile 1.jpeg" size="medium" />
							</Grid.Column>
							<Grid.Column>
								<Image src="images/Tile 2.jpeg" size="medium" />
							</Grid.Column>
							<Grid.Column>
								<Image src="images/Tile 3.jpeg" size="medium" />
							</Grid.Column>
							<Grid.Column>
								<Image src="images/Tile 4.jpeg" size="medium" />
							</Grid.Column>
							<Grid.Column>
								<Image src="images/Tile 5.jpeg" size="medium" />
							</Grid.Column>
						</Grid>
						<p>Drag tiles onto the map! Customize your Map!</p>
						<Button fluid> Upload </Button>
					</Grid.Column>
					<Grid.Column width={8}>
						<h1>Options</h1>
						<List>
							<List.Item>
								<Checkbox toggle label="Option 1" />
							</List.Item>
							<List.Item>
								<Checkbox toggle label="Option 2" />
							</List.Item>
							<List.Item>
								<Checkbox toggle label="Option 3" />
							</List.Item>
							<List.Item>
								<Checkbox toggle label="Option 4" />
							</List.Item>
							<List.Item>
								<Checkbox toggle label="Option 5" />
							</List.Item>
							<List.Item>
								<Checkbox toggle label="Option 6" />
							</List.Item>
						</List>
						<Button fluid> Generate </Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

//export default Landing;

/** Require an array of Stuff documents in the props. */
Landing.propTypes = {
	stories: PropTypes.array.isRequired,
	ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
	// Get access to Stuff documents.
	const subscription = Meteor.subscribe("Stories");
	return {
		stories: Stories.find({}).fetch(),
		ready: subscription.ready(),
	};
})(Landing);
