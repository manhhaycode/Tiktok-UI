import styles from './LinkList.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LinkList() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('list__container')}>
                <a className={cx('link-item')} href="https://www.tiktok.com/about?lang=en" target={'blank'}>
                    About
                </a>
                <a className={cx('link-item')} href="https://newsroom.tiktok.com/en-us/" target={'blank'}>
                    Newsroom
                </a>
                <a className={cx('link-item')} href="https://www.tiktok.com/about/contact?lang=en" target={'blank'}>
                    Contact
                </a>
                <a className={cx('link-item')} href="https://careers.tiktok.com/" target={'blank'}>
                    Careers
                </a>
                <a className={cx('link-item')} href="https://www.bytedance.com/" target={'blank'}>
                    ByteDance
                </a>
            </div>
            <div className={cx('list__container')}>
                <a className={cx('link-item')} href="https://www.tiktok.com/forgood" target={'blank'}>
                    TikTok for Good
                </a>
                <a className={cx('link-item')} href="https://www.tiktok.com/business/" target={'blank'}>
                    Advertise
                </a>
                <a className={cx('link-item')} href="https://developers.tiktok.com/?refer=tiktok_web" target={'blank'}>
                    Developers
                </a>
                <a className={cx('link-item')} href="https://www.tiktok.com/transparency/en/" target={'blank'}>
                    Transparency
                </a>
                <a
                    className={cx('link-item')}
                    href="https://www.tiktok.com/tiktok-rewards/eligibility/"
                    target={'blank'}
                >
                    TikTok Rewards
                </a>
                <a className={cx('link-item')} href="https://www.tiktok.com/browse" target={'blank'}>
                    TikTok Browse
                </a>
                <a className={cx('link-item')} href="https://www.tiktok.com/embed" target={'blank'}>
                    TikTok Embeds
                </a>
            </div>

            <div className={cx('list__container')}>
                <a className={cx('link-item')} href="https://support.tiktok.com/en" target={'blank'}>
                    Help
                </a>
                <a className={cx('link-item')} href="https://www.tiktok.com/safety?lang=en" target={'blank'}>
                    Safety
                </a>
                <a
                    className={cx('link-item')}
                    href="https://www.tiktok.com/legal/terms-of-service?lang=en"
                    target={'blank'}
                >
                    Terms
                </a>
                <a
                    className={cx('link-item')}
                    href="https://www.tiktok.com/legal/privacy-policy-row?lang=en"
                    target={'blank'}
                >
                    Privacy
                </a>
                <a
                    className={cx('link-item')}
                    href="https://www.tiktok.com/creators/creator-portal/en-us/"
                    target={'blank'}
                >
                    Creator Portal
                </a>
                <a
                    className={cx('link-item')}
                    href="https://www.tiktok.com/community-guidelines?lang=en"
                    target={'blank'}
                >
                    Community Guidelines
                </a>
            </div>
            <span className={cx('logo-text')}>© 2022 TikTok</span>
        </div>
    );
}

export default LinkList;
