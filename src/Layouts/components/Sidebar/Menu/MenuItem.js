import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ title, icon, to, activeIcon }) {
    return (
        <NavLink className={({ isActive }) => cx('menu-item', isActive ? 'active' : 'inactive')} to={to}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>

            <span className={cx('menu-title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
