import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const Messages = props => (
  <div className="messages">
    {props.messages.map((message, i) =>
      (<Message
        key={i}
        username={message.username}
        text={message.text}
      />),
    )}
  </div>
);

Messages.propTypes = {
  Messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      message: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default Messages;