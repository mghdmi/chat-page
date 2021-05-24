import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

import ChatHeader from '../ChatHeader';
import ChatMessages from '../ChatMessages';
import ChatInputBox from '../ChatInputBox';
import Modal from '../Modal';
import UserDetails from '../UserDetails';

const DEFAULT_MESSAGE = {
	text: 'Hello there!\nI will send to you the last message you sent me in 2 seconds :)\nTry to type as fast as you can!',
};

function App() {
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState('');
	const [debounceMessage, setDebounceMessage] = useState(message);
	const [isTyping, setIsTyping] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		setMessages([DEFAULT_MESSAGE]);
	}, []);

	useEffect(() => {
		if (!message) return;
		setIsTyping(true);

		const timerId = setTimeout(() => {
			setDebounceMessage(message);
			setIsTyping(isTyping => !isTyping);
		}, 2000);

		return () => {
			clearTimeout(timerId);
		};
	}, [message]);

	useEffect(() => {
		if (!debounceMessage) return;

		setMessages(messages => [...messages, { text: debounceMessage }]);
	}, [debounceMessage]);

	return (
		<div className={styles.app}>
			<main className={styles.chat}>
				<ChatHeader isTyping={isTyping} setIsModalOpen={setIsModalOpen} />
				<ChatMessages messages={messages} />
				<ChatInputBox setMessages={setMessages} setMessage={setMessage} />
			</main>

			<Modal
				isOpen={isModalOpen}
				title="User Details"
				onClose={() => setIsModalOpen(false)}
			>
				<UserDetails />
			</Modal>
		</div>
	);
}

export default App;
