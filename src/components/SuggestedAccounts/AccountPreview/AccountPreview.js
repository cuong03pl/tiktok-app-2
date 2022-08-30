import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button/Button';
import { VerifyIcon } from '~/components/Icon/Icon';
import Images from '~/components/Images/Images';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Images
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662019200&x-signature=Ph8tYrjqkjHnvgNKwSx7h%2B053Ak%3D"
                    alt=""
                />
                <Button primary>Follow</Button>
            </div>
            <div className={cx('info')}>
                <Link to="" className={cx('name')}>
                    <span>theanh28entertainment</span>
                    <VerifyIcon height="14px" width="14px" />
                </Link>
                <Link to={''} className={cx('user-name')}>
                    theanh28entertainment
                </Link>
            </div>
            <div className={cx('description')}>
                <span className={cx('des-number')}>5M</span>
                <span className={cx('des-text')}>Follower</span>
                <span className={cx('des-number')}>5M</span>
                <span className={cx('des-text')}>Thích</span>
            </div>
        </div>
    );
}

export default AccountPreview;
