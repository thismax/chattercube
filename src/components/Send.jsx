import React, { Component } from 'react';

var Send = ({handleKeyPress}) => {
	return (
	  <div className="search-bar form-inline">
	    <input className="form-control" type="text" placeholder="Say Somethin'" onKeyPress={handleKeyPress} />
	  </div> 
	);
}

export default Send;