import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useElementOnScreen, useAspectRatioVideo } from '~/hooks';
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
    let videoAspectRaito = useAspectRatioVideo(data.meta);
    let isVisible = useElementOnScreen(ref, { threshold: [0.4, 0.8] }, 0.75);
    const [playingClick, setPlayingClick] = useState(true);
    const refLoading = useRef(null);

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
                <canvas width={videoAspectRaito.x} height={videoAspectRaito.y} className={cx('canvas')}></canvas>
                <div className={cx('video-card--container')} ref={ref}>
                    <Image src={data.thumb_url} className={cx('thumb-video')}></Image>
                    {isVisible && (
                        <div className={cx('video-play--container')}>
                            <video
                                onLoadStart={() => {
                                    if (refLoading.current) {
                                        refLoading.current.className = cx('main-loading', 'onload');
                                    }
                                }}
                                onLoadedData={() => {
                                    setTimeout(() => {
                                        if (refLoading.current) refLoading.current.className = cx('main-loading');
                                    }, 700);
                                    if (videoRef.current) videoRef.current.className = cx('video-play', 'onload');
                                }}
                                ref={videoRef}
                                onClick={(e) => {}}
                                className={cx('video-play')}
                                controls={false}
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
                            <div className={cx('main-loading')} ref={refLoading}>
                                <div className={cx('circle', 'first')}></div>
                                <div className={cx('circle', 'second')}></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default VideoPlay;
