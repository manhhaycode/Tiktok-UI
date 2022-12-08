import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
const cx = classNames.bind(styles);
function WrapperSearch({ children }) {
    return <div className={cx('wrapper-search')}>{children}</div>;
}

export default WrapperSearch;
