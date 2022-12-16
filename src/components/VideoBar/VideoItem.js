import classNames from 'classnames/bind';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDescription } from '~/hooks';
import { CheckIcon, MusicIcon } from '../Icon';
import { Image } from '../Image';
import styles from './VideoBar.module.scss';
import VideoPlay from './VideoPlay';

const cx = classNames.bind(styles);

function VideoItem({ data }) {
    let description = useDescription(data.description);

    return (
        <div className={cx('container-item')}>
            <Image className={cx('avatar')} src={data.user.avatar} />
            <div className={cx('DivContentContainer')}>
                <Link to="/" className={cx('container-item--info')}>
                    <div className={cx('container-item--nickname')}>
                        {data.user.nickname}
                        <CheckIcon />
                    </div>
                    <div className={cx('container-item--bio')}>{data.user.bio}</div>
                </Link>
                <div className={cx('container-item--des')}>
                    <div className="description">
                        {Array.isArray(description) &&
                            description.map((item, index) => {
                                if (item.value === 'text') {
                                    return (
                                        <span key={index} className={cx('text-description')}>
                                            {item.text}
                                        </span>
                                    );
                                } else {
                                    return (
                                        <Fragment key={index}>
                                            <a
                                                className={cx('hastag-description')}
                                                href={`https://www.tiktok.com/tag/${item.text.split('#')[1]}`}
                                                target="blank"
                                            >
                                                {item.text}
                                            </a>
                                            <span> </span>
                                        </Fragment>
                                    );
                                }
                            })}
                    </div>
                </div>

                {data.music !== '' && (
                    <div className={cx('format-media--container')}>
                        <Link to={'/'} className={cx('format-media')}>
                            <MusicIcon className={cx('format-media--icon')} />
                            {data.music}
                        </Link>
                    </div>
                )}

                <VideoPlay data={data} />
            </div>
        </div>
    );
}

export default VideoItem;
