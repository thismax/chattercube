import React from 'react';
import PropTypes from 'prop-types';
	
	const Message = props => (
	  <div className="message">
	    <span className="username">{props.username}</span>
	    <span>{props.text}</span>
	  </div>
	);

	Message.propTypes = {
	  username: PropTypes.string.isRequired,
	  text: PropTypes.string.isRequired,
	};

export default Message;