import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function MenuItem({ className, children, to, icon, iconAcive }) {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('icon-active')}>{iconAcive}</span>
            <p className={cx('title')}>{children}</p>
        </NavLink>
    );
}

export default MenuItem;
