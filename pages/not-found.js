import React from 'react';
import {Link} from 'react-router';

export default class NotFound extends React.Component {
	render() {
		return <p>Nope. <Link to="/">Go home.</Link></p>;
	}
};
