import classNames from 'classnames/bind';
import styles from './VideoBar.module.scss';
import VideoItem from './VideoItem';

const cx = classNames.bind(styles);

function VideoBar({ children, data }) {
    return (
        <div className={cx('wrapper')}>
            <VideoItem data={data}></VideoItem>
            <span>a</span>
        </div>
    );
}

export default VideoBar;
