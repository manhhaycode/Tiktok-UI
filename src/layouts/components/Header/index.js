import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Search from './Search';
import Actions from './Actions';
import { LogoIcon } from '~/components/Icon';
import { Link } from 'react-router-dom';
import config from '~/config';
import { actions, useStore } from '~/store';

const cx = classNames.bind(styles);

function Header() {
    // eslint-disable-next-line
    const [state, dispatch] = useStore();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link
                    to={config.routes.home}
                    className={cx('logo')}
                    onClick={() => {
                        window.scrollTo(0, 0);
                        dispatch(actions.setReload(true));
                    }}
                >
                    <LogoIcon />
                </Link>
                <Search />
                <Actions />
            </div>
        </div>
    );
}

export default Header;
