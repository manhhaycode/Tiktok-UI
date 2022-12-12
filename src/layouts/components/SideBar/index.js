import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import { Menu, MenuItem } from './Menu';
import * as APIService from '~/services/APIService';
import {
    FollowingIcon,
    FollowingIconActive,
    HomeIcon,
    HomeIconActive,
    LiveIcon,
    LiveIconActive,
} from '~/components/Icon';
import { AccountItem, SuggestedAccounts } from './SuggestedAccounts';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function SideBar() {
    const handleOnlick = () => {};
    const [suggestedAccounts, setSuggestedAccounts] = useState([]);
    useEffect(() => {
        setTimeout(async () => {
            const res = await APIService.suggestedAccounts(1, 5);
            setSuggestedAccounts(res);
        });
    }, []);

    return (
        <div className={cx('wrapper')}>
            {console.log(suggestedAccounts)}
            <div className={cx('container')}>
                <Menu className="main-nav__container">
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

                <div className={cx('login-container')}>
                    <span>Log in to follow creators, like videos, and view comments.</span>
                    <Button className="btn-login" onClick={handleOnlick}>
                        Log in
                    </Button>
                </div>

                {suggestedAccounts && (
                    <SuggestedAccounts>
                        <div>
                            {suggestedAccounts.map((item) => {
                                if (item.avatar === 'https://files.fullstack.edu.vn/f8-tiktok/') {
                                    item.avatar = '';
                                }
                                return <AccountItem key={item.id} data={item} />;
                            })}
                        </div>
                    </SuggestedAccounts>
                )}
            </div>
        </div>
    );
}

export default SideBar;
