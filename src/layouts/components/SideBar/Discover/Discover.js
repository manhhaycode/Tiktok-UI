import styles from './Discover.module.scss';
import classNames from 'classnames/bind';
import DiscoverItem from './DiscoverItem';
import { TagIcon } from '~/components/Icon';
import { DiscoverLoading } from '~/components/Loading';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const ListDiscover = [
    'suthatla',
    'mackedoi',
    'sansangthaydoi',
    'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media',
    'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper ',
    'Thiên Thần Tình Yêu - RICKY STAR',
    '7749hieuung',
    'genzlife',
    'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
    'Thằng Hầu (Thái Hoàng Remix) [Short Version]',
];

function Discover() {
    const [listDiscover, setListDiscover] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setListDiscover(ListDiscover);
        }, 2000);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h1 className={cx('title')}>Discover</h1>
                {listDiscover.length > 0 ? (
                    <div className={cx('item-cointainer')}>
                        {listDiscover.map((item, index) => {
                            return (
                                <DiscoverItem key={index} icon={<TagIcon />}>
                                    {item}
                                </DiscoverItem>
                            );
                        })}
                    </div>
                ) : (
                    <DiscoverLoading />
                )}
            </div>
        </div>
    );
}

export default Discover;
