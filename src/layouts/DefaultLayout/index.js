import SideBar from '../components/SideBar';
import Header from '~/layouts/components/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function DeafaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DeafaultLayout;
