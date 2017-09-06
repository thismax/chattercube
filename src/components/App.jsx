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
		this.handleKeyPress = this.handleKeyPress.bind(this);
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
		axios.post('http://chattercube.thirdtape.com/messages', {username: window.location.search.substr(10).split("%20").join(' '), message: message})
		  .then(({data}) => {
		  	this.getMessages();
		  })
		  .catch(err => console.log(err));
	}

	handleKeyPress(event) {
	  if(event.key == 'Enter'){
	    this.sendMessage(event.target.value);
	    event.target.value = '';
	    // setTimeout(this.getMessages, 500);
	  }
	}

	render () {
		return (
			<div>
				<Send state={this.state} handleKeyPress={this.handleKeyPress} sendMessage={this.sendMessage} />
				<Messages messages={this.state.messages} />
			</div>
		);
	}

}

export default App;