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
		this.sendMessage = this.sendMessage.bind(this);
		this.getMessages = this.getMessages.bind(this);
	}

	getMessages () {
		axios.get('http://chattercube.thirdtape.com/messages')
			.then(({data}) => { 
				const messages = data.messages;
				this.setState({messages});
			})
			.catch(err => console.log(err));
	}

	componentDidMount() {
		this.getMessages();
	}

	sendMessage (message) {
		axios.post('http://chattercube.thirdtape.com/messages', {username: 'notMax', message: message})
		  .then(({data}) => {
		    console.log(data);
		  })
		  .catch(err => console.log(err));
	}

	render () {
		return (
			<div>
				<Send state={this.state} sendMessage={this.sendMessage} />
				<Messages messages={this.state.messages} />
			</div>
		);
	}

}

export default App;