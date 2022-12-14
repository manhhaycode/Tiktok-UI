import classNames from 'classnames/bind';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon } from '../Icon';
import { Image } from '../Image';
import styles from './VideoBar.module.scss';

const cx = classNames.bind(styles);

function VideoItem({ data }) {
    data = data[0];

    let description = data.description.split(' ');

    let descriptionMod;

    if (description[0].search('#') !== -1) {
        descriptionMod = [{ value: 'hastag', text: '' }];
    } else {
        descriptionMod = [{ value: 'text', text: '' }];
    }

    description.map((word, index) => {
        var length = descriptionMod.length - 1;
        console.log(word + ': ' + word.search('#'));
        if (word.search('#') === -1) {
            if (descriptionMod[length].value === 'text') {
                var des = [descriptionMod[length].text, word].join(' ');
                descriptionMod[length].text = des;
            } else {
                descriptionMod = [...descriptionMod, { value: 'text', text: word }];
            }
        } else {
            descriptionMod = [...descriptionMod, { value: 'hastag', text: word }];
        }
        return null;
    });

    descriptionMod.map((item, index) => {
        index = index + 1 > descriptionMod.length - 1 ? -1 : index + 1;
        if (index !== -1) {
            if (item.value === 'text') {
                if (descriptionMod[index].value === 'hastag') {
                    var des = item.text.concat(' ');
                    console.log(des);
                    item.text = des;
                }
            }
        }
        return null;
    });

    descriptionMod[0].text = descriptionMod[0].text.substring(1);

    console.log(descriptionMod);

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
                        {descriptionMod.map((item, index) => {
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
            </div>
        </div>
    );
}

export default VideoItem;
