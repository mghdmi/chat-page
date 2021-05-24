import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function UserInfo({ userName, status, imageSize, ...rest }) {
	return (
		<div className={styles.user} {...rest}>
			<div
				className={cn(styles.avatar, {
					[styles.avatarLarge]: imageSize === 'large',
				})}
			/>
			<div className={styles.userInfo}>
				<div className={styles.userName}>{userName}</div>
				<div className={styles.userStatus}>{status}</div>
			</div>
		</div>
	);
}

export default UserInfo;

UserInfo.propTypes = {
	userName: PropTypes.string.isRequired,
	imageSize: PropTypes.oneOf(['small', 'large']).isRequired,
	status: PropTypes.string.isRequired,
};

UserInfo.defaultProps = {
	imageSize: 'small',
};
