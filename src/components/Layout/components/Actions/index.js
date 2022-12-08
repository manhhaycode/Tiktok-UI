import classNames from 'classnames/bind';
import styles from './Actions.module.scss';

import Button from '~/components/Button/Button';

import {
    DarkModeIcon,
    FeedbackIcon,
    GetCoinIcon,
    KeyboardIcon,
    LanguageIcon,
    LiveStudioIcon,
    PlusIcon,
    ProfileViewIcon,
    SeeMoreIcon,
    SettingIcon,
} from '~/components/Icon';

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

    console.log(USER_MENU);
    return (
        <div className={cx('right__container')}>
            <Button className="btn__upload">
                <PlusIcon />
                <p className={cx('btn__upload--text')}>Upload</p>
            </Button>
            <Button className="btn__login">Log in</Button>
            <Button className="btn__see-more">
                <SeeMoreIcon />
            </Button>
        </div>
    );
}

export default Actions;
