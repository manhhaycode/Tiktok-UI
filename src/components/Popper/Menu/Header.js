import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { BackBtnIcon } from '~/components/Icon';

const cx = classNames.bind(styles);

function Header({ title, goBack }) {
    return (
        <div className={cx('wrapper-header')}>
            <i style={{ marginLeft: '28px' }} onClick={goBack}>
                <BackBtnIcon />
            </i>
            <div className={cx('wrapper-header--text')}>{title}</div>
        </div>
    );
}

export default Header;
