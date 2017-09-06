import React from 'react';
import PropTypes from 'prop-types'; 
	
	const Message = props => (
	  <div className="message">
	    <span className="username">{props.username}: </span>
	    <span>{props.message}</span>
	  </div>
	);

	Message.propTypes = {
	  username: PropTypes.string.isRequired,
	  message: PropTypes.string.isRequired,
	};

export default Message;