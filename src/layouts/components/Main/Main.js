import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { VideoBar } from '~/components/VideoBar';
import styles from './Main.module.scss';
import * as APIService from '~/services/APIService';

const cx = classNames.bind(styles);

function Main() {
    const [videoList, setVideoList] = useState({});

    useEffect(() => {
        setTimeout(async () => {
            const res = await APIService.videoList('for-you', 1);
            setVideoList(res);
        });
    }, []);

    return (
        <div className={cx('DivMainContainer')}>
            <div className={cx('wrapper')}></div>
            {JSON.stringify(videoList) !== '{}' && <VideoBar data={videoList.data} />}
        </div>
    );
}

export default Main;
