import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import { Menu, MenuItem } from './Menu';
import {
    FollowingIcon,
    FollowingIconActive,
    HomeIcon,
    HomeIconActive,
    LiveIcon,
    LiveIconActive,
} from '~/components/Icon';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Menu className="main-nav__cointainer">
                    <MenuItem to={'/'} icon={<HomeIcon />} iconAcive={<HomeIconActive />}>
                        For You
                    </MenuItem>
                    <MenuItem to={'/following'} icon={<FollowingIcon />} iconAcive={<FollowingIconActive />}>
                        Following
                    </MenuItem>
                    <MenuItem to={'/live'} icon={<LiveIcon />} iconAcive={<LiveIconActive />}>
                        LIVE
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
}

export default SideBar;
