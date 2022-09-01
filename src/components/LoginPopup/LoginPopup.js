import classNames from 'classnames/bind';
import Button from '../Button/Button';
import { CloseIcon, FacebookIcon, GoogleIcon, InstagramIcon, PeopleIcon, QRIcon, TwitterIcon } from '../Icon/Icon';
import styles from './LoginPopup.module.scss';
const cx = classNames.bind(styles);

function LoginPopup({ onClick }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('close-modal')} onClick={onClick}>
                {<CloseIcon height="25px" width="25px" />}
            </div>
            <h2 className={cx('title')}>Đăng nhập vào TikTok</h2>
            <Button leftIcon={<QRIcon height="20px" width="20px" />} loginItemBtn>
                Sử dụng mã QR
            </Button>
            <Button leftIcon={<PeopleIcon height="20px" width="20px" />} loginItemBtn>
                Số điện thoại / Email / TikTok ID
            </Button>
            <Button leftIcon={<FacebookIcon height="20px" width="20px" />} loginItemBtn>
                Tiếp tục với Facebook
            </Button>
            <Button leftIcon={<GoogleIcon height="20px" width="20px" />} loginItemBtn>
                Tiếp tục với Google
            </Button>
            <Button leftIcon={<TwitterIcon height="20px" width="20px" />} loginItemBtn>
                Tiếp tục với Twitter
            </Button>
            <Button leftIcon={<InstagramIcon height="20px" width="20px" />} loginItemBtn>
                Tiếp tục với Instagram
            </Button>
        </div>
    );
}

export default LoginPopup;
