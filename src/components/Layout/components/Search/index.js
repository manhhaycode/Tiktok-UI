import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';

import * as searchServices from '~/services/searchService';
import { WrapperSearch as PopperWrapper } from '~/components/Popper';
import { AccountItem } from '~/components/AccountItem';
import RemoveIcon from '~/components/Icon/RemoveIcon';
import SearchIcon from '~/components/Icon/SearchIcon';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [visible, setVisible] = useState(false);
    const [loadAnimation, setLoadAnimation] = useState(false);
    const [searchResult, setSearchResult] = useState('');
    const [render, setRender] = useState(true);
    const myTimeout = useRef();
    const myTimeoutFetch = useRef();
    const onClickOutside = useRef(false);
    const inputRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleclick);
        return () => {
            document.removeEventListener('click', handleclick);
        };
    });

    useEffect(() => {
        // const fetchApi = async () => {
        //     const result = await searchServices.search(searchValue);

        //     if (!onClickOutside.current) {
        //         setVisible(true);
        //     } else {
        //         setVisible(false);
        //     }

        //     setSearchResult(result);
        //     setLoadAnimation(false);
        //     clearTimeout(myTimeoutFetch.current);
        // };

        clearTimeout(myTimeout.current);
        if (searchValue) {
            setLoadAnimation(false);
            myTimeout.current = setTimeout(() => {
                setLoadAnimation(true);
                setVisible(false);
                setSearchResult('');
                myTimeoutFetch.current = setTimeout(() => {
                    fetch(`https://jsonplaceholder.typicode.com/todos`)
                        .then((res) => res.json())
                        .then((posts) => {
                            if (!onClickOutside.current) {
                                setVisible(true);
                            } else {
                                setVisible(false);
                            }
                            setSearchResult(searchValue);
                            setLoadAnimation(false);
                            clearTimeout(myTimeoutFetch.current);
                        })
                        .catch((e) => console.log(e.message));
                }, 1000);
            }, 500);
        } else {
            setVisible(false);
            setRender((prev) => !prev);
        }
    }, [searchValue]);

    const handleclick = (e) => {
        if (!inputRef.current.contains(e.target) && (loadAnimation || !visible)) {
            onClickOutside.current = true;
            setRender(!render);
        }
    };

    return (
        <div className={cx('search-bar__container')}>
            <form className={cx('search-bar__form')}>
                <HeadlessTippy
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <div className={cx('accounts-title')}>{searchResult}</div>
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
                    visible={visible && searchResult.length > 0 && !onClickOutside.current && Boolean(searchValue)}
                    onClickOutside={(e) => {
                        setVisible(false);
                    }}
                >
                    <input
                        ref={inputRef}
                        className={cx('search-bar__input')}
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                        onFocus={(e) => {
                            onClickOutside.current = false;
                            setRender(!render);
                            if (e.target.value !== '') {
                                setVisible(true);
                            }
                        }}
                        value={searchValue}
                        typeof="search"
                        placeholder="Search accounts and videos"
                    />
                </HeadlessTippy>
                <RemoveIcon
                    fill={!loadAnimation && searchValue.length !== 0 ? 'rgba(22, 24, 35, .34)' : 'transparent'}
                    onClick={() => {
                        setSearchValue('');
                        setSearchResult('');
                    }}
                />
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
                    <SearchIcon />
                </button>
            </form>
        </div>
    );
}

export default Search;
