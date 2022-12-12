import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Menu({ className, children }) {
    return <div className={cx(className)}>{children}</div>;
}

export default Menu;
