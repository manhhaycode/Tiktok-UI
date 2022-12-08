import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import PlusIcon from '~/components/Icon/PlusIcon';
import SeeMoreIcon from '~/components/Icon/SeeMoreIcon';
import styles from './Actions.module.scss';

const cx = classNames.bind(styles);

// const MENU_ITEMS = [
//     {
//         icon: <FontAwesomeIcon icon={faEarthAsia} />,
//         title: 'English',
//         children: {
//             title: 'Language',
//             data: [
//                 {
//                     type: 'language',
//                     code: 'en',
//                     title: 'English',
//                 },
//                 {
//                     type: 'language',
//                     code: 'vi',
//                     title: 'Tiếng Việt',
//                 },
//             ],
//         },
//     },
//     {
//         icon: <FontAwesomeIcon icon={faCircleQuestion} />,
//         title: 'Feedback and help',
//         to: '/feedback',
//     },
//     {
//         icon: <FontAwesomeIcon icon={faKeyboard} />,
//         title: 'Keyboard shortcuts',
//     },
// ];

function Actions() {
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
