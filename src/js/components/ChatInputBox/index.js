import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';
import Button from '../Button';

function ChatInputBox({ setMessages, setMessage }) {
	const [value, setValue] = useState('');
	const inputRef = useRef();

	useEffect(() => {
		focusInput();
	}, []);

	function handleSubmit(e) {
		e.preventDefault();
		updateMessages(value);
	}

	function onChange(e) {
		setValue(e.target.value);
	}

	function focusInput() {
		inputRef.current.focus();
	}

	function onKeyDown(e) {
		if (!value && e.key === 'Enter') {
			e.preventDefault();
			return;
		}

		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			updateMessages(value);
		}
	}

	function updateMessages(message) {
		setMessage(message);
		setMessages(messages => [...messages, { text: message, fromMe: true }]);
		setValue('');
		focusInput();
	}

	return (
		<form className={styles.chatInputBox} onSubmit={handleSubmit}>
			<textarea
				ref={inputRef}
				onChange={onChange}
				value={value}
				onKeyDown={onKeyDown}
				className={cn(styles.chatInput, 'custom-scroll')}
				name="message"
				id="message"
				placeholder="Write a message..."
			/>
			<Button type="submit" disabled={!value}>
				Send
			</Button>
		</form>
	);
}

export default ChatInputBox;

ChatInputBox.propTypes = {
	setMessages: PropTypes.func.isRequired,
	setMessage: PropTypes.func.isRequired,
};
