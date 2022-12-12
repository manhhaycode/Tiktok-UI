import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('main-nav__cointainer')}></div>
            </div>
        </div>
    );
}

export default SideBar;
