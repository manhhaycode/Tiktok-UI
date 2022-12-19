import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { VideoBar } from '~/components/VideoBar';
import styles from './Main.module.scss';
import * as APIService from '~/services/APIService';
import { useElementOnScreen } from '~/hooks';
import Chance from 'chance';

const cx = classNames.bind(styles);

function Main() {
    const [videoList, setVideoList] = useState([]);
    const endListRef = useRef(null);
    const isLoading = useElementOnScreen(endListRef, { threshold: 0 }, 0);

    useEffect(() => {
        setTimeout(async () => {
            if (isLoading) {
                const res = await APIService.videoList('for-you', Chance().integer({ min: 0, max: 20 }));
                setVideoList((prev) => [...prev, res]);
            }
        }, 1000);
    }, [isLoading]);

    return (
        <div className={cx('DivMainContainer')}>
            <div className={cx('wrapper')}></div>
            {videoList.length > 0 &&
                videoList.map((item, index) => {
                    return <VideoBar key={index} data={item.data} />;
                })}
            <div className={cx('end-list')} ref={endListRef}>
                {isLoading && (
                    <div className={cx('main-loading')}>
                        <div className={cx('circle', 'first')}></div>
                        <div className={cx('circle', 'second')}></div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Main;
