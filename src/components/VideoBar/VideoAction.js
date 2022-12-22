import classNames from 'classnames/bind';
import { actions, useStore } from '~/store';
import { CommentIcon, HeartIcon, ShareIcon } from '../Icon';
import styles from './VideoBar.module.scss';

const cx = classNames.bind(styles);

function VideoAction({ data }) {
    // eslint-disable-next-line
    const [state, dispatch] = useStore();

    return (
        <div className={cx('video-action--wrapper')}>
            <button className={cx('video-action-btn')}>
                <i className={cx('video-action-icon')}>
                    <ShareIcon />
                </i>
                <strong className={cx('video-action-count')}>{data.shares_count}</strong>
            </button>
            <button
                className={cx('video-action-btn')}
                onClick={() => {
                    dispatch(actions.setModalLogin(true));
                }}
            >
                <i className={cx('video-action-icon')}>
                    <CommentIcon />
                </i>
                <strong className={cx('video-action-count')}>{data.comments_count}</strong>
            </button>
            <button
                className={cx('video-action-btn')}
                onClick={() => {
                    dispatch(actions.setModalLogin(true));
                }}
            >
                <i className={cx('video-action-icon')}>
                    <HeartIcon />
                </i>
                <strong className={cx('video-action-count')}>{data.likes_count}</strong>
            </button>
        </div>
    );
}

export default VideoAction;
