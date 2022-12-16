import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import useElementOnScreen from '~/hooks/useElementOnScreen';
import { actions, useStore } from '~/store';
import { MutedIcon, PauseIcon, PlayIcon, UnMutedIcon, VideoReportIcon } from '../Icon';
import { Image } from '../Image';
import styles from './VideoBar.module.scss';

const cx = classNames.bind(styles);

function VideoPlay({ data }) {
    const [state, dispatch] = useStore();
    const ref = useRef(null);
    const inputRef = useRef(null);
    const videoRef = useRef();
    let isVisible = useElementOnScreen(ref, { threshold: 0.5 });
    const [playingClick, setPlayingClick] = useState(true);

    useEffect(() => {
        if (isVisible) {
            videoRef.current.volume = state.volume / 100;
        } else {
            setPlayingClick(true);
        }
    }, [isVisible, state.muted, state.volume]);

    return (
        <div className={cx('DivVideoWrapper')}>
            <div className={cx('wrapper-video-play')}>
                <canvas width="56" height="100" className={cx('canvas')}></canvas>
                <div
                    className={cx('video-card--container')}
                    ref={ref}
                    onMouseOver={() => {
                        setTimeout(() => {});
                    }}
                >
                    <Image src={data.thumb_url} className={cx('thumb-video')}></Image>
                    {isVisible && (
                        <div className={cx('video-play--container')}>
                            <video
                                ref={videoRef}
                                onClick={(e) => {}}
                                className={cx('video-play')}
                                mediatype="video"
                                src={data.file_url}
                                muted={state.volume === '0'}
                                playsInline
                                autoPlay
                                loop
                                webkitplaysinline="true"
                            ></video>
                            <div className={cx('video-report')}>
                                <VideoReportIcon />
                                Report
                            </div>
                            <div
                                className={cx('video-controls-statePlaying')}
                                onClick={() => {
                                    if (playingClick) {
                                        videoRef.current.pause();
                                        setPlayingClick(false);
                                    } else {
                                        setPlayingClick(true);
                                        videoRef.current.play();
                                    }
                                }}
                            >
                                {playingClick ? <PlayIcon /> : <PauseIcon />}
                            </div>
                            <div className={cx('video-controls-volume')}>
                                <div className={cx('sound-controls')}>
                                    <div className={cx('background-sound-controls')}>
                                        <div style={{ width: `${state.volume}%` }} className={cx('sound-bar-range')}>
                                            <div
                                                style={{ transform: `translate(${100 - state.volume}%, -50%)` }}
                                                className={cx('sound-bar-dot')}
                                            ></div>
                                        </div>
                                    </div>

                                    <input
                                        ref={inputRef}
                                        value={state.volume}
                                        className={cx('input-volume')}
                                        type={'range'}
                                        min="0"
                                        max="100"
                                        step="1"
                                        onInput={(e) => {
                                            dispatch(actions.setVolume(e.target.value));
                                        }}
                                    />
                                </div>

                                <div
                                    className={cx('video-sound')}
                                    onClick={() => {
                                        dispatch(actions.setVolume(state.volume === '0' ? '50' : '0'));
                                    }}
                                >
                                    {state.volume === '0' ? <MutedIcon /> : <UnMutedIcon />}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default VideoPlay;
