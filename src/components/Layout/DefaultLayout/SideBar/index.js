import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('inner')}>
                    <h1>SideBar</h1>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
