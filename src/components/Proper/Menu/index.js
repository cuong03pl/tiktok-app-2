import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as ProperWrapper } from '~/components/Proper';
import MenuItem from './MenuItem.js';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('more-menu')} tabIndex="-1" {...attrs}>
                    <ProperWrapper className={cx('menu-wrapper')}>{renderItems()}</ProperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
