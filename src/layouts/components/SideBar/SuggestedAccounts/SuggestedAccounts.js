import styles from './SuggestedAcounts.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import AccountItem from './AccountItem';
import { SuggestedAccountsLoading } from '~/components/Loading';

const cx = classNames.bind(styles);
function SuggestedAccounts({ children, data }) {
    const [seeMore, setSeeMore] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>Suggested accounts</span>
            {children}
            {console.log(data.length)}
            {data.length === 0 && <SuggestedAccountsLoading />}
            {seeMore &&
                data.length > 0 &&
                data.slice(5).map((item) => {
                    console.log('see all');
                    if (item.avatar === 'https://files.fullstack.edu.vn/f8-tiktok/') {
                        item.avatar = '';
                    }
                    return <AccountItem key={item.id} data={item} />;
                })}
            {data.length > 0 && (
                <span
                    className={cx('see')}
                    onClick={() => {
                        setSeeMore((prev) => !prev);
                    }}
                >
                    {seeMore ? 'See less' : 'See all'}
                </span>
            )}
        </div>
    );
}

export default SuggestedAccounts;
