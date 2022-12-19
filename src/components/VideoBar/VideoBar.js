import classNames from 'classnames/bind';
import styles from './VideoBar.module.scss';
import VideoItem from './VideoItem';

const cx = classNames.bind(styles);

function VideoBar({ children, data }) {
    return (
        <div className={cx('wrapper')}>
            {data.map((item, index) => {
                if (item.user.avatar === 'https://files.fullstack.edu.vn/f8-tiktok/') {
                    item.user.avatar = '';
                }
                return <VideoItem key={index} data={item}></VideoItem>;
            })}
        </div>
    );
}

export default VideoBar;
