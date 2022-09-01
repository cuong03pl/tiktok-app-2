import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { VerifyIcon } from '../Icon/Icon';
import Images from '../Images/Images';
import Wrapper from '../Proper/Wrapper';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Tippy
            placement="bottom-start"
            interactive
            zIndex={9}
            offset={[0]}
            delay={[500, 500]}
            render={(attrs) => (
                <div className="account-preview" tabIndex="-1" {...attrs}>
                    <Wrapper>
                        <AccountPreview data={data} />
                    </Wrapper>
                </div>
            )}
        >
            <Link to={`@1233`} className={cx('account-item')}>
                <Images
                    className={cx('avatar')}
                    src={data.avatar}
                    alt=""
                    fallBack="https://yt3.ggpht.com/yti/APfAmoESQvyQvqqzJ-OPKPPIcyLBXahoBbfDKwCAt6xP=s88-c-k-c0x00ffffff-no-rj-mo"
                />
                <div className={cx('info')}>
                    <p className={cx('name')}>
                        <span>{`${data.first_name} ${data.last_name}`}</span>
                        {data.tick && <VerifyIcon height="14px" width="14px" />}
                    </p>
                    <span className={cx('user-name')}>{data.nickname}</span>
                </div>
            </Link>
        </Tippy>
    );
}

export default AccountItem;
