import React from 'react';
import Message from './Message';

const Messages = props => (
	<div className="messages">
		{props.messages.map((message, i) =>
			(<Message
				key={i}
				username={message.username}
				message={message.message}
			/>),
		)}
	</div>
);

export default Messages;