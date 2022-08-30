import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
function Images({ src, alt, fallBack, ...props }, ref) {
    const [_fallBack, setFallBack] = useState('');
    function handleErrorImg() {
        setFallBack(fallBack);
    }
    return <img src={_fallBack ? fallBack : src} alt={alt} ref={ref} {...props} onError={handleErrorImg} />;
}
Images.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fallBack: PropTypes.string,
};
export default forwardRef(Images);
