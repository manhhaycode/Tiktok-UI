import classNames from 'classnames/bind';
import Button from '../Button/Button';
import { CommentIcon, HeartIcon, ShareIcon } from '../Icon';
import styles from './VideoBar.module.scss';

const cx = classNames.bind(styles);

function VideoAction({ data }) {
    return (
        <div className={cx('video-action--wrapper')}>
            <button className={cx('video-action-btn')}>
                <i className={cx('video-action-icon')}>
                    <ShareIcon />
                </i>
                <strong className={cx('video-action-count')}>{data.shares_count}</strong>
            </button>
            <button className={cx('video-action-btn')}>
                <i className={cx('video-action-icon')}>
                    <CommentIcon />
                </i>
                <strong className={cx('video-action-count')}>{data.comments_count}</strong>
            </button>
            <button className={cx('video-action-btn')}>
                <i className={cx('video-action-icon')}>
                    <HeartIcon />
                </i>
                <strong className={cx('video-action-count')}>{data.likes_count}</strong>
            </button>
        </div>
    );
}

export default VideoAction;
