import React, { Component } from 'react';
import PropTypes from 'prop-types';

var Send = ({state, sendMessage, handleKeyPress}) => {
	return (
	  <div className="search-bar form-inline">
	    <input className="form-control" type="text" onKeyPress={handleKeyPress} />
	  </div> 
	);
}

export default Send;