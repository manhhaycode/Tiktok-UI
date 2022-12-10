import classNames from 'classnames/bind';
import { CheckIcon } from '../Icon';
import { Image } from '../Image';
import styles from './AccountItem.moudle.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar}></Image>
            <div className={cx('user-info--container')}>
                <div className={cx('user-name')}>
                    {data.full_name}
                    {data.tick && <CheckIcon />}
                </div>
                <div className={cx('user-nick-name')}>{data.nickname}</div>
            </div>
        </div>
    );
}

export default AccountItem;
