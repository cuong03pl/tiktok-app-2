import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { getSuggested } from '~/Services/userService';
import AccountItem from './AccountItem';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);
function SuggestedAccounts({ title, data = [] }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>{title}</p>
            {data.map((account) => {
                return <AccountItem data={account} key={account.id} />;
            })}

            <p className={cx('see-all')}>See All</p>
        </div>
    );
}

export default SuggestedAccounts;
