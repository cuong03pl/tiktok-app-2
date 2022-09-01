import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
    children,
    to,
    href,
    primary,
    round,
    disable,
    uploadBtn,
    followBtn,
    leftIcon,
    rightIcon,
    loginItemBtn,
    small,
    big,
    flex,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        primary,
        round,
        disable,
        uploadBtn,
        followBtn,
        loginItemBtn,
        small,
        big,
        flex: leftIcon || rightIcon,
    });
    const props = { onClick, ...passProps };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon', { leftIcon })}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propsType = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    round: PropTypes.bool,
    disable: PropTypes.bool,
    uploadBtn: PropTypes.bool,
    loginItemBtn: PropTypes.bool,
    followBtn: PropTypes.bool,
    children: PropTypes.string.isRequired,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};
export default Button;
