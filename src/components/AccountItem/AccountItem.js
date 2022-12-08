import classNames from 'classnames/bind';
import styles from './AccountItem.moudle.scss';

const cx = classNames.bind(styles);

function AccountItem({ info }) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/bb158a4f0db62a50dcfbbe8fc626ae62~c5_300x300.webp?x-expires=1670551200&x-signature=Hrp2un2hW%2BalXawRPMWuScCHSDA%3D"
                alt=" "
            ></img>
            <div className={cx('user-info--container')}>
                <div className={cx('user-name')}>
                    adinhsg
                    <svg
                        width="14"
                        data-e2e=""
                        height="14"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ marginLeft: '4px' }}
                    >
                        <circle cx="24" cy="24" r="24" fill="#20D5EC"></circle>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z"
                            fill="white"
                        ></path>
                    </svg>
                </div>
                <div className={cx('user-nick-name')}>a Dinh 🙆🏻‍♂️</div>
            </div>
        </div>
    );
}

export default AccountItem;
