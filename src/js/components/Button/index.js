import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function Button({ children, className, disabled, ...rest }) {
	return (
		<button
			className={cn(styles.button, { [styles.disabled]: disabled }, className)}
			disabled={disabled}
			{...rest}
		>
			{children}
		</button>
	);
}

export default Button;

Button.propTypes = {
	className: PropTypes.string,
	disabled: PropTypes.bool,
};
