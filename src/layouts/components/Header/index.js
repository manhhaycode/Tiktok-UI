import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Search from '../Search';
import Actions from '../Actions';
import { LogoIcon } from '~/components/Icon';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <a href="/" className={cx('logo')}>
                    <LogoIcon />
                </a>
                <Search />
                <Actions />
            </div>
        </div>
    );
}

export default Header;
