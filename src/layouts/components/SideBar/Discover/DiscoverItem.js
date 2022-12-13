import styles from './Discover.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function DiscoverItem({ icon, children = '' }) {
    return (
        <Link to="/" className={cx('link-item')}>
            <div className={cx('wrapper-item')}>
                {icon}
                <p className={cx('item-text')}>{children}</p>
            </div>
        </Link>
    );
}

export default DiscoverItem;
