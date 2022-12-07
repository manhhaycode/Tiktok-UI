import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import { AccountItem } from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [visible, setVisible] = useState(false);
    const [loadAnimation, setLoadAnimation] = useState(false);
    const [searchResult, setSearchResult] = useState('');
    const myInterVal = useRef();

    useEffect(() => {
        clearInterval(myInterVal.current);
        if (searchValue) {
            setLoadAnimation(false);
            myInterVal.current = setInterval(() => {
                setLoadAnimation(true);
                setVisible(false);
                fetch(`https://jsonplaceholder.typicode.com/todos`)
                    .then((res) => res.json())
                    .then((posts) => {
                        setSearchResult(posts[0].title);
                        setVisible(true);
                        setLoadAnimation(false);
                        clearInterval(myInterVal.current);
                    })
                    .catch((e) => console.log(e.message));
            }, 500);
        } else {
            setVisible(false);
        }
    }, [searchValue]);

    return (
        <div className={cx('search-bar__container')}>
            <HeadlessTippy
                interactive
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <div className={cx('accounts-title')}>Accounts</div>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
                visible={visible && searchResult.length > 0}
                onClickOutside={(e) => {
                    setVisible(false);
                }}
            >
                <form className={cx('search-bar__form')}>
                    <input
                        className={cx('search-bar__input')}
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                        onFocus={(e) => {
                            if (e.target.value !== '') {
                                setVisible(true);
                            }
                        }}
                        value={searchValue}
                        typeof="search"
                        placeholder="Search accounts and videos"
                    />
                    <svg
                        className={cx('search-bar__remove')}
                        onClick={() => {
                            setSearchValue('');
                            setSearchResult('');
                        }}
                        width="16"
                        data-e2e=""
                        height="16"
                        viewBox="0 0 48 48"
                        fill={!loadAnimation && searchValue.length !== 0 ? 'rgba(22, 24, 35, .34)' : 'transparent'}
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ margin: '0 12' }}
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM15.1466 30.7323L21.8788 24.0001L15.1466 17.2679C14.756 16.8774 14.756 16.2442 15.1466 15.8537L15.8537 15.1466C16.2442 14.756 16.8774 14.756 17.2679 15.1466L24.0001 21.8788L30.7323 15.1466C31.1229 14.756 31.756 14.756 32.1466 15.1466L32.8537 15.8537C33.2442 16.2442 33.2442 16.8774 32.8537 17.2679L26.1214 24.0001L32.8537 30.7323C33.2442 31.1229 33.2442 31.756 32.8537 32.1466L32.1466 32.8537C31.756 33.2442 31.1229 33.2442 30.7323 32.8537L24.0001 26.1214L17.2679 32.8537C16.8774 33.2442 16.2442 33.2442 15.8537 32.8537L15.1466 32.1466C14.756 31.756 14.756 31.1229 15.1466 30.7323Z"
                        ></path>
                    </svg>
                    {loadAnimation && (
                        <div className={cx('lds-ring')}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    )}

                    <span className={cx('search-bar__spacing')}></span>
                    <button className={cx('search-bar__icon')} typeof="submit">
                        <svg
                            width="24"
                            data-e2e=""
                            height="24"
                            viewBox="0 0 48 48"
                            fill="rgba(22, 24, 35, .34)"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
                            ></path>
                        </svg>
                    </button>
                </form>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
