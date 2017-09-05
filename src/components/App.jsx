import React, {Component} from 'react';
import axios from 'axios';
import Send from './Send';
import Messages from './Messages'

class App extends Component {

	constructor (props) {
		super(props);
		this.state = {
			messages: [],
		}

		this.postRequest = this.postRequest.bind(this);
		this.handleSend = this.handleSend.bind(this);
		this.getMessages = this.getMessages.bind(this);

	}

	getMessages () {
		axios.get('http://chattercube.thirdtape.com/messages')
			.then(({data}) => { 
				console.log(data);
			})
			.catch(err => console.log(err));
	}

	componentDidMount() {
		this.getMessages();
	}

	postRequest () {

	}

	handleSend () {

	}

	render () {
		return (
			<div>
				test
			</div>
		);
	}

}

export default App;