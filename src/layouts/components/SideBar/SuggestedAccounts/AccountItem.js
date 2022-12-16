import styles from './SuggestedAcounts.module.scss';
import classNames from 'classnames/bind';
import { Image } from '~/components/Image';
import { CheckIcon } from '~/components/Icon';

const cx = classNames.bind(styles);

function AccountItem({ data = {}, onClick }) {
    return (
        <div className={cx('account-item__container')}>
            <Image className={cx('avatar')} src={data.avatar}></Image>
            <div className={cx('account-item__info')}>
                <div className={cx('account-item__nickname--container')}>
                    <p className={cx('account-item__nickname')}>{data.nickname}</p>
                    {data.tick && <CheckIcon />}
                </div>
                <div className={cx('account-item__detail')}>{`${data.first_name} ${data.last_name}`}</div>
            </div>
        </div>
    );
}

export default AccountItem;
