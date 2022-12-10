import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ isChildren, children, onClick, iconRight }) {
    const Icon = iconRight;
    return (
        <div className={cx('menu-item--box')}>
            <Button className={isChildren ? 'menu-item--children' : 'menu-item'} onClick={onClick}>
                {Icon}
                {children}
            </Button>
        </div>
    );
}

export default MenuItem;
