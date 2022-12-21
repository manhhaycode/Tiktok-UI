import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { actions, useStore } from '~/store';
import Button from '../Button/Button';
import {
    AppleIcon,
    CloseIcon,
    FacebookIcon,
    GoogleIcon,
    InstagramIcon,
    KakaoTalkIcon,
    LINEIcon,
    QRIcon,
    TwitterIcon,
    UserIcon,
} from '../Icon';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    const [state, dispatch] = useStore();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('modal-mask')}></div>
            <div className={cx('login-modal-container')}>
                <div className={cx('login-modal')}>
                    <div
                        className={cx('close-modal--wrapper')}
                        onClick={() => {
                            dispatch(actions.setModalLogin(false));
                        }}
                    >
                        <CloseIcon />
                    </div>
                    <div className={cx('login-modal--page__wrapper')}>
                        <div className={cx('login-modal--page')}>
                            <p className={cx('page__title')}>Log in to TikTok</p>
                            <Button className="btn-login--platform">
                                <QRIcon className={cx('icon-btn-login')} />
                                <p>Use QR code</p>
                            </Button>
                            <Button className="btn-login--platform">
                                <UserIcon className={cx('icon-btn-login')} />
                                <p>Use phone / email / username</p>
                            </Button>
                            <Button className="btn-login--platform">
                                <FacebookIcon className={cx('icon-btn-login')} />
                                <p>Continue with Facebook</p>
                            </Button>
                            <Button className="btn-login--platform">
                                <GoogleIcon className={cx('icon-btn-login')} />
                                <p>Continue with Google</p>
                            </Button>
                            <Button className="btn-login--platform">
                                <TwitterIcon className={cx('icon-btn-login')} />
                                <p>Continue with Twitter</p>
                            </Button>
                            <Button className="btn-login--platform">
                                <LINEIcon className={cx('icon-btn-login')} />
                                <p>Continue with LINE</p>
                            </Button>
                            <Button className="btn-login--platform">
                                <KakaoTalkIcon className={cx('icon-btn-login')} />
                                <p>Continue with KakaoTalk</p>
                            </Button>
                            <Button className="btn-login--platform">
                                <AppleIcon className={cx('icon-btn-login')} />
                                <p>Continue with Apple</p>
                            </Button>
                            <Button className="btn-login--platform">
                                <InstagramIcon className={cx('icon-btn-login')} />
                                <p>Continue with Instagram</p>
                            </Button>
                        </div>
                    </div>

                    <div className={cx('question-account')}>
                        <p>Don’t have an account?</p>
                        <Link to="/" className={cx('link-text')}>
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
