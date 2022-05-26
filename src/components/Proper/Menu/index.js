import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as ProperWrapper } from '~/components/Proper';
import MenuItem from './MenuItem.js';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Menu({ children, items = [], onChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    console.log('history', history);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            console.log(item);
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (item.children) {
                            setHistory((pre) => [...pre, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            interactive
            visible
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('more-menu')} tabIndex="-1" {...attrs}>
                    <ProperWrapper className={cx('menu-wrapper')}>
                        {history.length > 1 ? (
                            <Header
                                title="Ngôn Ngữ"
                                onBack={() => {
                                    setHistory((pre) => pre.slice(0, pre.length - 1));
                                }}
                            ></Header>
                        ) : (
                            ''
                        )}
                        {renderItems()}
                    </ProperWrapper>
                    {console.log('history', history)}
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
