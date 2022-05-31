import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
// components
import { Wrapper as ProperWrapper } from '~/components/Proper';
import AccoutItem from '~/components/AccountItem';
// tippy
import HeaderTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

//  icon
import { SearchIcon, ClearIcon } from '~/components/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    useEffect(() => {
        if (!searchValue.trim('')) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((data) => {
                setSearchResult(data.data);
                setLoading(false);
            });
    }, [searchValue]);

    const handleClearValue = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHide = () => {
        setShowResult(false);
    };
    return (
        <HeaderTippy
            visible={showResult && searchResult.length > 0}
            placement="bottom-end"
            interactive
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <ProperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((item) => {
                            return <AccoutItem key={item.id} data={item}></AccoutItem>;
                        })}
                    </ProperWrapper>
                </div>
            )}
            onClickOutside={handleHide}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                    placeholder="Tìm kiếm tài khoản và video"
                />
                {searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClearValue}>
                        <ClearIcon height="1.6rem" width="1.6rem" />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <span className={cx('header-split')}></span>
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeaderTippy>
    );
}

export default Search;