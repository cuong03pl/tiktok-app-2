import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { VerifyIcon } from '../Icon/Icon';
import Images from '../Images/Images';
import Wrapper from '../Proper/Wrapper';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <Tippy
            placement="bottom-start"
            interactive
            offset={[0]}
            delay={[500, 500]}
            render={(attrs) => (
                <div className="account-preview" tabIndex="-1" {...attrs}>
                    <Wrapper>
                        <AccountPreview />
                    </Wrapper>
                </div>
            )}
        >
            <Link to={`@1233`} className={cx('account-item')}>
                <Images
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662015600&x-signature=0vRa7R7V3fx%2B1lPX0EIXconmsdQ%3D"
                    alt=""
                    fallBack="https://yt3.ggpht.com/yti/APfAmoESQvyQvqqzJ-OPKPPIcyLBXahoBbfDKwCAt6xP=s88-c-k-c0x00ffffff-no-rj-mo"
                />
                <div className={cx('info')}>
                    <p className={cx('name')}>
                        <span>theanh28entertainment</span>
                        <VerifyIcon height="14px" width="14px" />
                    </p>
                    <span className={cx('user-name')}>theanh28entertainment</span>
                </div>
            </Link>
        </Tippy>
    );
}

export default AccountItem;
