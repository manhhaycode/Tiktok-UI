import styles from './Loading.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SuggestedAccountsLoading() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('circle-load')}></div>
                <div className={cx('bar-load')}>
                    <div className={cx('bar-long--load')}></div>
                    <div className={cx('bar-short--load')}></div>
                </div>
            </div>
        </div>
    );
}

export default SuggestedAccountsLoading;
