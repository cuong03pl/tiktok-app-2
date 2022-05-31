import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Images from '../Images';
import styles from './AccoutItem.module.scss';
const cx = classNames.bind(styles);

function AccoutItem({ data }) {
    return (
        <Link to={`@${data.nickname}`} className={cx('wrapper')}>
            <Images
                className={cx('avatar')}
                src={data.avatar}
                alt=""
                fallBack="https://yt3.ggpht.com/yti/APfAmoESQvyQvqqzJ-OPKPPIcyLBXahoBbfDKwCAt6xP=s88-c-k-c0x00ffffff-no-rj-mo"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick ? <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} /> : ''}
                </p>
                <span className={cx('user-name')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccoutItem;
