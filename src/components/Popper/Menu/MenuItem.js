import classNames from 'classnames/bind';
import { Fragment } from 'react';
import Button from '~/components/Button/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ isChildren, children, onClick, iconRight, toogle }) {
    const Icon = iconRight;
    return (
        <Fragment>
            {toogle ? (
                <div className={cx('menu-item--box')}>
                    <div className={cx('menu-item--toogle')}>
                        <Button className="menu-item-toggle">
                            {Icon}
                            {children}
                        </Button>
                        {toogle}
                    </div>
                </div>
            ) : (
                <div className={cx('menu-item--box')}>
                    <Button className={isChildren ? 'menu-item--children' : 'menu-item'} onClick={onClick}>
                        {Icon}
                        {children}
                    </Button>
                </div>
            )}
        </Fragment>
    );
}

export default MenuItem;
