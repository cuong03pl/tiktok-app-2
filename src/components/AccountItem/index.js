import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccoutItem.module.scss';
const cx = classNames.bind(styles);

function AccoutItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/122696a9b8641fc9a21490cc904b5b4e~c5_100x100.jpeg?x-expires=1653537600&x-signature=mx%2FhUg3PYgFXS2ImOYPFqz9tuJo%3D"
                alt=""
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck}></FontAwesomeIcon>
                </p>
                <span className={cx('user-name')}>abcd</span>
            </div>
        </div>
    );
}

export default AccoutItem;
