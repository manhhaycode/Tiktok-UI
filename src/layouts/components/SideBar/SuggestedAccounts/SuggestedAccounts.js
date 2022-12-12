import styles from './SuggestedAcounts.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function SuggestedAccounts({ children, data }) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>Suggested accounts</span>
            {children}
            <span className={cx('see-all')}>See all</span>
        </div>
    );
}

export default SuggestedAccounts;
