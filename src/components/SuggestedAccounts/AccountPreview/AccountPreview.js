import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button/Button';
import { VerifyIcon } from '~/components/Icon/Icon';
import Images from '~/components/Images/Images';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Images className={cx('avatar')} src={data.avatar} alt="" />
                <Button primary>Follow</Button>
            </div>
            <div className={cx('info')}>
                <Link to="" className={cx('name')}>
                    <span>{`${data.first_name} ${data.last_name}`}</span>
                    <VerifyIcon height="14px" width="14px" />
                </Link>
                <Link to={''} className={cx('user-name')}>
                    {data.nickname}
                </Link>
            </div>
            <div className={cx('description')}>
                <span className={cx('des-number')}>{data.followers_count}</span>
                <span className={cx('des-text')}>Follower</span>
                <span className={cx('des-number')}>{data.likes_count}</span>
                <span className={cx('des-text')}>Thích</span>
            </div>
        </div>
    );
}

export default AccountPreview;
