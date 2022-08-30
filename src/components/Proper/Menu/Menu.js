import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import { Wrapper as ProperWrapper } from '~/components/Proper/Proper';
import MenuItem from './MenuItem.js';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Menu({ onChange, items, children }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const handleRender = () => {
        return current.data.map((item, index) => {
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (item.children) {
                            setHistory((pre) => [...pre, item.children]);
                        }
                    }}
                ></MenuItem>
            );
        });
    };
    const handleBack = () => {
        setHistory((pre) => pre.slice(0, 1));
    };

    return (
        <Tippy
            interactive
            delay={[50, 50]}
            render={(attrs) => (
                <div className={cx('more-menu')} tabIndex="-1" {...attrs}>
                    <ProperWrapper className={cx('menu-wrapper')}>
                        {history.length > 1 && <Header onBack={handleBack} title={current.title}></Header>}
                        {handleRender()}
                    </ProperWrapper>
                </div>
            )}
            onHide={() => setHistory((pre) => pre.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
};
export default Menu;
