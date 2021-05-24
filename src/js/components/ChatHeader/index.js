import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import UserInfo from '../UserInfo';

function ChatHeader({ isTyping, setIsModalOpen }) {
	function onHeaderClick() {
		setIsModalOpen(true);
	}

	return (
		<header className={styles.header} onClick={onHeaderClick}>
			<UserInfo
				userName="Digikala Telegram Bot"
				status={isTyping ? 'typing...' : 'online'}
			/>
		</header>
	);
}

export default ChatHeader;

ChatHeader.propTypes = {
	isTyping: PropTypes.bool,
	setIsModalOpen: PropTypes.func,
};
