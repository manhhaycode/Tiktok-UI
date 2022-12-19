import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children, style }) {
    return (
        <div className={cx('wrapper')} style={style}>
            {children}
        </div>
    );
}

export default Wrapper;
