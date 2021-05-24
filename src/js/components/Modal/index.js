import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import './styles.scss';

function Modal({ isOpen, onClose, title, children }) {
	useEffect(() => {
		function closeOnEscapeKey(e) {
			if (e.key === 'Escape') {
				onClose();
			}
		}

		document.body.addEventListener('keydown', closeOnEscapeKey);
		return () => document.body.removeEventListener('keydown', closeOnEscapeKey);
	}, [onClose]);

	return createPortal(
		<CSSTransition in={isOpen} unmountOnExit timeout={{ enter: 0, exit: 200 }}>
			<div className="modal" onClick={onClose}>
				<div className="modalContent" onClick={e => e.stopPropagation()}>
					<div className="modalHeader">
						<h3 className="modalTitle">{title}</h3>
						<button onClick={onClose} className="buttonClose">
							Close
						</button>
					</div>
					<div className="modalBody">{children}</div>
				</div>
			</div>
		</CSSTransition>,
		document.getElementById('root')
	);
}

export default Modal;

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	title: PropTypes.string,
};
