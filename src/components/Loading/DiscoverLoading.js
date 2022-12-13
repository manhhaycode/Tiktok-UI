import styles from './Loading.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DiscoverLoading() {
    return (
        <div>
            <div className={cx('discover-bar-wrapper')}>
                <div className={cx('discover-bar')}>
                    <div className={cx('discover-bar--LinearGradient')}></div>
                </div>
                <div className={cx('discover-bar')}>
                    <div className={cx('discover-bar--LinearGradient')}></div>
                </div>
            </div>
        </div>
    );
}

export default DiscoverLoading;
