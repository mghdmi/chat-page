import React from 'react';
import UserInfo from '../UserInfo';
import styles from './styles.module.scss';

function UserDetails() {
	return (
		<div className={styles.userDetails}>
			<UserInfo
				userName="Digikala Telegram Bot"
				status="online"
				imageSize="large"
			/>
			<div className={styles.bioWrap}>
				<div className={styles.about}>About</div>
				<p className={styles.bio}>
					This bot will send to you the last message you sent to it in 2
					seconds!
				</p>
			</div>
		</div>
	);
}

export default UserDetails;
