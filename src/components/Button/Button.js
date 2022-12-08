import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ className, children, ...passProps }) {
    return (
        <button className={cx('wrapper', className)} {...passProps}>
            {children}
        </button>
    );
}

export default Button;
