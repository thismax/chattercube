import React, { Component } from 'react';
import PropTypes from 'prop-types';

var Send = ({state, sendMessage}) => {
	return (
	  <div className="search-bar form-inline">
	    <input className="form-control" type="text" />
	    <button className="btn hidden-sm-down">
	      <span className="glyphicon glyphicon-search"></span>
	    </button>
	  </div> 
	);
}

export default Send;