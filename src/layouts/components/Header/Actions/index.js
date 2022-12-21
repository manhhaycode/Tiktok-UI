import classNames from 'classnames/bind';
import styles from './Actions.module.scss';

import Button from '~/components/Button/Button';

import {
    DarkModeIcon,
    FeedbackIcon,
    GetCoinIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LiveStudioIcon,
    MessageIcon,
    PlusIcon,
    ProfileViewIcon,
    SeeMoreIcon,
    SettingIcon,
} from '~/components/Icon';
import { Fragment } from 'react';
import { Menu } from '~/components/Popper/Menu';
import ToogleTheme from '~/components/ToogleTheme/ToogleTheme';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <DarkModeIcon />,
        toogle: <ToogleTheme />,
        title: 'Dark Mode',
    },
];

function Actions() {
    const userCurrent = false;
    const USER_MENU = [
        {
            icon: <ProfileViewIcon />,
            title: 'View Profile',
            to: '/feedback',
        },
        {
            icon: <GetCoinIcon />,
            title: 'Get Coins',
        },
        {
            icon: <LiveStudioIcon />,
            title: 'LIVE Studio',
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
        },
        ...MENU_ITEMS,
    ];

    return (
        <div className={cx('right__container')}>
            {userCurrent ? (
                <Fragment>
                    <Button className="btn__upload">
                        <PlusIcon />
                        <p className={cx('btn__upload--text')}>Upload</p>
                    </Button>
                    <Button className="btn__message">
                        <MessageIcon />
                    </Button>
                    <Button className="btn__inbox">
                        <InboxIcon />
                    </Button>
                </Fragment>
            ) : (
                <Fragment>
                    <Button className="btn__upload">
                        <PlusIcon />
                        <p className={cx('btn__upload--text')}>Upload</p>
                    </Button>
                    <Button className="btn__login">Log in</Button>
                </Fragment>
            )}

            <Menu items={userCurrent ? USER_MENU : MENU_ITEMS}>
                {userCurrent ? (
                    <div>accounts</div>
                ) : (
                    <Button className="btn__see-more">
                        <SeeMoreIcon />
                    </Button>
                )}
            </Menu>
        </div>
    );
}

export default Actions;
