import classNames from 'classnames/bind';
import {
    HomeIcon,
    HomeIconActive,
    LiveIcon,
    LiveIconActive,
    PeopleIcon,
    PeopleIconActive,
} from '~/components/Icon/Icon';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';
import config from '~/config';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title={'Dành cho bạn'}
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeIconActive />}
                />
                <MenuItem
                    title={'Đang Follow'}
                    to={config.routes.following}
                    icon={<PeopleIcon />}
                    activeIcon={<PeopleIconActive />}
                />
                <MenuItem title={'Live'} to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />} />
            </Menu>
            <SuggestedAccounts title={'Tài khoản được đề xuất'} />
            <SuggestedAccounts title={'Đang follow'} />
        </aside>
    );
}

export default Sidebar;
