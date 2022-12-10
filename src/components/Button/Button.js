import classNames from 'classnames/bind';
import { forwardRef } from 'react';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ className, children, ...passProps }, ref) {
    return (
        <button className={cx('wrapper', className)} ref={ref} {...passProps}>
            {children}
        </button>
    );
}

export default forwardRef(Button);
