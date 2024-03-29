import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/img';
import React, { Fragment, useState } from 'react';
// tippy
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// component
import Button from '~/components/Button/Button';
import Menu from '~/components/Proper/Menu/Menu';
import Image from '~/components/Images/Images';
import Search from '../Search/Search';
// icons
import {
    MessageIcon,
    MessageBoxIcon,
    UserIcon,
    CoinIcon,
    KeyBoardIcon,
    SignOutIcon,
    LanguageIcon,
    QuestionIcon,
    SettingIcon,
    PlusIcon,
} from '~/components/Icon/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import config from '~/config';
import Modal from '~/components/Modal/Modal';
import ModalBox from '~/components/Modal/Modal';
import LoginPopup from '~/components/LoginPopup/LoginPopup';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon width="2rem" height="2rem" />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <QuestionIcon width="2rem" height="2rem" />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <KeyBoardIcon width="2rem" height="2rem" />,
        title: 'Phím tắt trên bàn phím',
    },
];
const currentUser = false;
function Header() {
    function handleMenuChange(menuItems) {
        console.log(menuItems);
    }

    const userMenu = [
        {
            icon: <UserIcon width="2rem" height="2rem" />,
            title: 'Xem hồ sơ',
            to: '/feedback',
        },
        {
            icon: <CoinIcon width="2rem" height="2rem" />,
            title: 'Nhận xu',
            to: '/getcoin',
        },
        {
            icon: <SettingIcon width="2rem" height="2rem" />,
            title: 'Cài đặt',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <SignOutIcon width="2rem" height="2rem" />,
            title: 'Đăng xuất',
            separate: true,
        },
    ];
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo}></img>
                </Link>
                <Search></Search>
                <div className={cx('action')}>
                    {currentUser ? (
                        <Fragment>
                            <div className={cx('current-user')}>
                                <Button uploadBtn leftIcon={<PlusIcon height="2rem" width="2rem" />}>
                                    Tải lên
                                </Button>
                                <Tippy content="Tin Nhắn ">
                                    <button className={cx('user-btn')}>
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                                <Tippy content="Hộp Thư">
                                    <button className={cx('user-btn')}>
                                        <MessageBoxIcon />
                                    </button>
                                </Tippy>
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Button uploadBtn leftIcon={<PlusIcon height="2rem" width="2rem" />}>
                                Tải lên
                            </Button>

                            <Button onClick={openModal} primary>
                                Đăng nhập
                            </Button>
                        </Fragment>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('avatar-user')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/122696a9b8641fc9a21490cc904b5b4e~c5_100x100.jpeg?x-expires=1653537600&x-signature=mx%2FhUg3PYgFXS2ImOYPFqz9tuJo%3D"
                                alt=""
                                fallBack="https://yt3.ggpht.com/yti/APfAmoESQvyQvqqzJ-OPKPPIcyLBXahoBbfDKwCAt6xP=s88-c-k-c0x00ffffff-no-rj-mo"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>

            <Modal isOpen={modalIsOpen}>
                <LoginPopup onClick={closeModal} />
            </Modal>
        </header>
    );
}

export default Header;
