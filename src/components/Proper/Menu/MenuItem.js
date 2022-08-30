import Button from '~/components/Button/Button';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
// className={cx('menu-btn')}
function MenuItem({ data, onClick }) {
    return (
        <Button className={cx('menu-btn')} to={data.to} href={data.href} leftIcon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}
MenuItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
};
export default MenuItem;
