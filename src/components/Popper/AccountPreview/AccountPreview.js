import classNames from 'classnames/bind';
import styles from './AccountPreview.scss';
import Tippy from '@tippyjs/react/headless';
import { useSpring, motion } from 'framer-motion';
import Wrapper from '../Wrapper';
import { Image } from '~/components/Image';
import Button from '~/components/Button/Button';
import { CheckIcon } from '~/components/Icon';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountPreview({ children, data, isVideo = false }) {
    const render = (attrs) => (
        <div className={cx('box', { isVideo })} tabIndex="-1" {...attrs} style={{ width: isVideo ? 320 : 300 }}>
            <Wrapper>
                <div className={cx('DivProfileContainer')}>
                    <div className="btn-actions">
                        <Image src={data.avatar} className={cx('img-popper')} />
                        <Button className={isVideo ? 'btn-follow-video-popper' : 'btn-follow-popper'}>Follow</Button>
                    </div>
                    <Link to="/" className={cx('profile-nickname')}>
                        {data.nickname}
                        {data.tick && <CheckIcon />}
                    </Link>
                    <Link to="/" className={cx('profile-full-name')}>{`${data.first_name}  ${data.last_name}`}</Link>
                    <div className={cx('profile-popular-count')}>
                        <div className={cx('popular-count--container')}>
                            <p className={cx('count')}>{data.followers_count}</p>
                            Followers
                        </div>
                        <div className={cx('popular-count--container')}>
                            <div className={cx('count')}>{data.likes_count}</div>
                            Likes
                        </div>
                    </div>
                    {isVideo && <p className={cx('profile-bio')}>{data.bio}</p>}
                </div>
            </Wrapper>
        </div>
    );

    return (
        <Tippy
            interactive
            render={render}
            placement="bottom-start"
            popperOptions={{ modifiers: [{ name: 'flip', enabled: false }] }}
            delay={[500, 200]}
        >
            {children}
        </Tippy>
    );
}

export default AccountPreview;
