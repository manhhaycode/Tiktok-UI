import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import useElementOnScreen from '~/hooks/useElementOnScreen';
import { actions, useStore } from '~/store';
import { PlayIcon, UnMutedIcon } from '../Icon';
import { Image } from '../Image';
import styles from './VideoBar.module.scss';

const cx = classNames.bind(styles);

function VideoPlay({ data }) {
    const [state, dispatch] = useStore();

    const ref = useRef(null);
    const inputRef = useRef(null);
    const videoRef = useRef();
    let isVisible = useElementOnScreen(ref, { threshold: 0.5 });
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        if (isVisible) {
            videoRef.current.volume = state.volume / 100;
            if (!playing) {
                // Rewind the video and play from beginning
                setTimeout(function () {
                    if (videoRef.current) {
                        videoRef.current.currentTime = 0;
                        videoRef.current.muted = state.muted;
                        videoRef.current.addEventListener('canplay', () => {
                            setPlaying(true);
                        });
                    }
                }, 200);
            }
        } else {
            if (playing && videoRef.current) {
                videoRef.current.pause();
                setPlaying(false);
            }
        }
    }, [isVisible, playing, state.muted, state.volume]);

    return (
        <div className={cx('DivVideoWrapper')}>
            <div className={cx('wrapper-video-play')}>
                <canvas width="56" height="100" className={cx('canvas')}></canvas>
                <div className={cx('video-card--container')} ref={ref}>
                    <Image src={data.thumb_url} className={cx('thumb-video')}></Image>
                    {isVisible && (
                        <div className={cx('video-play--container')}>
                            <video
                                ref={videoRef}
                                onClick={(e) => {}}
                                className={cx('video-play')}
                                mediatype="video"
                                src={data.file_url}
                                muted={state.muted}
                                playsInline
                                autoPlay
                                loop
                                webkitplaysinline="true"
                            ></video>
                            <div className={cx('video-controls-statePlaying')}>
                                <PlayIcon />
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

                                <div className={cx('video-sound')}>
                                    <UnMutedIcon />
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
