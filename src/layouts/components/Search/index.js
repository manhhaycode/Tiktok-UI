import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';

import * as searchServices from '~/services/searchService';
import { WrapperSearch as PopperWrapper } from '~/components/Popper';
import { AccountItem } from '~/components/AccountItem';
import { RemoveIcon, SearchIcon } from '~/components/Icon';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [visible, setVisible] = useState(false);
    const [loadAnimation, setLoadAnimation] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [render, setRender] = useState(true);
    let location = useLocation();
    const myTimeout = useRef();
    const onClickOutside = useRef(false);
    const onChangeLocation = useRef(false);
    const onSelect = useRef(-1);
    const inputRef = useRef(null);

    const getSelectedText = () => {
        var text = '';
        if (typeof window.getSelection != 'undefined') {
            text = window.getSelection().toString();
        } else if (typeof document.selection !== 'undefined' && document.selection.type === 'Text') {
            text = document.selection.createRange().text;
        }
        return text;
    };

    const doSomethingWithSelectedText = () => {
        var selectedText = getSelectedText();
        if (selectedText) {
            onSelect.current = 0;
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleclick);
        document.addEventListener('mouseup', doSomethingWithSelectedText);
        document.addEventListener('mousedown', doSomethingWithSelectedText);
        return () => {
            document.removeEventListener('mouseup', doSomethingWithSelectedText);
            document.removeEventListener('mousedown', doSomethingWithSelectedText);
            document.removeEventListener('click', handleclick);
        };
    });

    useEffect(() => {
        setVisible(false);
        onClickOutside.current = false;
    }, [location]);

    useEffect(() => {
        clearTimeout(myTimeout.current);
        if (searchValue && !onChangeLocation.current) {
            setLoadAnimation(false);
            myTimeout.current = setTimeout(async () => {
                setLoadAnimation(true);
                setVisible(false);
                setSearchResult('');
                let res = await searchServices.search(searchValue.trim(), 'less');
                if (!onClickOutside.current) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
                setSearchResult(res);
                setLoadAnimation(false);
            }, 500);
        } else {
            onChangeLocation.current = false;
            setVisible(false);
            setRender((prev) => !prev);
        }
    }, [searchValue]);

    const handleclick = (e) => {
        if (!inputRef.current.contains(e.target) && !visible) {
            if (onSelect.current === 0) {
                onSelect.current = 1;
            } else {
                onClickOutside.current = true;
                setRender(!render);
            }
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
                                {/* <div className={cx('accounts-title')}>{searchResult}</div> */}
                                <div className={cx('accounts-title')}>Accounts</div>
                                {searchResult &&
                                    searchResult.map((item) => {
                                        if (item.avatar === 'https://files.fullstack.edu.vn/f8-tiktok/') {
                                            item.avatar = '';
                                        }
                                        return (
                                            <AccountItem
                                                key={item.id}
                                                data={item}
                                                onClick={() => {
                                                    onChangeLocation.current = true;
                                                    setSearchValue(item.full_name);
                                                }}
                                            />
                                        );
                                    })}
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
                            console.log(e.target.value);
                            if (e.target.value !== ' ') {
                                setSearchValue(e.target.value);
                            } else {
                                e.target.value = '';
                            }
                        }}
                        onFocus={(e) => {
                            onClickOutside.current = false;
                            setRender(!render);
                            if (e.target.value !== '') {
                                setVisible(true);
                            }
                        }}
                        onClick={(e) => {
                            if (getSelectedText && onSelect.current === 1) {
                                window.getSelection().removeAllRanges();
                                onSelect.current = -1;
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
                    <SearchIcon fill={searchValue ? 'rgba(22, 24, 35, 0.75);' : 'rgba(22, 24, 35, 0.34)'} />
                </button>
            </form>
        </div>
    );
}
export default Search;
