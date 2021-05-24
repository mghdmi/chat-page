import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';
import ChatScroller from '../ChatScroller';

function ChatMessages({ messages }) {
	return (
		<ChatScroller className={cn(styles.messages, 'custom-scroll')}>
			{messages.map((message, index) => {
				const isFromMe = message.fromMe;

				return (
					<div
						key={index}
						className={cn(styles.message, { [styles.messageFromMe]: isFromMe })}
					>
						<div className={styles.messageContent}>{message.text}</div>
					</div>
				);
			})}
		</ChatScroller>
	);
}

export default ChatMessages;

ChatMessages.propTypes = {
	messages: PropTypes.array.isRequired,
};
