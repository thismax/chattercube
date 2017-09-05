import React from 'react';
import Send from './Send';
import Messages from './Messages'

class App extends {

	constructor (props) {
		super(props);
		this.state = {
			messages = [];
		}

		this.handleSend = this.handleSend.bind(this);
		this.getMessages = this.getMessages.bind(this);
	}

	handleSend () {

	}

	getMessages () {

	}

	render () {
		const App = () => (
				<div>
					<Search />
					<Messages />
				</div>
			);
		}
	}



export default App;